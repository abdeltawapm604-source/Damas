"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 1,
    name: "Advanced Retinol Night Serum",
    category: "Skincare · Anti-Aging",
    price: "$42.00",
    oldPrice: "$58.00",
    badge: "Sale",
    badgeColor: "bg-[#FCE4EC] text-[#9A3060]",
    imgBg: "bg-linear-to-br from-[#FCE4EC] to-[#F8BBD9]",
    image: "/prod1.png",
  },
  {
    id: 2,
    name: "Organic Vitamin D3 + K2",
    category: "Vitamins · Immunity",
    price: "$24.50",
    oldPrice: "",
    badge: "Top Seller",
    badgeColor: "bg-[#FEF3C5] text-[#8A6010]",
    imgBg: "bg-linear-to-br from-[#FEF9E8] to-[#FDEFC0]",
    image: "/prod2.png",
  },
  {
    id: 3,
    name: "Omega-3 Premium Fish Oil",
    category: "Supplements · Heart",
    price: "$18.75",
    oldPrice: "",
    badge: "New",
    badgeColor: "bg-damas-teal-light text-damas-teal",
    imgBg: "bg-linear-to-br from-damas-teal-light to-[#D1E0E0]",
    image: "/prod3.png",
  },
  {
    id: 4,
    name: "Hyaluronic Acid Moisturizer",
    category: "Skincare · Hydration",
    price: "$35.00",
    oldPrice: "",
    badge: "",
    badgeColor: "",
    imgBg: "bg-linear-to-br from-[#E8EEF8] to-[#C8D8F0]",
    image: "/prod4.png",
  }
];

export default function ProductSection() {
  const { addToCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[0.7rem] font-bold tracking-[0.3em] uppercase text-damas-teal block mb-3">Professional Care</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-damas-charcoal leading-tight">
            Featured <span className="relative inline-block">
              Products
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-damas-lime/30 -z-10"
              />
            </span>
          </h2>
        </motion.div>
        
        <motion.button 
          whileHover={{ x: 5 }}
          className="group flex items-center gap-3 text-sm font-bold text-damas-charcoal border-b-2 border-damas-lime pb-1 transition-all"
        >
          Explore All Collections
          <ArrowRight className="w-4 h-4 group-hover:text-damas-teal" />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((prod, index) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className={`relative h-72 rounded-[2.5rem] ${prod.imgBg} flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:rounded-3xl group-hover:shadow-2xl`}>
              
              <Image
                src={prod.image}
                alt={prod.name}
                fill
                className="object-contain p-8 drop-shadow-xl transition-transform duration-700 group-hover:scale-110"
              />

              {prod.badge && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`absolute top-5 left-5 z-20 text-[0.6rem] font-black uppercase tracking-tighter px-4 py-1.5 rounded-full shadow-sm ${prod.badgeColor}`}
                >
                  {prod.badge}
                </motion.span>
              )}

              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ShoppingCart className="text-white drop-shadow-md" size={32} />
              </motion.div>

              <div className="absolute inset-0 bg-damas-charcoal/0 group-hover:bg-damas-charcoal/10 transition-colors duration-500 z-0" />
            </div>

            <div className="mt-6 px-2">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className={i < 4 ? "fill-amber-400 text-amber-400" : "text-gray-200"} />
                ))}
                <span className="text-[0.65rem] font-bold text-gray-400 ml-1">(4.8)</span>
              </div>

              <h4 className="font-bold text-damas-charcoal text-lg mb-1 group-hover:text-damas-teal transition-colors">
                {prod.name}
              </h4>
              <p className="text-[0.7rem] font-semibold text-damas-text/60 uppercase tracking-widest mb-4">
                {prod.category}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-damas-charcoal tracking-tighter">{prod.price}</span>
                  {prod.oldPrice && (
                    <span className="text-sm text-gray-400 line-through font-medium">{prod.oldPrice}</span>
                  )}
                </div>
                
                <motion.button 
                  onClick={() => addToCart({
                    id: prod.id,
                    name: prod.name,
                    price: prod.price,
                    image: prod.image
                  })}
                  whileTap={{ scale: 0.9 }}
                  className="relative overflow-hidden bg-damas-charcoal text-damas-lime px-5 py-2.5 rounded-xl font-bold text-[0.7rem] uppercase tracking-wider group/btn"
                >
                  <span className="relative z-10">Add To Cart</span>
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}