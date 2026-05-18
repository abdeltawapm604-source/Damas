import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CategoryGrid from "@/components/CategoryGrid";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-damas-gradient overflow-x-hidden selection:bg-damas-lime selection:text-damas-charcoal pb-24 font-sans text-damas-text">
      <Navbar />
      <HeroSlider />
      
      

      <section className="py-12 relative z-10">
        <CategoryGrid />
      </section>

      <section className="py-12 relative z-10">
        <ProductSection />
      </section>
    </main>
  );
}