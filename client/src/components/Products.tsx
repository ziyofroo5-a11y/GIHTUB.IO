import { useProducts } from "@/hooks/use-products";
import { ArrowRight, Loader2 } from "lucide-react";

export function Products() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="py-24 text-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-4" />
        <p className="text-gray-500">Loading catalog...</p>
      </div>
    );
  }

  if (error) {
    return <div className="py-24 text-center text-red-500">Failed to load products.</div>;
  }

  // Fallback if no products exist yet (use dummy data for visualization)
  const displayProducts = products && products.length > 0 ? products : [
    {
      id: 1,
      name: "Sprinkler System Component",
      description: "High-precision injection mold for agricultural irrigation systems.",
      category: "Agriculture",
      moldImageUrl: "https://images.unsplash.com/photo-1616428753239-06385a420b9e?w=800&auto=format&fit=crop&q=60",
      productImageUrl: "https://images.unsplash.com/photo-1599815865615-5c1a590c50c0?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Automotive Dashboard Panel",
      description: "Complex geometry mold with textured finish for interior automotive parts.",
      category: "Automotive",
      moldImageUrl: "https://images.unsplash.com/photo-1563546700752-d21815e86976?w=800&auto=format&fit=crop&q=60",
      productImageUrl: "https://images.unsplash.com/photo-1552858725-2758b5fb1286?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      name: "Medical Device Housing",
      description: "Clean-room compatible mold for sensitive medical diagnostic equipment.",
      category: "Medical",
      moldImageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60",
      productImageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Featured Projects</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our capability to transform complex mold designs into high-quality finished products.
          </p>
        </div>

        <div className="space-y-20">
          {displayProducts.map((item, index) => (
            <div key={item.id} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Comparison Card */}
              <div className="w-full lg:w-2/3 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 gap-4 h-64 md:h-80">
                  <div className="relative group overflow-hidden rounded-lg">
                    <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                      Mold Design
                    </div>
                    <img 
                      src={item.moldImageUrl} 
                      alt={`${item.name} Mold`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="relative group overflow-hidden rounded-lg">
                    <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                      Final Product
                    </div>
                    <img 
                      src={item.productImageUrl} 
                      alt={`${item.name} Product`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center text-sm font-bold text-gray-400 uppercase tracking-widest gap-4">
                  <span>Mold</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="text-primary">Production</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">{item.category}</span>
                <h4 className="text-3xl font-display font-bold text-gray-900 mb-4">{item.name}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <button className="text-primary font-bold uppercase tracking-wider text-sm hover:text-blue-800 transition-colors flex items-center justify-center lg:justify-start gap-2 group">
                  View Details 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 border-2 border-gray-900 text-gray-900 font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
            View Full Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
