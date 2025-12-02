import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { products, formatPrice } from "@/data/products";

const Products = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-rice/10">
        <div className="container-custom text-center">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sản Phẩm Rượu Gạo Lứt
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Khám phá các dòng rượu gạo lứt truyền thống Quảng Nam, từ phiên bản cơ bản đến cao cấp
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <article
                key={product.id}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <Link to={`/san-pham/${product.slug}`} className="block relative aspect-square bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-rice/10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-serif text-3xl text-primary font-bold">酒</span>
                    </div>
                  </div>
                  
                  {product.variants[0].originalPrice && (
                    <div className="absolute top-3 left-3 px-2 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded">
                      SALE
                    </div>
                  )}
                  
                  {product.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-rice text-earth text-xs font-bold rounded">
                      Nổi bật
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3.5 h-3.5 fill-rice text-rice" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                  </div>

                  <h3 className="font-serif text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    <Link to={`/san-pham/${product.slug}`}>{product.name}</Link>
                  </h3>

                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-base font-bold text-primary">
                        {formatPrice(product.variants[0].price)}
                      </span>
                      {product.variants[0].originalPrice && (
                        <span className="ml-1.5 text-xs text-muted-foreground line-through">
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
        </div>
      </section>
    </Layout>
  );
};

export default Products;
