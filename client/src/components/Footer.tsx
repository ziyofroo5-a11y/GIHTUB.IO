import { Facebook, Linkedin, Twitter  } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <span className="font-display text-2xl font-bold tracking-wider text-white mb-4 block">
              PLASTENZA
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Industrial manufacturing partner specializing in mold design and precision plastic injection.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Our Products</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Mold Design & Engineering</li>
              <li>Manufacturing</li>
              <li>Plastic Injection Molding</li>
              <li>Assembly & Packaging</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-sm">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Gremda Km 10, Sfax, Tunisia</li>
              <li>+216 24 731 700</li>
              <li>contact@plastenza.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Plastenza. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
