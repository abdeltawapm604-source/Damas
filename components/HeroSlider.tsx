"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  
  {
    id: 2,
    tag: "🌿 Organic & Natural",
    title: "Premium",
    highlight: "Supplements",
    desc: "Pure organic supplements, vitamins, and minerals sourced from nature. Support your wellness journey with clinically proven formulas.",
    image: "/hero3.jfif",
  },
  {
    id: 3,
    tag: "✨ Luxury Skincare",
    title: "Radiant Skin",
    highlight: "Starts Here",
    desc: "Dermatologist-recommended skincare with medical-grade ingredients. From serums to moisturisers — science meets luxury.",
    image: "/hero2.jfif",
  },
  {
    id: 1,
    tag: "Certified Pharmacy",
    title: "Your Health,",
    highlight: "Delivered Fast",
    desc: "Trusted medicines from licensed suppliers. Order in seconds, delivered to your door within hours with full prescription support.",
    image: "/hero1.jfif",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-damas-charcoal">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transform scale-105 transition-transform duration-[10000ms] ease-linear"
                priority={slide.id === 1}
                quality={90}
                unoptimized
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-damas-charcoal/95 via-damas-charcoal/70 to-transparent"></div>
            
            <div className="relative z-10 h-full flex items-center px-8 md:px-14 lg:px-24 max-w-2xl">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[0.72rem] font-semibold tracking-widest uppercase text-damas-lime mb-5">
                  {slide.tag}
                </div>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                  {slide.title} <br />
                  <span className="text-damas-lime">{slide.highlight}</span>
                </h1>
                <p className="text-[0.92rem] text-white/80 leading-relaxed mb-8 max-w-md">
                  {slide.desc}
                </p>
                <button className="inline-flex items-center gap-2 bg-damas-lime text-damas-charcoal px-6 py-3 rounded-full font-semibold text-sm hover:bg-damas-lime-hover hover:translate-x-1 transition-all">
                  Shop Now <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}