import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white">
              {/* mold design blueprint or engineer working */}
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" 
                alt="Engineer examining mold design" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-sm shadow-xl hidden md:block max-w-xs">
              <p className="font-display text-4xl font-bold mb-1">30+</p>
              <p className="uppercase tracking-wider text-sm text-gray-300">Years of Industrial Experience</p>
            </div>
          </div>

          <div>
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Precision Engineering <br/>
              <span className="text-gray-400">Global Standards</span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Plastenza, we design and manufacture precision molds and plastic parts with a strong focus on quality, cost control, and on-time delivery. Our integrated approach ensures that your product journey—from initial concept to mass production—is seamless and efficient.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Decades of specialized mold design expertise",
                "State-of-the-art in-house tooling & fabrication",
                "Cost-effective production scaling"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gray-900 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-primary transition-colors shadow-lg"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
