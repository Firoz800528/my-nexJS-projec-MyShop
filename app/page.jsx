import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <ProductHighlights />
      <Footer />
    </div>
  );
}
