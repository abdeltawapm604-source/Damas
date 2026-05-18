"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Headphones, Zap } from "lucide-react";

const features = [
  {
    icon: <Truck className="text-damas-lime" size={32} />,
    title: "Fast Delivery",
    desc: "Delivery within 30-60 minutes across the city."
  },
  {
    icon: <ShieldCheck className="text-damas-lime" size={32} />,
    title: "100% Authentic",
    desc: "Directly sourced from certified manufacturers."
  },
  {
    icon: <Zap className="text-damas-lime" size={32} />,
    title: "Instant Refills",
    desc: "Smart reminders for your monthly medication."
  },
  {
    icon: <Headphones className="text-damas-lime" size={32} />,
    title: "Expert Advice",
    desc: "Talk to our licensed pharmacists anytime."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-damas-charcoal rounded-3xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 shadow-xl">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-damas-charcoal mb-2">{f.title}</h3>
              <p className="text-sm text-damas-text/70 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}