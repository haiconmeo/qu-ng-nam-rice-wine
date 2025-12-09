import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Benefits } from "@/components/home/Benefits";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";
import { incrementTotalVisits } from "@/data/products";

const Index = () => {
  useEffect(() => {
    // Gọi hàm để tăng lượt truy cập khi component được mount
    incrementTotalVisits();
  }, []); // Mảng rỗng đảm bảo effect chỉ chạy một lần

  return (
    <Layout>
      {/* SEO Meta - Would use react-helmet-async in production */}
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
