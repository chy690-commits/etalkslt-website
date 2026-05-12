import { motion, AnimatePresence } from "motion/react";
import { 
  X, CheckCircle, Code, Smartphone, ShoppingBag, Globe, Zap, Settings, Search, 
  Monitor, PlayCircle, Mail, ShieldCheck, Calendar, Users, History as HistoryIcon, 
  Award, Lock, FileSearch, ShieldAlert, Database, Cloud, HardDrive, Shield, Factory, Map
} from "lucide-react";
import { PROPOSAL_DETAILS, GROUPWARE_DETAILS, SECURITY_DETAILS, GOVERNMENT_DETAILS } from "../constants";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
}

const webIconMap: Record<string, any> = {
  "맞춤형 홈페이지 제작": <Code />,
  "반응형 홈페이지 제작": <Monitor />,
  "모바일 홈페이지 제작": <Smartphone />,
  "쇼핑몰 홈페이지 제작": <ShoppingBag />,
  "기타 서비스": <Globe />
};

const gwIconMap: Record<string, any> = {
  "전자결재 시스템": <CheckCircle />,
  "독자 개발 메일 엔진": <Mail />,
  "강력한 통합 보안": <ShieldCheck />,
  "모바일 오피스 (THE Mobile)": <Smartphone />
};

const secIconMap: Record<string, any> = {
  "문서 중앙화 및 권한 관리": <Lock />,
  "불법 복제 및 문서 암호화(DRM)": <FileSearch />,
  "랜섬웨어 완벽 대응": <ShieldAlert />,
  "협업 및 스토리지 최적화": <Database />
};

const govIconMap: Record<string, any> = {
  "ICT 중소기업 정보보호 지원": <Shield />,
  "정부형 스마트공장 구축": <Factory />,
  "클라우드 종합솔루션 지원": <Cloud />,
  "지역 전략산업 우선 지원": <Map />
};

