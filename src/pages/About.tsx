import { Layout } from "@/components/layout/Layout";
import { Award, Leaf, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-rice/10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-rice/20 rounded-full blur-3xl" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Câu chuyện của chúng tôi
            </span>
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Rượu Gạo Lứt Gia Truyền 3 Đời
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Từ những cánh đồng lúa xanh mướt ở Quảng Nam, qua bàn tay khéo léo của người nấu rượu,
              mỗi giọt rượu gạo lứt mang trong mình hương vị của đất trời và tình yêu của gia đình.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Từ Ruộng Đồng Quảng Nam
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Năm 1970, ông ngoại tôi - người thợ nấu rượu lành nghề ở làng Điện Phước, Điện Bàn - 
                  đã tìm ra công thức nấu rượu gạo lứt hoàn hảo từ giống gạo lứt đỏ địa phương 
                  kết hợp với men lá cổ truyền.
                </p>
                <p>
                  Qua 3 thế hệ, chúng tôi vẫn giữ nguyên phương pháp truyền thống: chưng cất thủ công, 
                  ủ trong chum sành đất nung, sử dụng 100% nguyên liệu hữu cơ không thuốc trừ sâu.
                </p>
                <p>
                  Mỗi mẻ rượu được ủ tối thiểu 6 tháng trước khi đến tay khách hàng, 
                  đảm bảo hương thơm nồng nàn và vị êm dịu đặc trưng.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-card rounded-2xl overflow-hidden shadow-elevated">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-rice/20 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-serif text-5xl text-primary font-bold">釀</span>
                  </div>
                  <p className="text-primary font-serif text-lg">Quy trình ủ rượu truyền thống</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
              Quy Trình Sản Xuất
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Chọn gạo", desc: "Gạo lứt đỏ hữu cơ Quảng Nam, không thuốc trừ sâu" },
              { step: "02", title: "Nấu cơm", desc: "Nấu cơm rượu theo tỷ lệ vàng, để nguội tự nhiên" },
              { step: "03", title: "Ủ men", desc: "Trộn men lá cổ truyền, ủ trong chum sành 15-20 ngày" },
              { step: "04", title: "Chưng cất", desc: "Chưng cất thủ công, ủ thêm 6-12 tháng trước khi đóng chai" },
            ].map((item, i) => (
              <div key={item.step} className="bg-background p-6 rounded-xl shadow-card animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="font-serif text-4xl font-bold text-primary/20">{item.step}</span>
                <h3 className="font-serif text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
              Giá Trị Cốt Lõi
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "Hữu cơ", desc: "100% nguyên liệu sạch, an toàn" },
              { icon: Award, title: "Chất lượng", desc: "Cam kết chất lượng từng giọt rượu" },
              { icon: Clock, title: "Kiên nhẫn", desc: "Ủ đủ thời gian, không vội vàng" },
              { icon: Heart, title: "Tâm huyết", desc: "Làm bằng tình yêu gia đình" },
            ].map((item, i) => (
              <div key={item.title} className="text-center p-6 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
