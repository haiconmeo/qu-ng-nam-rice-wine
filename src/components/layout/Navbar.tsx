import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/dat-hang", label: "Đặt hàng" },
  { href: "/lien-he", label: "Liên hệ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-serif text-lg lg:text-xl font-bold">R</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg lg:text-xl font-semibold text-foreground leading-tight">
                Rượu Gạo Lứt
              </h1>
              <p className="text-xs text-muted-foreground">Quảng Nam</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Hotline */}
            <a
              href="tel:0905123456"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">0963 056 357</span>
            </a>

            {/* Order button */}
            <Button variant="clay" size="sm" asChild className="hidden sm:inline-flex">
              <Link to="/dat-hang">
                <ShoppingBag className="w-4 h-4" />
                Đặt hàng
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <a
                  href="tel:0905123456"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hotline: 0963 056 357</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