export function DetailModal({ isOpen, onClose, serviceId }: DetailModalProps) {
  if (!isOpen) return null;

  const isGroupware = serviceId === 'groupware';
  const isSecurity = serviceId === 'security';
  const isGovernment = serviceId === 'government';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {isGovernment ? "IT 정부지원사업 컨설팅 상세" :
                 isSecurity ? "문서 보안 (문서중앙화) 제안 상세" : 
                 isGroupware ? "그룹웨어 (G-Mate) 제안 상세" : "SI/WEB 개발 제안 상세"}
              </h2>
              <p className="text-sm text-slate-500">
                {isGovernment ? "중소기업 디지털 전환 및 정보보호 인프라 지원" :
                 isSecurity ? "기업 자산 보호와 효율적인 문서 관리 체계" :
                 isGroupware ? "비즈니스 소통과 협업을 위한 최적의 시스템" : "맞춤형 시스템 구축 및 서비스 안내"}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={24} className="text-slate-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-12">
            {/* Introduction */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                <PlayCircle size={18} /> Introduction
              </h3>
              <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed italic">
                "{isGovernment ? GOVERNMENT_DETAILS.intro :
                  isSecurity ? SECURITY_DETAILS.intro :
                  isGroupware ? GROUPWARE_DETAILS.intro : PROPOSAL_DETAILS.intro}"
              </p>
            </section>

            {isGovernment ? (
              <>
                {/* Government Support Programs */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Zap size={18} /> Support Programs
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {GOVERNMENT_DETAILS.mainPrograms.map((item, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 hover:bg-blue-50 transition-colors">
                        <div className="text-blue-500">
                          {govIconMap[item.title] || <CheckCircle size={24} />}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Priority Sectors */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Award size={18} /> Priority Sectors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {GOVERNMENT_DETAILS.sectors.map((sector, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold border border-blue-100">
                         {sector}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Support Process */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Settings size={18} /> Support Process
                  </h3>
                  <div className="space-y-3">
                    {GOVERNMENT_DETAILS.process.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-sm text-slate-700 font-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            ) : isSecurity ? (
              <>
                {/* Security Main Capabilities */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Zap size={18} /> Key Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SECURITY_DETAILS.mainCapabilities.map((item, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 hover:bg-blue-50 transition-colors">
                        <div className="text-blue-500">
                          {secIconMap[item.title] || <CheckCircle size={24} />}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Security Detailed Features */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Settings size={18} /> Functional Features
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {SECURITY_DETAILS.features.map((feature, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold border border-blue-100 flex items-center gap-2">
                        <CheckCircle size={12} /> {feature}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Deployment Options */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Cloud size={18} /> Deployment Options
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-slate-200 rounded-2xl space-y-3">
                      <div className="flex items-center gap-3 text-slate-900 font-bold">
                        <HardDrive size={20} className="text-blue-600" /> 어플라이언스 (Appliance)
                      </div>
                      <p className="text-sm text-slate-500">도입 부담을 줄여주는 H/W+S/W 일체형 패키지. 전원 연결과 환경 설정만으로 즉시 시작 가능합니다.</p>
                    </div>
                    <div className="p-6 border border-slate-200 rounded-2xl space-y-3">
                      <div className="flex items-center gap-3 text-slate-900 font-bold">
                        <Cloud size={20} className="text-blue-600" /> 클라우드 (Cloud)
                      </div>
                      <p className="text-sm text-slate-500">연간 사용량만큼만 비용을 지불하는 실속형 서비스. 구축 시간 단축과 초기 비용 절감 효과가 탁월합니다.</p>
                    </div>
                  </div>
                </section>

                {/* Case Studies */}
                <section className="space-y-6 pb-8">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Users size={18} /> Implementation Cases
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SECURITY_DETAILS.caseStudies.map((item, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                        <p className="text-sm font-bold text-slate-800 mb-1">{item.company}</p>
                        <p className="text-[10px] text-blue-600 font-medium leading-tight">{item.logic}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            ) : isGroupware ? (
              <>
                {/* Groupware Main Features */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Zap size={18} /> Key Solutions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {GROUPWARE_DETAILS.mainFeatures.map((item, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 hover:bg-blue-50 transition-colors">
                        <div className="text-blue-500">
                          {gwIconMap[item.title] || <CheckCircle size={24} />}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Groupware All Features */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Settings size={18} /> Integrated Functions
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {GROUPWARE_DETAILS.allFeatures.map((feature, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold border border-blue-100 flex items-center gap-2">
                        <CheckCircle size={12} /> {feature}
                      </span>
                    ))}
                  </div>
                </section>

                {/* History */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <HistoryIcon size={18} /> Our History
                  </h3>
                  <div className="space-y-4">
                    {GROUPWARE_DETAILS.history.map((h, idx) => (
                      <div key={idx} className="flex gap-6 items-center">
                        <div className="w-16 font-black text-blue-600 text-lg">{h.year}</div>
                        <div className="h-0.5 flex-1 bg-slate-100 relative">
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full" />
                        </div>
                        <div className="flex-1 text-slate-700 font-medium">{h.event}</div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Clients */}
                <section className="space-y-6 pb-8">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Award size={18} /> Major Clients
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {GROUPWARE_DETAILS.clients.map((client, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                        <p className="text-sm font-bold text-slate-800">{client.name}</p>
                        <p className="text-xs text-blue-600 font-medium">사용자 {client.count}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            ) : (
              <>
                {/* Web Business Area */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Zap size={18} /> Business Area
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PROPOSAL_DETAILS.businessArea.map((item, idx) => (
                      <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-3 hover:bg-blue-50 transition-colors">
                        <div className="text-blue-500">
                          {webIconMap[item.title] || <CheckCircle size={24} />}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Web Process */}
                <section className="space-y-6">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Settings size={18} /> Development Process
                  </h3>
                  <div className="space-y-4">
                    {PROPOSAL_DETAILS.process.map((step, idx) => (
                      <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold shrink-0">
                          0{idx + 1}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Web Portfolio Categories */}
                <section className="space-y-6 pb-8">
                  <h3 className="text-lg font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    <Search size={18} /> Portfolio Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {PROPOSAL_DETAILS.portfolioCategories.map((cat, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-xs font-bold hover:bg-blue-600 hover:text-white transition-all cursor-default">
                        {cat}
                      </span>
                    ))}
                  </div>
                </section>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
            <button 
              onClick={onClose}
              className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors"
            >
              닫기
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
