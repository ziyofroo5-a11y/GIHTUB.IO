import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-border/50 py-2" : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className={cn(
              "font-display text-3xl font-bold tracking-wider",
              scrolled ? "text-primary" : "text-white"
            )}>
              PLASTENZA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider",
                    scrolled 
                      ? "text-gray-700 hover:text-primary" 
                      : "text-gray-200 hover:text-white"
                  )}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className={cn(
                  "px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-widest transition-all transform hover:-translate-y-0.5 active:translate-y-0",
                  scrolled
                    ? "bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                    : "bg-white text-primary hover:bg-gray-100 shadow-lg"
                )}
              >
                Start Cooperation
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md focus:outline-none",
                scrolled ? "text-primary" : "text-white"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-4 rounded-md text-base font-bold text-gray-700 hover:text-primary hover:bg-gray-50 uppercase tracking-wide"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 px-3 pb-2">
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-primary text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest shadow-md active:scale-95 transition-transform"
              >
                Start Cooperation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
