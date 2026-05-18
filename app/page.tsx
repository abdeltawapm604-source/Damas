"use client";

import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CategoryGrid from "@/components/CategoryGrid";
import ProductSection from "@/components/ProductSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-damas-gradient overflow-x-hidden selection:bg-damas-lime selection:text-damas-charcoal font-sans text-damas-text">
      <Navbar />
      
      <HeroSlider />

      <section className="py-12 relative z-10">
        <CategoryGrid />
      </section>

      <section className="py-12 relative z-10">
        <ProductSection />
      </section>

      <section className="py-12 relative z-10">
        <Features />
      </section>

      <Footer />
    </main>
  );
}