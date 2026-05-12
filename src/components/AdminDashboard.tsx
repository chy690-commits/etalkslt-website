import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, RefreshCw, Trash2, ExternalLink } from "lucide-react";

interface Contact {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  timestamp: string;
}

interface AdminDashboardProps {
  onClose: () => void;
}

export function AdminDashboard({ onClose }: AdminDashboardProps) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contacts");
      if (res.ok) {
        const data = await res.json();
        setContacts(data.reverse()); // Show newest first
      }
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const downloadCSV = () => {
    if (contacts.length === 0) return;
    
    const headers = ["ID", "신청일시", "이름", "회사명", "연락처", "이메일", "문의내용"];
    const rows = contacts.map(c => [
      c.id,
      new Date(c.timestamp).toLocaleString(),
      c.name,
      c.company,
      c.phone,
      c.email,
      c.message.replace(/\n/g, " ")
    ]);
    
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");
    
    const blob = new Blob(["\ufeff" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `etalk_contacts_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-slate-50 z-[100] flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-slate-900">상담 신청 현황 관리</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={fetchContacts}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            새로고침
          </button>
          <button 
            onClick={downloadCSV}
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            <ExternalLink size={16} />
            CSV 다운로드 (Excel용)
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-auto p-6 md:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">신청 일시</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">이름 / 회사</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">연락처 / 이메일</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">문의 내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {contacts.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-20 text-center text-slate-400">
                      {loading ? "데이터를 불러오는 중입니다..." : "아직 접수된 상담 신청이 없습니다."}
                    </td>
                  </tr>
                ) : (
                  contacts.map((contact) => (
                    <motion.tr 
                      key={contact.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-slate-500 align-top">
                        {new Date(contact.timestamp).toLocaleString("ko-KR")}
                      </td>
                      <td className="px-6 py-4 align-top">
                        <p className="font-bold text-slate-900">{contact.name}</p>
                        <p className="text-xs text-slate-500">{contact.company}</p>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <p className="font-bold text-slate-900">{contact.phone}</p>
                        <p className="text-sm text-blue-600">{contact.email}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 max-w-md align-top whitespace-pre-wrap">
                        {contact.message}
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          <p className="mt-6 text-sm text-slate-400">
            * 데이터는 서버 메모리에 저장되어 서버가 재시작되면 초기화될 수 있습니다. <br/>
            * 정식 도입 시에는 Google Sheets나 Database와 연동하여 영구 보관이 가능합니다.
          </p>
        </div>
      </main>
    </div>
  );
}
