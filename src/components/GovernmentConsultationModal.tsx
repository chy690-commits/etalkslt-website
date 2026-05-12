import { motion, AnimatePresence } from "motion/react";
import { X, Send, Loader2 } from "lucide-react";
import { useState, FormEvent, useRef } from "react";

interface GovernmentConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function GovernmentConsultationModal({ isOpen, onClose, title = "정부지원사업 상담" }: GovernmentConsultationModalProps) {
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      
      if (scriptUrl) {
        // 구글 앱스 스크립트 전송 (no-cors 모드에서는 text/plain이 파싱하기 더 안전할 수 있음)
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(formData),
        });
      } else {
        console.warn("VITE_GOOGLE_SHEETS_URL이 설정되지 않았습니다. 데이터를 전송할 수 없습니다.");
        // 테스트용 딜레이
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setStatus("success");
      
      // 폼 데이터 초기화
      setFormData({
        company: "",
        contactPerson: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2500);
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-600 inline-block"></span>
              {title}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} className="text-slate-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 max-h-[calc(90vh-80px)]">
            {status === "success" ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">상담 신청이 완료되었습니다</h3>
                <p className="text-slate-500">담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {/* 회사명 */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-800">
                      회사명 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full border border-slate-200 rounded-sm p-3 text-slate-900 focus:border-blue-400 focus:ring-0 outline-none transition-all"
                    />
                  </div>

                  {/* 담당자 성함 */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-800">
                      담당자 성함 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                      className="w-full border border-slate-200 rounded-sm p-3 text-slate-900 focus:border-blue-400 focus:ring-0 outline-none transition-all"
                    />
                  </div>

                  {/* 이메일 */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-800">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-slate-200 rounded-sm p-3 text-slate-900 focus:border-blue-400 focus:ring-0 outline-none transition-all"
                    />
                  </div>

                  {/* 연락처 */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-800">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border border-slate-200 rounded-sm p-3 text-slate-900 focus:border-blue-400 focus:ring-0 outline-none transition-all"
                    />
                  </div>

                  {/* 제목 */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-800">제목</label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full border border-slate-200 rounded-sm p-3 text-slate-900 focus:border-blue-400 focus:ring-0 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 문의사항 */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-800">문의사항</label>
                  <textarea 
                    rows={8} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border border-slate-200 rounded-sm p-4 text-slate-900 focus:border-blue-400 focus:ring-0 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    disabled={status === "submitting"}
                    className="bg-white border border-slate-300 text-slate-800 px-10 py-2.5 rounded-sm hover:bg-slate-50 transition-all text-sm font-medium shadow-sm active:scale-95"
                  >
                    {status === "submitting" ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>제출하기</>
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-xs text-right mt-1 font-medium">전송 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
