import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getTotalVisits } from "@/data/products";

export function Hero() {
  const { data: totalVisits } = useQuery<number>({
    queryKey: ["totalVisits"],
    queryFn: getTotalVisits,
    staleTime: 1000 * 60 * 5, // Dữ liệu này không cần cập nhật quá thường xuyên, set 5 phút
    refetchOnWindowFocus: false,
  });
  let visits = totalVisits || 0;
  if (visits < 1000){
    visits = Math.floor(visits / 10) * 10;
  }else{
    visits = Math.floor(visits / 100) * 100;
  }
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-clay-dark to-earth">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-pattern" />
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-rice/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-rice/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rice/20 rounded-full text-rice text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-rice rounded-full animate-pulse" />
              Gia truyền 3 đời
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Rượu Gạo Lứt
              <span className="block text-rice">Quảng Nam</span>
            </h1>

            <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up delay-100">
              Tinh hoa từ hạt gạo lứt hữu cơ, chưng cất theo phương pháp cổ truyền. 
              Mỗi giọt rượu là câu chuyện của đất trời Quảng Nam.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-200">
              <Button variant="gold" size="xl" asChild>
                <Link to="/san-pham">
                  Khám phá sản phẩm
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-gold" size="xl" asChild>
                <a href="tel:0905123456">
                  <Phone className="w-5 h-5" />
                  Gọi ngay
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-slide-up delay-300">
              {[
                { value: "3", label: "Đời gia truyền" },
                { value: "100%", label: "Nguyên liệu hữu cơ" },
                { value: "6+", label: "Tháng ủ chum" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-rice">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
              {totalVisits&& (
                <div className="text-center lg:text-left">
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-rice">{visits}+</div>
                  <div className="text-xs lg:text-sm text-primary-foreground/70">Lượt truy cập</div>
                </div>
              )}
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-rice/20 rounded-full blur-3xl" />
              
              {/* Main circle with illustration placeholder */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-rice/30 to-rice/10 backdrop-blur-sm border border-rice/30 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-rice/20 flex items-center justify-center">
                    <span className="font-serif text-5xl text-rice font-bold">酒</span>
                  </div>
                  <p className="text-rice/90 font-serif text-lg">Chum rượu truyền thống</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-0 right-0 px-4 py-2 bg-background/90 rounded-full shadow-elevated text-sm font-medium text-foreground animate-fade-in delay-200">
                ⭐ 4.9/5 đánh giá
              </div>
              <div className="absolute bottom-10 left-0 px-4 py-2 bg-background/90 rounded-full shadow-elevated text-sm font-medium text-foreground animate-fade-in delay-300">
                🎁 Free ship từ 500k
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)"
      }} />
    </section>
  );
}
