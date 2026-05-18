"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    name: "Prescriptions",
    image: "/cat1.jfif",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Vitamins",
    image: "/cat2.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Skincare",
    image: "/cat3.jpeg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    name: "Baby Care",
    image: "/cat4.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Personal Care",
    image: "/cat5.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    name: "First Aid",
    image: "/cat6.jpg",
    className: "md:col-span-1 md:row-span-1",
  }
];

export default function CategoryGrid() {
  return (
    <section className="h-[100vh] w-full flex items-center justify-center bg-transparent px-6 md:px-14 lg:px-24 pt-24 pb-10">
      <div className="max-w-7xl w-full h-full flex flex-col">
        <div className="flex items-end justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[0.65rem] font-bold tracking-[0.4em] uppercase text-damas-teal mb-2">Departments</h2>
            <p className="font-serif text-4xl md:text-5xl font-bold text-damas-charcoal">Featured Collections</p>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="text-[0.75rem] font-black text-damas-charcoal border-b-4 border-damas-lime pb-1 hover:text-damas-teal transition-all"
          >
            Browse All
          </motion.button>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-damas-charcoal ${cat.className} shadow-xl hover:shadow-damas-lime/10 transition-all duration-500`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-all duration-[1.2s] group-hover:scale-105"
                priority={index < 2}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-damas-charcoal/90 via-damas-charcoal/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="absolute top-6 right-6 z-20">
                <div className="w-10 h-10 bg-damas-lime rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  <ArrowUpRight className="text-damas-charcoal" size={20} strokeWidth={3} />
                </div>
              </div>

              <div className="absolute inset-x-10 bottom-8 z-20">
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-none drop-shadow-2xl group-hover:text-damas-lime transition-colors">
                  {cat.name}
                </h3>
              </div>

              <div className="absolute inset-0 border-[1.5px] border-white/0 group-hover:border-white/10 rounded-[2.5rem] transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}