import { useState, useRef } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs.sendForm('service_b5t4hhp', 'template_bsfi5ku', form.current, 'LV9Ewdm0sSznKybKR')
      .then((result) => {
          setLoading(false);
          setSuccess(true);
          toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
          });
          form.current?.reset();
      }, (error) => {
          setLoading(false);
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive"
          });
      });
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Start Your Project</h3>
            <p className="text-blue-100 text-lg mb-12 max-w-md leading-relaxed">
              Ready to get your products into your own hands ? Contact our engineering team for a free consultation or a meeting.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Address</h4>
                  <p className="text-blue-100">Gremda Km 10<br/>Sfax, Tunisia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Email</h4>
                  <a href="mailto:contact@plastenza.com" className="text-blue-100 hover:text-white transition-colors">
                    contact@plastenza.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Phone / Whatsapp</h4>
                  <a href="tel:+21624731700" className="text-blue-100 hover:text-white transition-colors">
                    +216 24 731 700
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 font-display">Send a Message</h4>
            
            {success ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h5>
                <p className="text-gray-600 mb-8">We have received your message and will contact you shortly.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest rounded-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Request
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none" />
    </section>
  );
}
