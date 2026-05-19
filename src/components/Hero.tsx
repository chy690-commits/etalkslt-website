import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { BRAND_NAME, COMPANY_NAME } from "../constants";

interface HeroProps {
  onConsultationClick?: () => void;
}

export function Hero({ onConsultationClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/corporate_hero_1778050956451.png" 
          alt="ETALK Solution Hero" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
            Innovative IT Solutions
          </span>
          <h1 className="text-2xl xs:text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-[1.4] sm:leading-[1.1] tracking-tight px-2 sm:px-0 break-keep">
            비즈니스의 미래를 여는 <br className="hidden sm:block"/>
            <span className="text-blue-500">스마트 IT 파트너</span>
          </h1>
            <p className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              {COMPANY_NAME}은 SI/WEB 개발부터 협업 솔루션, 문서 보안까지 
              기업의 성장에 필요한 모든 IT 여정을 제안하고 함께합니다.
            </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#si-web" className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-2xl shadow-blue-500/20">
              서비스 살펴보기
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={onConsultationClick}
              className="text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              정부지원사업 상담
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
