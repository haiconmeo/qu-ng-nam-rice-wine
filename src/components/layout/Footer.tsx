import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-earth text-cream">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-rice flex items-center justify-center">
                <span className="text-earth font-serif text-lg font-bold">R</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">Rượu Gạo Lứt</h3>
                <p className="text-xs text-cream/70">Quảng Nam</p>
              </div>
            </div>
            <p className="text-sm text-cream/80 leading-relaxed">
              Rượu gạo lứt gia truyền 3 đời, chưng cất từ nguyên liệu hữu cơ Quảng Nam. Mỗi giọt rượu là tinh hoa của đất trời.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2">
              {[
                { href: "/san-pham", label: "Sản phẩm" },
                { href: "/gioi-thieu", label: "Giới thiệu" },
                { href: "/dat-hang", label: "Đặt hàng" },
                { href: "/lien-he", label: "Liên hệ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/70 hover:text-rice transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-cream/80">
                <MapPin className="w-4 h-4 mt-0.5 text-rice shrink-0" />
                <span>Xã Điện Phước, Điện Bàn, Quảng Nam</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/80">
                <Phone className="w-4 h-4 text-rice shrink-0" />
                <a href="tel:0905123456" className="hover:text-rice transition-colors">
                  0905 123 456
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/80">
                <Mail className="w-4 h-4 text-rice shrink-0" />
                <a href="mailto:contact@ruougaolut.vn" className="hover:text-rice transition-colors">
                  contact@ruougaolut.vn
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/80">
                <Clock className="w-4 h-4 text-rice shrink-0" />
                <span>8:00 - 20:00, Thứ 2 - CN</span>
              </li>
            </ul>
          </div>

          {/* Payment & Social */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Thanh toán</h4>
            <p className="text-sm text-cream/80 mb-4">
              Chấp nhận thanh toán COD và chuyển khoản ngân hàng.
            </p>
            <div className="flex gap-3 mb-6">
              <div className="px-3 py-1.5 bg-cream/10 rounded text-xs font-medium">COD</div>
              <div className="px-3 py-1.5 bg-cream/10 rounded text-xs font-medium">Chuyển khoản</div>
            </div>
            
            <h4 className="font-serif text-base font-semibold mb-3">Kết nối</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-rice hover:text-earth transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://zalo.me/0905123456"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-rice hover:text-earth transition-colors"
                aria-label="Zalo"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-cream/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/60">
          <p>© 2024 Rượu Gạo Lứt Quảng Nam. Tất cả quyền được bảo lưu.</p>
          <p>Sản phẩm có cồn. Người dưới 18 tuổi không được sử dụng.</p>
        </div>
      </div>
    </footer>
  );
}
