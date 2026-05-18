"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    tag: "Clinical Excellence",
    title: "The Future of",
    highlight: "Digital Health",
    desc: "Experience pharmaceutical care redefined. Licensed medication, expert consultation, and rapid delivery integrated into one seamless experience.",
    image: "/hero1.jfif",
  },
  {
    id: 2,
    tag: "Bio-Organic Research",
    title: "Pure Science",
    highlight: "Natural Origin",
    desc: "Bridging the gap between clinical potency and botanical purity. Our premium supplement range is engineered for maximum bioavailability.",
    image: "/hero3.jfif",
  },
  {
    id: 3,
    tag: "Dermatological Luxury",
    title: "Advanced Skin",
    highlight: "Restoration",
    desc: "Medical-grade formulations curated for sophisticated skin needs. Transforming cellular health through scientifically proven active ingredients.",
    image: "/hero2.jfif",
  },
];

export default function HeroSlider() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-damas-charcoal">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        pagination={{ 
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !w-10 !h-[1.5px] !rounded-none !bg-white/20 transition-all duration-500"></span>`;
          }
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className={`object-cover transition-transform duration-[10000ms] ease-out ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                    priority
                    quality={100}
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-r from-damas-charcoal/90 via-damas-charcoal/40 to-transparent"></div>

                <div className="relative z-10 h-full flex items-center px-6 md:px-14 lg:px-24">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isActive ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex items-center gap-2 mb-4"
                    >
                      <span className="w-6 h-[1px] bg-damas-lime"></span>
                      <span className="text-[0.6rem] font-medium tracking-[0.4em] uppercase text-damas-lime">
                        {slide.tag}
                      </span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 15 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
                    >
                      {slide.title} <br />
                      <span className="text-damas-lime">
                        {slide.highlight}
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-xs md:text-sm text-white/50 leading-relaxed mb-10 max-w-md font-normal"
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex flex-wrap gap-4"
                    >
                      <button 
                        onClick={scrollToProducts}
                        className="group relative flex items-center gap-3 bg-damas-lime text-damas-charcoal px-7 py-3.5 rounded-full font-bold text-[0.7rem] uppercase tracking-widest overflow-hidden transition-all"
                      >
                        <span className="relative z-10">Explore Collection</span>
                        <MoveRight className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" size={14} />
                      </button>

                      <button className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold text-[0.7rem] uppercase tracking-widest hover:bg-white/10 transition-all">
                        Pharmacist Chat
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          bottom: 40px !important;
          left: 100px !important;
          text-align: left !important;
          width: auto !important;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background-color: #D6FF3F !important;
          width: 40px !important;
        }
        @media (max-width: 768px) {
          .hero-swiper .swiper-pagination {
            left: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}