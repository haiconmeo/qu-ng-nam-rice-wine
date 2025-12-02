import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Benefits } from "@/components/home/Benefits";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
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
