"use client";

import { ShoppingCart, Search, Menu, X, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart, CartItem } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { cartItems, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const sendToWhatsApp = () => {
    const phoneNumber = "201234567890";
    const messageHeader = "طلب جديد من Damas Pharmacy:\n\n";
    const itemsList = cartItems.map(item => `- ${item.name} (${item.price})`).join("\n");
    const encodedMessage = encodeURIComponent(messageHeader + itemsList);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 bg-white/50 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <Image src="/logo.png" alt="Damas Logo" fill className="object-contain rounded-xl shadow-sm" priority />
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-damas-charcoal tracking-tight">Damas Pharmacy</div>
                <div className="text-[0.6rem] tracking-widest uppercase text-damas-teal font-semibold -mt-0.5">Digital Health</div>
              </div>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-sm font-semibold text-damas-charcoal hover:text-damas-teal transition-colors">Home</Link>
              <Link href="#" className="text-sm font-medium text-damas-text hover:text-damas-teal transition-colors">Medicines</Link>
              <Link href="#" className="text-sm font-medium text-damas-text hover:text-damas-teal transition-colors">Supplements</Link>
              <Link href="#" className="text-sm font-medium text-damas-text hover:text-damas-teal transition-colors">Skincare</Link>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <Search className="w-5 h-5 text-damas-charcoal cursor-pointer" />
              <div onClick={() => setIsCartOpen(true)} className="relative cursor-pointer group">
                <ShoppingCart className="w-5 h-5 text-damas-charcoal group-hover:text-damas-teal transition-colors" />
                <span className="absolute -top-2 -right-2 bg-damas-charcoal text-damas-lime text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
              <button className="bg-damas-lime text-damas-charcoal hover:bg-damas-charcoal hover:text-damas-lime px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md">
                Order Now
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <Menu className="w-6 h-6 text-damas-charcoal cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-full max-w-md bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-damas-charcoal">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-20 text-gray-400 font-medium">Cart is empty</div>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={index} className="flex gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <div className="relative w-16 h-16 shrink-0 bg-white rounded-xl overflow-hidden border">
                        <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-damas-charcoal">{item.name}</h4>
                        <p className="text-damas-teal font-bold text-xs mt-1">{item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="pt-8 border-t space-y-4">
                  <button 
                    onClick={sendToWhatsApp}
                    className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg"
                  >
                    Checkout via WhatsApp
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