import { motion } from "motion/react";
import { MAJOR_CLIENTS } from "../constants";

export function ClientSection() {
  return (
    <section id="clients" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">주요 구축 고객</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm md:text-base">
            공공기관, 교육기관, 대형 병원부터 글로벌 기업까지 <br className="hidden md:block" />
            100여 개 이상의 고객사가 이토크 솔루션과 함께하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12">
          {/* 우선 로고 이미지 시도 */}
          <div className="col-span-full mb-8 contents">
            <img 
              src="/assets/client_logos.png" 
              alt="주요 구축 고객사 로고 그리드" 
              className="w-full h-auto object-contain max-w-5xl mx-auto hidden group-has-[img:not([src*='placehold'])]:block"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* 이미지 로드 실패 시 보여줄 정교한 그리드 UI */}
          {MAJOR_CLIENTS.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.02 }}
              className="flex flex-col items-center"
            >
              {/* 상단 로고 영역 */}
              <div className="h-12 md:h-16 flex items-center justify-center mb-4 w-full px-4">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center opacity-80"
                    style={{ backgroundColor: `${client.color}20`, border: `2px solid ${client.color}` }}
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: client.color }} />
                  </div>
                  <span 
                    className="text-base md:text-xl font-black tracking-tighter"
                    style={{ color: client.color }}
                  >
                    {client.shortName}
                  </span>
                </div>
              </div>

              {/* 하단 이름 캡슐 (스크린샷 스타일) */}
              <div className="w-full max-w-[140px] md:max-w-[160px] h-8 md:h-10 bg-white border border-slate-300 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.03)] flex items-center justify-center px-4">
                <span className="text-[11px] md:text-xs font-bold text-slate-500 truncate">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2.5 px-8 py-4 bg-white border border-slate-200/60 rounded-full text-slate-500 text-sm font-bold shadow-sm hover:shadow-md transition-all">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            그 외 80여 개 이상의 기업이 서비스를 이용 중입니다.
          </div>
        </div>
      </div>
    </section>
  );
}
