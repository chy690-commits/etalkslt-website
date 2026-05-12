import { motion } from "motion/react";
import { MAJOR_CLIENTS } from "../constants";

export function ClientSection() {
  return (
    <section id="clients" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">주요 구축 고객</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            공공기관, 교육기관, 대형 병원부터 글로벌 기업까지 <br className="hidden md:block" />
            700여 개 이상의 고객사가 이토크 솔루션과 함께하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 md:gap-x-12">
          {MAJOR_CLIENTS.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center group"
            >
              <div className="w-full aspect-[2/1] bg-white rounded-xl flex items-center justify-center p-4 transition-all duration-300">
                {/* Brand-like placeholder */}
                <div className="text-center relative">
                  <p 
                    className="text-xl md:text-2xl font-black tracking-tighter"
                    style={{ color: client.color }}
                  >
                    {client.shortName}
                  </p>
                  {/* Visual accent to make it look more like a logo */}
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full opacity-20"
                    style={{ backgroundColor: client.color }}
                  />
                </div>
              </div>
              <div className="mt-4 w-full max-w-[140px] px-2 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-blue-300 group-hover:shadow-md transition-all">
                <p className="text-[11px] md:text-xs font-bold text-slate-600 truncate">
                  {client.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-500 text-sm font-bold shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            그 외 670여 개 이상의 기업이 서비스를 이용 중입니다.
          </div>
        </div>
      </div>
    </section>
  );
}
