import { ShieldCheck, Clock, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    description: "Rigorous inspection protocols and repeatable processes ensure every part meets your exact specifications."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Precise production planning and reliable logistics mean you get your parts exactly when you need them."
  },
  {
    icon: HeartHandshake,
    title: "Full Support",
    description: "End-to-end partnership from initial design consultation through mold fabrication to mass production."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-accent font-bold tracking-widest uppercase mb-4">Why Choose Plastenza</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Your Reliable Manufacturing Partner</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <feature.icon className="w-7 h-7 text-gray-900" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
