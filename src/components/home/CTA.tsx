import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

export function CTA() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-clay-dark to-earth">
        <div className="absolute inset-0 opacity-10 bg-pattern" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-rice/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rice/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rice/20 rounded-full text-rice text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            Ưu đãi đặc biệt
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Giảm 10% Cho Đơn Hàng Đầu Tiên
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Đặt hàng ngay hôm nay để nhận ưu đãi giảm giá 10% và miễn phí vận chuyển cho đơn từ 500.000đ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/dat-hang">
                Đặt hàng ngay
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline-gold" size="xl" asChild>
              <Link to="/san-pham">
                Xem sản phẩm
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-primary-foreground/20">
            {[
              "✓ Ship COD toàn quốc",
              "✓ Đổi trả miễn phí",
              "✓ Thanh toán an toàn",
            ].map((badge) => (
              <span key={badge} className="text-sm text-primary-foreground/70">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
