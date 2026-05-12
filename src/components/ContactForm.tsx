import { motion } from "motion/react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { CONTACT_INFO } from "../constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", phone: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              함께 <br/>
              성공을 만들어갈 <br/>
              <span className="text-blue-500">준비가 되셨나요?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              프로젝트의 성격에 맞는 최적의 솔루션을 제안해 드립니다. <br/>
              지금 바로 전문가와 상담하세요.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 italic font-serif text-blue-500">T</div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-50">전화번호</p>
                  <p className="text-lg font-semibold whitespace-pre-wrap">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 italic font-serif text-blue-500">M</div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-50">이메일</p>
                  <p className="text-lg font-semibold">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl relative"
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold">신청 완료!</h3>
                <p className="text-slate-400 leading-relaxed">
                  상담 신청이 성공적으로 접수되었습니다.<br/>
                  담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  새로운 상담 신청하기
                </button>
              </motion.div>
            ) : (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">이름</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                    placeholder="홍길동" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">회사명</label>
                  <input 
                    required
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                    placeholder="주식회사 이토크" 
                  />
                </div>
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">연락처</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                    placeholder="010-1234-5678" 
                  />
                </div>
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">이메일</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                    placeholder="email@example.com" 
                  />
                </div>
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">문의내용</label>
                  <textarea 
                    required
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none" 
                    placeholder="문의하실 내용을 입력해주세요."
                  ></textarea>
                </div>
                <button 
                  disabled={status === "submitting"}
                  className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-50 text-white font-bold py-5 rounded-xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
                >
                  {status === "submitting" ? (
                    <>처리 중... <Loader2 size={18} className="animate-spin" /></>
                  ) : (
                    <>구축 상담 신청 <Send size={18} /></>
                  )}
                </button>
                {status === "error" && (
                  <p className="col-span-1 md:col-span-2 text-red-400 text-sm font-medium text-center">
                    일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
