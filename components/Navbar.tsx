"use client";

import { ShoppingCart, Search, Menu, X, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { cartItems, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.price.replace('$', ''));
  }, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setIsSearchOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sendToWhatsApp = () => {
    const phoneNumber = "201234567890";
    const messageHeader = "طلب جديد من Damas Pharmacy:\n\n";
    const itemsList = cartItems.map(item => `- ${item.name} (${item.price})`).join("\n");
    const footer = `\n\nإجمالي المبلغ: $${subtotal.toFixed(2)}`;
    const encodedMessage = encodeURIComponent(messageHeader + itemsList + footer);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 transition-all duration-700 ${scrolled ? "bg-white/90 backdrop-blur-xl py-3 shadow-md border-b border-white/10" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative flex justify-between items-center h-14">
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/" className="relative w-14 h-14 hover:scale-105 transition-transform duration-300">
                <Image src="/logo.png" alt="Damas Logo" fill className="object-contain" priority />
              </Link>
              <div className={`hidden sm:block transition-colors duration-500 ${scrolled ? "text-damas-charcoal" : "text-white"}`}>
                <div className="font-serif text-2xl font-bold tracking-tight leading-none">Damas</div>
                <div className={`text-[0.6rem] tracking-[0.3em] uppercase font-medium mt-1 ${scrolled ? "text-damas-teal" : "text-damas-lime"}`}>Pharmacy</div>
              </div>
            </div>

            <div className={`hidden md:flex items-center p-1.5 rounded-full border transition-all duration-500 space-x-2 ${scrolled ? "bg-damas-charcoal/5 border-damas-charcoal/5" : "bg-white/10 border-white/10 backdrop-blur-md"} ${isSearchOpen ? "opacity-0 invisible scale-95" : "opacity-100 visible scale-100"}`}>
              {["Home", "Medicines", "Supplements", "Skincare"].map((item) => (
                <Link key={item} href="#" className={`px-8 py-2.5 text-[0.9rem] font-medium rounded-full transition-all duration-300 ${scrolled ? "text-damas-charcoal/80 hover:text-damas-charcoal hover:bg-white hover:shadow-sm" : "text-white hover:text-damas-charcoal hover:bg-damas-lime"}`}>{item}</Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div ref={searchRef} className="flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 400, opacity: 1 }} exit={{ width: 0, opacity: 0 }} className="absolute right-16 top-1/2 -translate-y-1/2 flex items-center bg-white rounded-full shadow-2xl border border-gray-100 overflow-hidden">
                      <input autoFocus type="text" placeholder="Search for medicines..." className="w-full bg-transparent pl-6 pr-12 py-3.5 text-sm font-medium text-damas-charcoal focus:outline-none" />
                      <button onClick={() => setIsSearchOpen(false)} className="absolute right-4 p-1 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!isSearchOpen && (
                  <button onClick={() => setIsSearchOpen(true)} className={`p-3.5 rounded-full transition-all duration-500 hover:scale-110 ${scrolled ? "bg-damas-charcoal/5 text-damas-charcoal" : "bg-white/10 text-white backdrop-blur-md"}`}>
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              <div onClick={() => setIsCartOpen(true)} className={`relative p-3.5 rounded-full cursor-pointer hover:scale-110 active:scale-95 transition-all duration-500 shadow-xl ${scrolled ? "bg-damas-charcoal text-damas-lime" : "bg-damas-lime text-damas-charcoal"}`}>
                <ShoppingCart className="w-5 h-5" strokeWidth={2} />
                {cartItems.length > 0 && (
                  <span className={`absolute -top-1 -right-1 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg ring-2 ${scrolled ? "bg-white text-damas-charcoal ring-damas-charcoal" : "bg-damas-charcoal text-white ring-damas-lime"}`}>{cartItems.length}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-damas-charcoal/60 backdrop-blur-md z-[60]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed right-0 top-0 h-screen w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col">
              <div className="p-8 lg:p-12 border-b border-gray-50 flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-4xl font-bold text-damas-charcoal tracking-tight">Your Bag</h2>
                  <p className="text-damas-teal font-medium text-[0.65rem] uppercase tracking-[0.2em] mt-2">{cartItems.length} items selected</p>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 rounded-full transition-all border border-transparent hover:border-gray-100">
                  <X size={24} className="text-damas-charcoal" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-10 scrollbar-hide">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                      <ShoppingBag size={40} className="text-gray-200" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Your bag is currently empty</p>
                    <button onClick={() => setIsCartOpen(false)} className="mt-6 text-damas-teal font-bold text-xs border-b-2 border-damas-lime pb-1">Start Shopping</button>
                  </div>
                ) : (
                  cartItems.map((item, index) => (
                    <motion.div key={index} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-6 items-start group">
                      <div className="relative w-24 h-24 shrink-0 bg-[#F8FAFA] rounded-3xl overflow-hidden border border-gray-100 group-hover:shadow-md transition-all duration-500">
                        <Image src={item.image} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="text-[0.9rem] font-semibold text-damas-charcoal leading-snug mb-1">{item.name}</h4>
                        <p className="text-damas-teal font-bold text-sm">{item.price}</p>
                        <div className="flex items-center gap-4 mt-4">
                           <div className="flex items-center border border-gray-100 rounded-lg px-2 py-1 gap-3">
                              <span className="text-[0.6rem] font-bold text-gray-400">QTY: 1</span>
                           </div>
                           <button onClick={() => removeFromCart(item.id)} className="text-[0.65rem] font-bold text-red-400 hover:text-red-600 transition-colors flex items-center gap-1">
                              <Trash2 size={12} /> Remove
                           </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-8 lg:p-12 bg-[#F8FAFA] border-t border-gray-100 space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 font-medium">Subtotal</span>
                      <span className="text-damas-charcoal font-bold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 font-medium">Shipping</span>
                      <span className="text-damas-teal font-bold">Calculated at checkout</span>
                    </div>
                    <div className="pt-4 border-t border-gray-200 flex justify-between items-end">
                      <span className="text-damas-charcoal font-black text-lg">Total</span>
                      <span className="text-damas-charcoal font-black text-2xl tracking-tighter">${subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button onClick={sendToWhatsApp} className="w-full bg-[#25D366] text-white py-6 rounded-[2rem] font-bold flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-green-100">
                    <span className="text-sm uppercase tracking-widest">Checkout via WhatsApp</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}