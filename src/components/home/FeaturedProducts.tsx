import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, formatPrice } from "@/data/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Sản phẩm nổi bật
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Rượu Gạo Lứt Tinh Hoa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Được chọn lọc từ những mẻ rượu tốt nhất, ủ đủ thời gian trong chum sành truyền thống
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.slice(0, 3).map((product, index) => (
            <article
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <Link to={`/san-pham/${product.slug}`} className="block relative aspect-[4/3] bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-rice/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="font-serif text-4xl text-primary font-bold">酒</span>
                  </div>
                </div>
                
                {/* Badge */}
                {product.variants[0].originalPrice && (
                  <div className="absolute top-4 left-4 px-2 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded">
                    SALE
                  </div>
                )}
              </Link>

              {/* Content */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-rice text-rice" />
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  <Link to={`/san-pham/${product.slug}`}>{product.name}</Link>
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.shortDescription}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary">
                      {formatPrice(product.variants[0].price)}
                    </span>
                    {product.variants[0].originalPrice && (
                      <span className="ml-2 text-sm text-muted-foreground line-through">
                        {formatPrice(product.variants[0].originalPrice)}
                      </span>
                    )}
                  </div>
                  <Button variant="clay" size="sm" asChild>
                    <Link to={`/san-pham/${product.slug}`}>
                      <ShoppingBag className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Button variant="outline-clay" size="lg" asChild>
            <Link to="/san-pham">
              Xem tất cả sản phẩm
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
