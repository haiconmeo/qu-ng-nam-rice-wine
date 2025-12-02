export interface ProductVariant {
  id: string;
  size: string;
  price: number;
  originalPrice?: number;
  stock: number;
  packaging: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  ingredients: string[];
  alcoholContent: string;
  agingProcess: string;
  images: string[];
  variants: ProductVariant[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Rượu Gạo Lứt Truyền Thống",
    slug: "ruou-gao-lut-truyen-thong",
    shortDescription: "Hương vị đậm đà, ủ theo phương pháp gia truyền 3 đời",
    description: "Rượu Gạo Lứt Truyền Thống được chưng cất từ gạo lứt hữu cơ Quảng Nam, ủ trong chum sành theo công thức gia truyền 3 đời. Mỗi giọt rượu mang đậm hương vị quê hương, thơm nồng mà êm dịu.",
    ingredients: ["Gạo lứt hữu cơ Quảng Nam", "Men lá truyền thống", "Nước suối tự nhiên"],
    alcoholContent: "29-30%",
    agingProcess: "Ủ tối thiểu 6 tháng trong chum sành",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    variants: [
      { id: "1-500", size: "500ml", price: 150000, originalPrice: 180000, stock: 50, packaging: "Chai thủy tinh" },
      { id: "1-750", size: "750ml", price: 220000, originalPrice: 250000, stock: 30, packaging: "Chai thủy tinh" },
      { id: "1-2000", size: "2 Lít", price: 550000, originalPrice: 600000, stock: 20, packaging: "Can nhựa cao cấp" },
      { id: "1-5000", size: "5 Lít", price: 1200000, stock: 10, packaging: "Can nhựa cao cấp" },
    ],
    rating: 4.8,
    reviewCount: 127,
    featured: true,
    category: "truyen-thong",
  },
  {
    id: "2",
    name: "Rượu Gạo Lứt Đặc Biệt",
    slug: "ruou-gao-lut-dac-biet",
    shortDescription: "Phiên bản cao cấp, ủ 12 tháng trong chum đất nung",
    description: "Phiên bản đặc biệt được tuyển chọn từ những mẻ rượu tinh túy nhất, ủ đủ 12 tháng trong chum đất nung. Hương thơm phức hợp, vị ngọt hậu kéo dài.",
    ingredients: ["Gạo lứt đỏ hữu cơ", "Men lá cổ truyền", "Nước suối núi Bà Nà"],
    alcoholContent: "32-33%",
    agingProcess: "Ủ 12 tháng trong chum đất nung",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    variants: [
      { id: "2-500", size: "500ml", price: 250000, stock: 25, packaging: "Chai thủy tinh cao cấp" },
      { id: "2-750", size: "750ml", price: 350000, stock: 20, packaging: "Chai thủy tinh cao cấp" },
      { id: "2-2000", size: "2 Lít", price: 850000, stock: 10, packaging: "Bình gốm" },
    ],
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    category: "cao-cap",
  },
  {
    id: "3",
    name: "Rượu Nếp Cẩm Quảng Nam",
    slug: "ruou-nep-cam-quang-nam",
    shortDescription: "Rượu nếp cẩm thơm ngọt, màu tím đặc trưng",
    description: "Rượu Nếp Cẩm được nấu từ gạo nếp cẩm tím Quảng Nam, có màu tím hồng đặc trưng và vị ngọt thanh. Phù hợp với chị em phụ nữ và các bạn mới thưởng thức rượu.",
    ingredients: ["Gạo nếp cẩm tím", "Men lá", "Nước suối"],
    alcoholContent: "18-20%",
    agingProcess: "Ủ 3 tháng",
    images: ["/placeholder.svg", "/placeholder.svg"],
    variants: [
      { id: "3-500", size: "500ml", price: 120000, stock: 40, packaging: "Chai thủy tinh" },
      { id: "3-750", size: "750ml", price: 170000, stock: 30, packaging: "Chai thủy tinh" },
    ],
    rating: 4.7,
    reviewCount: 65,
    featured: false,
    category: "nep-cam",
  },
  {
    id: "4",
    name: "Set Quà Tặng Rượu Gạo Lứt",
    slug: "set-qua-tang-ruou-gao-lut",
    shortDescription: "Bộ quà tặng sang trọng, ý nghĩa cho người thân",
    description: "Bộ quà tặng gồm 2 chai rượu gạo lứt 500ml trong hộp gỗ thủ công, kèm 2 ly sành truyền thống. Món quà ý nghĩa cho ngày Tết, sinh nhật hay các dịp đặc biệt.",
    ingredients: ["2 chai Rượu Gạo Lứt Truyền Thống 500ml", "2 ly sành thủ công", "Hộp gỗ khắc laser"],
    alcoholContent: "29-30%",
    agingProcess: "Ủ 6 tháng",
    images: ["/placeholder.svg", "/placeholder.svg"],
    variants: [
      { id: "4-set", size: "Set 2 chai", price: 450000, originalPrice: 500000, stock: 15, packaging: "Hộp gỗ cao cấp" },
    ],
    rating: 5.0,
    reviewCount: 42,
    featured: true,
    category: "qua-tang",
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};
