import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn Hùng",
    location: "Đà Nẵng",
    rating: 5,
    content: "Rượu thơm ngon, uống vào êm dịu, không gắt như rượu công nghiệp. Đã mua nhiều lần để biếu tặng.",
    avatar: "H",
  },
  {
    id: 2,
    name: "Trần Thị Mai",
    location: "TP.HCM",
    rating: 5,
    content: "Lần đầu mua thử, rất hài lòng! Ship nhanh, đóng gói cẩn thận. Rượu nếp cẩm ngọt thanh, rất phù hợp với chị em.",
    avatar: "M",
  },
  {
    id: 3,
    name: "Lê Đức Anh",
    location: "Hà Nội",
    rating: 5,
    content: "Set quà tặng rất đẹp, hộp gỗ sang trọng. Tặng sếp dịp Tết được khen nức nở. Sẽ ủng hộ tiếp!",
    avatar: "A",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Khách hàng nói gì
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Đánh Giá Từ Khách Hàng
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hơn 500+ khách hàng đã tin tưởng và hài lòng với sản phẩm của chúng tôi
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative p-6 bg-card rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-rice text-rice" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
