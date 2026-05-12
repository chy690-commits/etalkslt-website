import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, ArrowRight, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import { NAV_LINKS, BRAND_NAME } from "../constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="flex items-center gap-1 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center text-2xl font-black tracking-tight">
            <span className="text-green-500 italic">e</span>
            <span className={scrolled ? "text-slate-900" : "text-white"}>Talk</span>
            <span className={scrolled ? "text-slate-600 font-medium ml-1 text-lg" : "text-slate-300 font-medium ml-1 text-lg"}>solution</span>
            <Leaf size={18} className="text-green-400 -ml-0.5 mb-3 group-hover:rotate-12 transition-transform" />
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${scrolled ? "text-gray-600" : "text-white/80 hover:text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
            상담문의
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? "text-gray-900" : "text-white"} /> : <Menu className={scrolled ? "text-gray-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-800 font-medium py-2 border-b border-gray-50 flex justify-between items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <ArrowRight size={14} className="text-gray-400" />
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
