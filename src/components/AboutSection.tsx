import { motion } from "motion/react";
import { Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import { BRAND_NAME } from "../constants";

const coreValues = [
  {
    icon: <Users className="text-blue-500" size={32} />,
    title: "사람 중심 (People)",
    description: "기술의 중심에는 언제나 사람이 있습니다. 구성원과 고객 모두가 행복한 가치를 지항합니다."
  },
  {
    icon: <Target className="text-blue-500" size={32} />,
    title: "최고의 기술 (Technology)",
    description: "끊임없는 연구와 개발을 통해 비즈니스 효율을 극대화하는 최상의 솔루션을 제공합니다."
  },
  {
    icon: <Lightbulb className="text-blue-500" size={32} />,
    title: "혁신적 사고 (Innovation)",
    description: "고정관념을 깨는 유연한 사고로 급변하는 IT 환경에서 새로운 표준을 만들어 갑니다."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">About US</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                IT를 넘어 비즈니스의 <br/>
                <span className="text-blue-600">정답을 제시합니다</span>
              </h3>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              {BRAND_NAME}은 단순한 시스템 구축을 넘어 기업의 본질적인 고민을 해결하고자 합니다. 
              우리는 복잡한 IT 업무를 빠르고 효과적으로 해결하여 고객사가 핵심 비즈니스에만 
              집중할 수 있는 환경을 구축합니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-black text-slate-900 flex items-center gap-2">
                  10+ <span className="text-blue-600"><TrendingUp size={24} /></span>
                </p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years of Experience</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-black text-slate-900">500+</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex gap-6 items-start transition-all hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  {value.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900">{value.title}</h4>
                  <p className="text-slate-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
