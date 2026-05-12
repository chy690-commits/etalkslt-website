import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ServiceSection } from "./components/ServiceSection";
import { ClientSection } from "./components/ClientSection";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { DetailModal } from "./components/DetailModal";
import { GovernmentConsultationModal } from "./components/GovernmentConsultationModal";
import { SERVICES } from "./constants";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero onConsultationClick={() => setIsConsultationOpen(true)} />
        <AboutSection />
        
        {SERVICES.map((service, index) => (
          <ServiceSection 
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            features={service.features}
            image={service.image}
            reverse={index % 2 !== 0}
            onDetailClick={(id) => setActiveDetailId(id)}
          />
        ))}

        {/* Stats Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-black">500+</p>
                <p className="text-sm font-bold uppercase tracking-wider opacity-60">클라우드 고객사</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-black">150+</p>
                <p className="text-sm font-bold uppercase tracking-wider opacity-60">SI/WEB 개발 완료</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-black">98%</p>
                <p className="text-sm font-bold uppercase tracking-wider opacity-60">고객 만족도</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-black">10년+</p>
                <p className="text-sm font-bold uppercase tracking-wider opacity-60">업계 경력</p>
              </div>
            </div>
          </div>
        </section>

        <ClientSection />
        <ContactForm />
      </main>

      <Footer />
      
      <DetailModal 
        isOpen={!!activeDetailId} 
        onClose={() => setActiveDetailId(null)}
        serviceId={activeDetailId || ""}
      />

      <GovernmentConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 p-4 bg-white shadow-2xl rounded-full text-blue-600 hover:bg-blue-50 transition-colors z-40 border border-slate-100"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
