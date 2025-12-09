import { pb } from '@/lib/pocketbase';
import type { ListResult, RecordModel } from 'pocketbase';

// Giữ lại các interface để đảm bảo type-safety trong ứng dụng của bạn
export interface ProductVariant {
  id: string;
  size: string;
  price: number;
  original_price?: number; // Đổi thành snake_case để khớp với PocketBase
  stock: number;
  packaging: string;
}

export interface Award extends RecordModel {
  name: string;
  description: string;
  logo: string;
  year: number;
}


export interface Product {
  id: string;
  name: string;
  slug: string;
  short_description: string; // Đổi thành snake_case
  description: string;
  ingredients: string[];
  alcohol_content: string; // Đổi thành snake_case
  aging_process: string; // Đổi thành snake_case
  images: string[];
  variants: ProductVariant[];
  rating: number;
  review_count: number; // Đổi thành snake_case
  featured: boolean;
  // Category và awards có thể là object đầy đủ nếu được expand
  category: string | RecordModel;
  // Thêm các trường expand từ PocketBase
  expand?: {
    'product_variants(product)': ProductVariant[];
    category: RecordModel;
  };
}

/**
 * Ánh xạ dữ liệu từ PocketBase record sang cấu trúc Product của ứng dụng.
 * @param record - Dữ liệu record thô từ PocketBase.
 * @returns Một đối tượng Product đã được định dạng.
 */
function mapRecordToProduct(record: Product): Product {
  // Lấy các biến thể từ trường expand
  const variants = record.expand?.['product_variants(product)'] || [];
  
  // Tạo URL đầy đủ cho các hình ảnh
  const imageUrls = record.images.map(imageName => 
    pb.files.getUrl(record, imageName, { thumb: '300x300' })
  );

  return {
    ...record,
    variants: variants,
    images: imageUrls,
  };
}

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  try {
    const record = await pb.collection('products').getFirstListItem<Product>(`slug = "${slug}"`, {
      expand: 'product_variants(product),category',
    });
    return mapRecordToProduct(record);
  } catch (error: any) {
    // PocketBase ném lỗi khi không tìm thấy record, trả về undefined
    if (error.status === 404) {
      return undefined;
    } else if (error.isAbort) {
      // Tell react-query to ignore this query by returning a promise that never resolves
      return new Promise(() => {});
    }
    console.error('Error fetching product by slug:', error);
    throw error;
  }
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  try {
    const result: ListResult<Product> = await pb.collection('products').getList<Product>(1, 4, {
      filter: 'featured = true',
      expand: 'product_variants(product)',
      sort: '-created',
    });
    return result.items.map(mapRecordToProduct); // Đảm bảo trả về mảng
  } catch (error: any) {
    // Bỏ qua lỗi autocancel một cách im lặng, vì nó là hành vi dự kiến
    // Ném lỗi để react-query xử lý, tránh trả về dữ liệu không nhất quán
    if (error.isAbort) {
      // Tell react-query to ignore this query by returning a promise that never resolves
      return new Promise(() => {});
    }
    console.error('Error fetching featured products:', error);
    throw error;
  }
};

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const result: Product[] = await pb.collection('products').getFullList<Product>({
      expand: 'product_variants(product)',
      sort: '-created',
    });
    // Luôn map để đảm bảo cấu trúc dữ liệu nhất quán (đặc biệt là URL hình ảnh)
    return result.map(mapRecordToProduct);
  } catch (error: any) {
    if (error.isAbort) {
      // Tell react-query to ignore this query by returning a promise that never resolves
      return new Promise(() => {});
    }
    console.error('Error fetching all products:', error);
    throw error;
  }
};

export const getAwards = async (): Promise<Award[]> => {
  try {
    const records = await pb.collection('awards').getFullList<Award>({
      sort: '-year',
    });
    // Map records to include full logo URL
    return records.map(record => ({
      ...record,
      logo: record.logo ? pb.files.getUrl(record, record.logo, { thumb: '150x150' }) : ''
    }));
  } catch (error: any) {
    if (error.isAbort) {
      return new Promise(() => {});
    }
    console.error('Error fetching awards:', error);
    throw error;
  }
};

export interface OrderData {
  customer_name: string;
  customer_phone: string;
  customer_address: string;
  product: string; // product record ID
  product_variant: string; // variant record ID
  quantity: number;
  total_price: number;
  payment_method: 'cod' | 'transfer';
  note?: string;
}

export const createOrder = async (data: OrderData) => {
  try {
    const record = await pb.collection('orders').create({
      ...data,
      status: 'pending', // Luôn đặt trạng thái là 'pending' khi mới tạo
    });
    return record;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error; // Ném lỗi để react-query/component có thể xử lý
  }
};

export const incrementTotalVisits = async () => {
  try {
    // Dùng PocketBase SDK để thực hiện một request tùy chỉnh
    // tới một endpoint API Rule mà chúng ta sẽ tạo ở bước sau.
    // Cách này hiệu quả hơn là get rồi update.
    await pb.send('/api/custom/increment_visits', {
      method: 'POST',
    });
  } catch (error) {
    // Lỗi ở đây có thể bỏ qua một cách an toàn ở phía client
    // vì nó không ảnh hưởng tới trải nghiệm người dùng.
    console.error('Failed to increment visit count:', error);
  }
};

export const getTotalVisits = async (): Promise<number> => {
  try {
    const record = await pb.collection('site_stats').getFirstListItem("key = 'total_visits'");
    return record.value || 0;
  } catch (error) {
    // Nếu không tìm thấy record hoặc có lỗi, trả về 0
    // Không cần log lỗi ra console vì đây không phải lỗi nghiêm trọng
    // console.error('Failed to get visit count:', error);
    return 0;
  }
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};
