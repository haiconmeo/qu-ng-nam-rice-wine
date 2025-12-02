import { Leaf, Award, Truck, Shield } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Hữu Cơ",
    description: "Gạo lứt được trồng hoàn toàn hữu cơ tại Quảng Nam, không thuốc trừ sâu, không hóa chất.",
  },
  {
    icon: Award,
    title: "Gia Truyền 3 Đời",
    description: "Công thức chưng cất được truyền lại qua 3 thế hệ, giữ nguyên hương vị truyền thống.",
  },
  {
    icon: Truck,
    title: "Giao Hàng Toàn Quốc",
    description: "Ship COD toàn quốc, miễn phí vận chuyển cho đơn hàng từ 500.000đ.",
  },
  {
    icon: Shield,
    title: "Cam Kết Chất Lượng",
    description: "Đổi trả miễn phí nếu sản phẩm không đạt chất lượng. Hoàn tiền 100%.",
  },
];

export function Benefits() {
  return (
    <section className="py-16 lg:py-24 bg-cream-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Giá Trị Khác Biệt
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 bg-background rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
