import { Leaf } from "lucide-react";
import { BRAND_NAME, CONTACT_INFO, NAV_LINKS, COMPANY_NAME } from "../constants";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center text-2xl sm:text-3xl font-black tracking-tight mb-4 notranslate" translate="no">
              <span className="text-green-500 italic">e</span>
              <span className="text-slate-900">Talk</span>
              <span className="text-slate-500 font-medium ml-1 text-sm sm:text-xl lowercase">solution</span>
              <Leaf size={20} className="text-green-400 -ml-0.5 mb-3 sm:mb-4" />
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              {COMPANY_NAME}은 기업의 디지털 트랜스포메이션을 완성하는 
              최적의 IT 솔루션을 제공하는 혁신 기업입니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 font-mono text-xs uppercase tracking-widest bg-slate-200 inline-block px-2 py-0.5 rounded">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 font-mono text-xs uppercase tracking-widest bg-slate-200 inline-block px-2 py-0.5 rounded">Contact</h4>
            <ul className="space-y-4">
              <li className="text-slate-600 flex gap-1">
                <span>Tel:</span>
                <span className="whitespace-pre-line">{CONTACT_INFO.phone}</span>
              </li>
              <li className="text-slate-600">Email: {CONTACT_INFO.email}</li>
              <li className="text-slate-600 whitespace-pre-line">{CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>© 2026 {BRAND_NAME}. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
