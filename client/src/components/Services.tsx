import React, { useEffect, useState } from "react";
import { Wrench, Factory, ClipboardCheck, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Wrench,
    title: "Tooling & Mold Fabrication",
    description: "In-house design and manufacturing of high-precision molds tailored to your specific product requirements.",
    // Local filename fallback: place `cnc.jpg` into `client/public/attached_assets/`
    localImage: "/attached_assets/cnc.jpg",
    
  },
  {
    icon: Factory,
    title: "Plastic Injection Production",
    description: "State-of-the-art injection molding machines capable of handling mass production with consistent quality.",
    // Local filename fallback: place `factory.jpg` into `client/public/attached_assets/`
    localImage: "/attached_assets/factory.jpg",
    
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control & Delivery",
    description: " rigorous inspection processes and reliable logistics to ensure your parts arrive perfect and on time.",
    // Local filename fallback: place `quality.jpg` into `client/public/attached_assets/`
    localImage: "/attached_assets/quality.jpg",
    
  }
];

function ServiceCard({ service, idx }: { service: any; idx: number }) {
  const [src, setSrc] = useState(service.image);

  useEffect(() => {
    let cancelled = false;

    async function checkLocal() {
      if (!service.localImage) return;
      try {
        const res = await fetch(service.localImage, { method: "HEAD" });
        if (!cancelled && res.ok) setSrc(service.localImage);
      } catch (e) {
        // leave fallback image
      }
    }

    checkLocal();
    return () => {
      cancelled = true;
    };
  }, [service.localImage, service.image]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={src} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <ArrowUpRight className="text-white w-12 h-12" />
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="w-14 h-14 bg-primary text-white rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:-translate-y-2 transition-transform duration-300">
          <service.icon className="w-7 h-7" />
        </div>
        
        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h4>
        
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Manufacturing Excellence</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
