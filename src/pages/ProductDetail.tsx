import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Star, Minus, Plus, ShoppingBag, Phone, ChevronLeft, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProductBySlug, formatPrice, Product } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: product, isLoading, error } = useQuery<Product | undefined>({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug || ""),
    enabled: !!slug, // Chỉ chạy query khi có slug
  });

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <Layout><div className="container-custom py-20 text-center">Đang tải sản phẩm...</div></Layout>;
  }

  if (error || !product) {

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="font-serif text-2xl font-bold mb-4">Sản phẩm không tồn tại</h1>
          <Button asChild>
            <Link to="/san-pham">Quay lại danh sách</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const variant = product.variants[selectedVariantIndex];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="container-custom">
          <Link to="/san-pham" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Quay lại sản phẩm
          </Link>
        </div>
      </div>

      <section className="py-8 lg:py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-card rounded-xl overflow-hidden shadow-card">
                <img src={product.images[0] || '/placeholder.svg'} alt={product.name} className="w-full h-full object-cover" />
              </div>
              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.slice(0, 4).map((img, i) => (
                  <div key={i} className="w-20 h-20 bg-card rounded-lg overflow-hidden shadow-card cursor-pointer hover:ring-2 ring-primary transition-all">
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-rice text-rice' : 'text-muted'}`} />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.review_count} đánh giá)</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-3">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl lg:text-3xl font-bold text-primary">
                  {formatPrice(variant.price)}
                </span>
                {variant.original_price && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(variant.original_price)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Variants */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Dung tích
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantIndex(i)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedVariantIndex === i
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {v.size}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Đóng gói: {variant.packaging} • Còn {variant.stock} sản phẩm
                </p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Số lượng
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Giảm số lượng"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(variant.stock, quantity + 1))}
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Tăng số lượng"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <Button variant="clay" size="xl" className="flex-1" asChild>
                  <Link to={`/dat-hang?product=${product.slug}&variant=${variant.id}&qty=${quantity}`}>
                    <ShoppingBag className="w-5 h-5" />
                    Đặt hàng ngay
                  </Link>
                </Button>
                <Button variant="outline-clay" size="xl" asChild>
                  <a href="tel:0905123456">
                    <Phone className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              {/* Details */}
              <div className="space-y-4 pt-6 border-t border-border">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Nguyên liệu</h3>
                  <ul className="space-y-1">
                    {product.ingredients.map((ing) => (
                      <li key={ing} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Check className="w-4 h-4 text-bamboo" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Nồng độ cồn:</span>
                    <span className="ml-2 font-medium text-foreground">{product.alcohol_content}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Quy trình ủ:</span>
                    <span className="ml-2 font-medium text-foreground">{product.aging_process}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
}
export default ProductDetail;
