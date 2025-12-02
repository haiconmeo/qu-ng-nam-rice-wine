import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { products, formatPrice, getProductBySlug } from "@/data/products";
import { Check, CreditCard, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const preSelectedProduct = searchParams.get("product");
  const preSelectedVariant = searchParams.get("variant");
  const preSelectedQty = searchParams.get("qty");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    product: preSelectedProduct || products[0].slug,
    variant: preSelectedVariant || products[0].variants[0].id,
    quantity: preSelectedQty ? parseInt(preSelectedQty) : 1,
    paymentMethod: "cod",
    note: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedProduct = getProductBySlug(formData.product);
  const selectedVariant = selectedProduct?.variants.find((v) => v.id === formData.variant) || selectedProduct?.variants[0];

  const totalPrice = selectedVariant ? selectedVariant.price * formData.quantity : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate order submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Đặt hàng thành công!",
      description: "Chúng tôi sẽ liên hệ xác nhận trong 30 phút.",
    });
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="py-16 lg:py-24">
          <div className="container-custom max-w-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-bamboo/20 flex items-center justify-center">
              <Check className="w-10 h-10 text-bamboo" />
            </div>
            <h1 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Đặt Hàng Thành Công!
            </h1>
            <p className="text-muted-foreground mb-8">
              Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ gọi điện xác nhận đơn hàng trong vòng 30 phút.
            </p>
            <div className="bg-card p-6 rounded-xl shadow-card text-left mb-8">
              <h3 className="font-semibold mb-4">Thông tin đơn hàng</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Sản phẩm:</span> {selectedProduct?.name}</p>
                <p><span className="text-muted-foreground">Dung tích:</span> {selectedVariant?.size}</p>
                <p><span className="text-muted-foreground">Số lượng:</span> {formData.quantity}</p>
                <p><span className="text-muted-foreground">Tổng tiền:</span> <span className="font-bold text-primary">{formatPrice(totalPrice)}</span></p>
                <p><span className="text-muted-foreground">Thanh toán:</span> {formData.paymentMethod === "cod" ? "COD - Thanh toán khi nhận hàng" : "Chuyển khoản"}</p>
              </div>
            </div>
            <Button variant="clay" asChild>
              <a href="/">Về trang chủ</a>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-8 lg:py-12 bg-gradient-to-br from-primary/5 to-rice/10">
        <div className="container-custom text-center">
          <h1 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Đặt Hàng
          </h1>
          <p className="text-muted-foreground">
            Điền thông tin để đặt rượu gạo lứt chính hãng
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h2 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Thông tin liên hệ
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Họ tên *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0905 xxx xxx"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="address">Địa chỉ nhận hàng *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành"
                    required
                  />
                </div>
              </div>

              {/* Product Selection */}
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h2 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Chọn sản phẩm
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="product">Sản phẩm</Label>
                    <select
                      id="product"
                      value={formData.product}
                      onChange={(e) => {
                        const newProduct = getProductBySlug(e.target.value);
                        setFormData({
                          ...formData,
                          product: e.target.value,
                          variant: newProduct?.variants[0].id || "",
                        });
                      }}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.slug}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label>Dung tích</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProduct?.variants.map((v) => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, variant: v.id })}
                          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                            formData.variant === v.id
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          {v.size} - {formatPrice(v.price)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="quantity">Số lượng</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max={selectedVariant?.stock || 10}
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                      className="w-24"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card p-6 rounded-xl shadow-card">
                <h2 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Phương thức thanh toán
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: "cod" })}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      formData.paymentMethod === "cod"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <Truck className="w-5 h-5 text-primary mb-2" />
                    <div className="font-medium">COD</div>
                    <div className="text-xs text-muted-foreground">Thanh toán khi nhận hàng</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: "transfer" })}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      formData.paymentMethod === "transfer"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-primary mb-2" />
                    <div className="font-medium">Chuyển khoản</div>
                    <div className="text-xs text-muted-foreground">Chuyển trước khi giao</div>
                  </button>
                </div>
                
                {formData.paymentMethod === "transfer" && (
                  <div className="mt-4 p-4 bg-muted rounded-lg text-sm">
                    <p className="font-medium mb-2">Thông tin chuyển khoản:</p>
                    <p>Ngân hàng: Vietcombank</p>
                    <p>STK: 1234567890</p>
                    <p>Chủ TK: NGUYEN VAN A</p>
                    <p className="text-muted-foreground mt-2">Nội dung: [Họ tên] + [SĐT]</p>
                  </div>
                )}
              </div>

              {/* Note */}
              <div className="bg-card p-6 rounded-xl shadow-card">
                <Label htmlFor="note">Ghi chú (tùy chọn)</Label>
                <Textarea
                  id="note"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Ghi chú thêm về đơn hàng..."
                  rows={3}
                />
              </div>

              <Button variant="clay" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Đang xử lý..." : "Đặt hàng"}
              </Button>
            </form>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-xl shadow-card sticky top-24">
                <h2 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Tóm tắt đơn hàng
                </h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sản phẩm:</span>
                    <span className="font-medium">{selectedProduct?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dung tích:</span>
                    <span>{selectedVariant?.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Đơn giá:</span>
                    <span>{formatPrice(selectedVariant?.price || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Số lượng:</span>
                    <span>{formData.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phí ship:</span>
                    <span className="text-bamboo">{totalPrice >= 500000 ? "Miễn phí" : "30.000đ"}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                  <span className="font-semibold">Tổng cộng:</span>
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(totalPrice + (totalPrice >= 500000 ? 0 : 30000))}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  * Miễn phí ship cho đơn từ 500.000đ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
