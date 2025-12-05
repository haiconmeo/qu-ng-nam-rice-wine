import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Gửi tin nhắn thành công!",
      description: "Chúng tôi sẽ liên hệ lại sớm nhất.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-rice/10">
        <div className="container-custom text-center">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Liên Hệ
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Có câu hỏi hoặc cần tư vấn? Hãy liên hệ với chúng tôi qua các kênh dưới đây
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-6">
                Thông Tin Liên Hệ
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Địa chỉ</h3>
                    <p className="text-muted-foreground">
                      Xã Vu Gia, tp.Đà Nẵng
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Điện thoại / Zalo</h3>
                    <a href="tel:0963056357" className="text-primary hover:underline">
                      0963056357
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="admin@ruougaolutdailoc.com" className="text-primary hover:underline">
                      admin@ruougaolutdailoc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Giờ làm việc</h3>
                    <p className="text-muted-foreground">
                      8:00 - 20:00, Thứ 2 - Chủ nhật
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Kết nối với chúng tôi</h3>
                <div className="flex gap-3">
                  <a
                    href="https://zalo.me/0963056357"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Zalo
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063928186819"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#1877f2] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Bản đồ</h3>
                <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.105721689353!2d108.07018727575725!3d15.851039845240878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142030054d9d97d%3A0x59c76cd74b72dcc0!2zUsaw4bujdSBn4bqhbyBs4bupdCDEkOG6oWkgTOG7mWM!5e0!3m2!1svi!2s!4v1764942540382!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ vị trí"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card p-6 lg:p-8 rounded-xl shadow-card">
                <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-6">
                  Gửi Tin Nhắn
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Họ tên</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nhập họ tên của bạn"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Nhập số điện thoại"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Nội dung</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Nhập nội dung tin nhắn..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button variant="clay" size="lg" className="w-full">
                    Gửi tin nhắn
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
