import { ArrowRight } from "lucide-react";
import injectionMachineImg from "@assets/stock_images/plastic_injection_mo_ea981340.jpg";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* industrial machinery background */}
        <img
          src={injectionMachineImg}
          alt="Industrial Injection Molding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-4xl">
          <h2 className="text-accent font-bold tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Design, Mold & Plastic Injection
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            PLASTENZA <br/>
            <span className="text-white/80 text-4xl md:text-6xl">Industrial Manufacturing</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            From idea to final part. We support clients with product development, mold making, injection molding, and reliable industrial production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-widest text-lg rounded-sm hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-black/20"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest text-lg rounded-sm hover:bg-white hover:text-primary transition-all duration-300"
            >
              View Products
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
