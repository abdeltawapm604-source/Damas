export default function Footer() {
  return (
    <footer className="bg-damas-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-damas-lime font-bold text-xl">+</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">Damas</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in digital healthcare. Providing expert advice and fast medical delivery since 2024.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-damas-lime uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Medical Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-damas-lime uppercase text-xs tracking-widest">Categories</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Prescriptions</li>
              <li className="hover:text-white cursor-pointer transition-colors">Skincare</li>
              <li className="hover:text-white cursor-pointer transition-colors">Vitamins</li>
              <li className="hover:text-white cursor-pointer transition-colors">Baby Care</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-damas-lime uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe for healthy tips and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm w-full focus:outline-hidden focus:border-damas-lime transition-colors"
              />
              <button className="bg-damas-lime text-damas-charcoal p-2 rounded-full hover:scale-110 transition-transform">
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Damas Pharmacy. All rights reserved.
          </p>
          <div className="flex gap-6">
             {}
          </div>
        </div>
      </div>
    </footer>
  );
}