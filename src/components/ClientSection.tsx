import React from "react";
import { motion } from "motion/react";
import { MAJOR_CLIENTS } from "../constants";

// Helper to generate a brand color and standard design deterministically for custom clients
function getDeterministicStyle(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colors = [
    { fill: "#3B82F6", light: "#EFF6FF" }, // Blue
    { fill: "#10B981", light: "#ECFDF5" }, // Emerald
    { fill: "#6366F1", light: "#EEF2FF" }, // Indigo
    { fill: "#F43F5E", light: "#FFF1F2" }, // Rose
    { fill: "#F59E0B", light: "#FEF3C7" }, // Amber
    { fill: "#8B5CF6", light: "#F5F3FF" }, // Violet
    { fill: "#06B6D4", light: "#ECFEFF" }, // Cyan
  ];
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

function ClientLogo({ name }: { name: string }) {
  switch (name) {
    case "SG메디칼":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-125">
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" fill="#A81D22" />
            <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M32 50 C 32 38, 45 35, 50 50 C 55 35, 68 38, 68 50 C 68 62, 55 65, 50 50 C 45 65, 32 62, 32 50 Z" stroke="white" strokeWidth="4.5" fill="none" />
            <circle cx="50" cy="50" r="6" fill="white" />
          </svg>
          <span className="text-lg md:text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">SG 메디칼</span>
        </div>
      );
    case "에이치앤이루자":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-125">
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20 L23 42 L33 78 L67 78 L77 42 Z" stroke="#7A6855" strokeWidth="3.5" fill="none" opacity="0.6" />
            <path d="M50 20 L33 78 M50 20 L67 78 M23 42 L67 78 M77 42 L33 78" stroke="#7A6855" strokeWidth="2.5" fill="none" opacity="0.4" />
            <circle cx="50" cy="20" r="8" fill="#F39200" />
            <circle cx="77" cy="42" r="8" fill="#E50012" />
            <circle cx="67" cy="78" r="8" fill="#009640" />
            <circle cx="33" cy="78" r="8" fill="#009EE0" />
            <circle cx="23" cy="42" r="8" fill="#6C2E83" />
          </svg>
          <span className="text-xl md:text-3xl font-black text-[#2e2332] tracking-tighter whitespace-nowrap font-sans">H&amp;iruja</span>
        </div>
      );
    case "씨에스케이":
      return (
        <div className="flex items-center justify-center select-none transform scale-110 md:scale-135">
          <span className="text-3xl md:text-5xl font-black italic tracking-[-0.12em] text-[#E30613] font-sans">CSK</span>
        </div>
      );
    case "농우바이오":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-125">
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 50 C 15 25, 45 15, 75 25 C 90 45, 85 75, 50 85 C 25 85, 15 70, 15 50 Z" stroke="#0072BC" strokeWidth="7" fill="none" />
            <path d="M40 60 C 35 45, 45 35, 50 50 C 55 35, 65 45, 60 60 C 55 65, 45 65, 40 60 Z" fill="#F39200" />
            <path d="M50 50 C 50 40, 58 35, 54 45 Z" fill="#009640" />
          </svg>
          <span className="text-lg md:text-2xl font-black text-[#0072BC] tracking-tight whitespace-nowrap">농우바이오</span>
        </div>
      );
    case "평화홀딩스":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-100 md:scale-120">
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#1D428A" strokeWidth="6.5" fill="none" />
            <path d="M26 65 C 32 40, 52 32, 74 38 M32 72 C 38 52, 54 44, 70 52 M40 78 C 44 65, 56 60, 66 65" stroke="#1D428A" strokeWidth="6" strokeLinecap="round" fill="none" />
          </svg>
          <div className="flex flex-col items-start leading-none ml-1">
            <span className="text-base md:text-lg font-black text-[#1D428A] tracking-tighter whitespace-nowrap flex items-center">평화홀딩스(주)</span>
            <span className="text-[6px] md:text-[8px] text-[#1D428A]/85 font-bold tracking-tighter mt-1 whitespace-nowrap uppercase">PYUNG HWA HOLDINGS</span>
          </div>
        </div>
      );
    case "한국섬유소재연구원":
      return (
        <div className="flex items-center justify-center gap-1 select-none transform scale-105 md:scale-125">
          <span className="text-2xl md:text-4xl font-black tracking-[-0.08em] text-[#1C56A3] font-sans">K</span>
          <svg className="w-8 h-8 md:w-9 md:h-9 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="44" fill="#1C56A3" />
            <circle cx="50" cy="50" r="30" stroke="#FFD200" strokeWidth="6" fill="none" />
            <path d="M22 65 C 35 45, 65 45, 78 65" stroke="white" strokeWidth="6" strokeLinecap="round" />
            <path d="M25 35 C 45 60, 55 60, 75 35" stroke="#E50012" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <span className="text-2xl md:text-4xl font-black tracking-[-0.08em] text-[#1C56A3] font-sans -ml-0.5">TERI</span>
        </div>
      );
    case "바인테크":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-125">
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 75 C 20 50, 40 50, 45 75" stroke="#F39200" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M30 65 C 38 40, 58 40, 65 65" stroke="#E54C11" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M50 55 C 60 25, 80 25, 90 55" stroke="#004B8D" strokeWidth="12" strokeLinecap="round" fill="none" />
          </svg>
          <span className="text-xl md:text-3xl font-black text-[#004B8D] tracking-tighter">Vinetech</span>
        </div>
      );
    case "KH 바텍":
      return (
        <div className="flex items-center justify-center select-none transform scale-110 md:scale-135">
          <span className="text-2xl md:text-4xl font-extrabold text-[#111] tracking-[-0.08em] font-sans scale-x-110 origin-center">KH VATEC®</span>
        </div>
      );
    case "열린기술":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-125">
          <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 20 L55 20 L55 80 L15 80 L32 50 Z" fill="#E30613" />
            <rect x="62" y="20" width="12" height="60" fill="#2E2A2B" />
          </svg>
          <span className="text-xl md:text-3xl font-black text-[#2E2A2B] tracking-tight">열린기술</span>
        </div>
      );
    case "마리아":
      return (
        <div className="flex flex-col items-center justify-center select-none transform scale-100 md:scale-115">
          <div className="flex items-center justify-center leading-none text-[#7BAE2A]">
            <span className="text-2xl md:text-4.5xl font-serif font-extrabold tracking-tight">MAR</span>
            <svg className="w-5 h-8 md:w-6 md:h-10 mx-0.5 -mb-0.5" viewBox="0 0 40 100" fill="currentColor">
              <circle cx="20" cy="20" r="10" />
              <path d="M20 35 C15 45, 12 60, 16 85 C18 90, 22 90, 24 85 C28 60, 25 45, 20 35" />
              <path d="M15 35 C10 45, 12 55, 16 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
            <span className="text-2xl md:text-4.5xl font-serif font-extrabold tracking-tight">A</span>
          </div>
          <span className="text-[8px] md:text-[10px] text-[#7BAE2A] font-bold tracking-normal mt-0.5 whitespace-nowrap">Fertility Hospital</span>
        </div>
      );
    case "화신":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-125">
          <svg className="w-10 h-7 flex-shrink-0" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 52 L35 18 H47 L27 52 Z" fill="#1B56A3" />
            <path d="M35 52 L55 18 H67 L47 52 Z" fill="#1B56A3" />
            <path d="M55 52 L75 18 H87 L67 52 Z" fill="#1B56A3" />
          </svg>
          <span className="text-xl md:text-3.5xl font-extrabold tracking-[-0.05em] text-[#1B56A3] font-sans">HWASHIN</span>
        </div>
      );
    case "SM창명해운":
      return (
        <div className="flex items-center justify-center gap-1.5 select-none transform scale-105 md:scale-125">
          <span className="text-2.5xl md:text-4.5xl font-black text-[#E30613] italic tracking-[-0.08em] font-sans">SM</span>
          <span className="text-xl md:text-3xl font-bold text-slate-800 tracking-tighter">창명해운</span>
        </div>
      );
    case "템플스테이":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-120">
          <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 55 L35 32 L50 25 L65 32 L85 55" stroke="#7A6855" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M22 55 L22 75 L78 75 L78 55" stroke="#7A6855" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M40 75 L40 50 L60 50 L60 75" stroke="#7A6855" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
            <path d="M50 25 L50 40" stroke="#7A6855" strokeWidth="2" strokeLinecap="round" />
            <path d="M72 32 C78 30, 88 35, 84 42 C82 43, 75 43, 72 42" stroke="#7A6855" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M74 72 C74 68, 80 66, 82 70 C84 72, 80 75, 76 75 Z" fill="#E54C11" />
          </svg>
          <div className="flex flex-col items-start leading-none gap-0.5">
            <span className="text-lg md:text-2xl font-black text-[#736E5D] tracking-tighter">템플스테이</span>
          </div>
        </div>
      );
    case "제닉":
      return (
        <div className="flex items-center justify-center gap-2.5 select-none transform scale-105 md:scale-115">
          <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="44" stroke="#B38676" strokeWidth="4.5" fill="none" />
            <path d="M30 46 C38 42, 42 58, 50 50 C58 42, 62 58, 70 54" stroke="#B38676" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M30 54 C38 58, 42 42, 50 50 C58 58, 62 42, 70 46" stroke="#B38676" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
          </svg>
          <span className="text-xl md:text-3xl font-black text-[#B38676] tracking-[0.18em] font-sans text-center">GENIC</span>
        </div>
      );
    case "바이넥스":
      return (
        <div className="flex items-center justify-center select-none transform scale-100 md:scale-115">
          <div className="relative bg-[#E50012] px-6 py-2 md:px-8 md:py-2.5 rounded-sm [clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)] shadow-sm">
            <span className="text-base md:text-2.5xl font-black text-white tracking-[0.15em] font-sans italic">BINEX</span>
          </div>
        </div>
      );
    case "연합정밀":
      return (
        <div className="flex items-center justify-center gap-2.5 select-none transform scale-100 md:scale-120">
          <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="44" stroke="#0072BC" strokeWidth="7" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="#0072BC" strokeWidth="2.5" fill="none" strokeDasharray="6 3" />
            <circle cx="50" cy="50" r="18" fill="#0072BC" />
            <path d="M50 15 L50 85 M15 50 L85 50" stroke="#0072BC" strokeWidth="2" opacity="0.5" />
          </svg>
          <div className="flex flex-col items-start leading-none ml-1">
            <span className="text-lg md:text-xl font-black text-[#0072BC] tracking-tighter">연합정밀(주)</span>
            <span className="text-[6px] md:text-[8px] text-[#0072BC]/80 font-bold tracking-tighter mt-1 uppercase">YEONHAB PRECISION CO.,LTD.</span>
          </div>
        </div>
      );
    case "한국자동차산업협회":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-120">
          <div className="flex items-baseline gap-1.5 font-sans leading-none">
            <div className="flex flex-col items-center">
              <svg className="w-12 h-6" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 40 L25 10 L30 10 L25 40 Z" fill="#005EB8" />
                <path d="M22 25 L35 25" stroke="#005EB8" strokeWidth="6" />
                <path d="M12 25 C15 15, 28 15, 30 25 M20 35 C25 45, 38 45, 40 35" stroke="#009EE0" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M45 40 L55 10 L65 40" stroke="#005EB8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M70 40 C68 25, 78 20, 85 40" stroke="#005EB8" strokeWidth="6" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="flex flex-col items-start gap-1 leading-none ml-0.5">
              <span className="text-sm md:text-base font-extrabold text-[#004B8D] tracking-tighter">한국자동차산업협회</span>
              <span className="text-[5px] md:text-[6.5px] text-[#004B8D]/80 font-semibold tracking-tighter uppercase whitespace-nowrap">Korea Automobile Manufacturers Association</span>
            </div>
          </div>
        </div>
      );
    case "코츠":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-120">
          <div className="relative flex-shrink-0">
            <svg className="w-11 h-11" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="60" height="60" rx="30" fill="#004B8D" transform="rotate(-15 50 50)" />
              <text x="50" y="58" fill="white" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" fontStyle="italic">COTS</text>
            </svg>
          </div>
          <span className="text-xl md:text-2.5xl font-extrabold italic text-[#004B8D] tracking-tight">Technology</span>
        </div>
      );
    case "동양이엔피":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-120">
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#E50012" />
            <path d="M30 35 H65 M30 50 H58 M30 65 H65" stroke="white" strokeWidth="9" strokeLinecap="round" />
            <path d="M30 35 V65" stroke="white" strokeWidth="9" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col items-start leading-none">
            <span className="text-lg md:text-2xl font-black italic text-[#E50012] tracking-tighter">DONG YANG E&amp;P</span>
            <span className="text-[7px] md:text-[9px] text-zinc-400 font-bold tracking-tighter mt-1 uppercase">energy &amp; power solution</span>
          </div>
        </div>
      );
    case "에이스메디칼":
      return (
        <div className="flex items-center justify-center select-none transform scale-105 md:scale-125">
          <span className="text-2xl md:text-4.5xl font-black italic tracking-tighter">
            <span className="text-[#009EE0]">ACE</span>
            <span className="text-[#004B8D]">MEDICAL</span>
          </span>
        </div>
      );
    case "두원":
      return (
        <div className="flex items-center justify-center gap-1 select-none transform scale-105 md:scale-125 font-sans">
          <span className="text-2.5xl md:text-4.5xl font-extrabold text-[#0072BB] tracking-tighter leading-none flex items-center">
            D
            <span className="relative inline-flex items-center justify-center mx-0.5">
              O
              <div className="absolute w-4 h-4 md:w-5.5 md:h-5.5 bg-[#E50012] rounded-full mix-blend-multiply opacity-80 border-2 border-white animate-pulse" style={{ top: "12%", left: "-12%" }} />
            </span>
            OWON
          </span>
        </div>
      );
    case "신진엠텍":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-115">
          <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 65 L45 25 L55 35 L25 75 Z" fill="#E50012" />
            <path d="M45 45 L75 15 L85 25 L55 55 Z" fill="#005EB8" />
            <path d="M60 40 L85 15 L85 45 Z" fill="#005EB8" />
          </svg>
          <div className="flex flex-col items-start leading-none ml-1">
            <span className="text-base md:text-xl font-black text-slate-800 tracking-tight uppercase">SHINJIN</span>
            <span className="text-[9px] md:text-[11px] font-bold text-[#E50012] tracking-tighter mt-1 flex items-center">Mtec 신진엠텍(주)</span>
          </div>
        </div>
      );
    case "한스바이오메드":
      return (
        <div className="flex flex-col items-center justify-center leading-none select-none transform scale-105 md:scale-120">
          <div className="relative">
            <span className="text-xl md:text-3.5xl font-extrabold tracking-tight text-[#004B8D]">HANS</span>
            <svg className="absolute -top-3 -right-6 w-8 h-4 text-[#009EE0]" viewBox="0 0 100 50" fill="currentColor">
              <path d="M10 40 Q50 15, 90 20 Q50 35, 10 40 Z" />
              <path d="M20 25 Q60 5, 80 15 Q50 20, 20 25 Z" opacity="0.6" />
            </svg>
          </div>
          <span className="text-[10px] md:text-xs font-black text-zinc-500 tracking-[0.2em] mt-1 uppercase">BIOMED</span>
        </div>
      );
    case "KOC전기":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-120">
          <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 50 C20 35, 45 25, 50 50 C55 75, 80 65, 70 50 C60 35, 35 25, 30 50" stroke="#E54C11" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M30 50 C20 65, 45 75, 50 50 C55 25, 80 35, 70 50" stroke="#E54C11" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.4" />
          </svg>
          <span className="text-xl md:text-3xl font-black text-slate-900 tracking-tight">KOC전기</span>
        </div>
      );
    case "한국미니맥스":
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-105 md:scale-120">
          <span className="text-2xl md:text-3.5xl font-black text-[#004B8D] tracking-tighter uppercase font-sans">HKMAX</span>
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="30" width="40" height="40" fill="#F39200" transform="rotate(15 30 50)" />
            <rect x="45" y="15" width="40" height="40" fill="#9BA3AF" transform="rotate(15 65 35)" />
          </svg>
        </div>
      );

    default: {
      const style = getDeterministicStyle(name);
      const initial = name.charAt(0);
      return (
        <div className="flex items-center justify-center gap-2 select-none transform scale-100 md:scale-115">
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="28" fill={style.fill} opacity="0.1" />
            <rect x="5" y="5" width="90" height="90" rx="23" stroke={style.fill} strokeWidth="3" fill="none" opacity="0.15" />
            <circle cx="50" cy="50" r="32" stroke={style.fill} strokeWidth="5.5" fill="none" />
            <circle cx="50" cy="50" r="16" fill={style.fill} opacity="0.1" />
            <text x="50" y="59" fill={style.fill} fontSize="28" fontWeight="950" textAnchor="middle" fontFamily="sans-serif">
              {initial}
            </text>
          </svg>
          <span className="text-lg md:text-xl font-bold text-slate-800 tracking-tight whitespace-nowrap">{name}</span>
        </div>
      );
    }
  }
}

export function ClientSection() {
  return (
    <section id="clients" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-wider uppercase mb-1">
            PARTNERS &amp; CLIENTS
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">주요 구축 고객</h2>
          <p className="max-w-2xl mx-auto font-medium text-sm md:text-base text-slate-500">
            공공기관, 교육기관, 대형 병원부터 대표 기술 대기업까지 <br className="hidden md:block" />
            각 분야 최고의 파트너들이 안정적으로 함께합니다.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 sm:gap-x-10 gap-y-10 md:gap-y-12">
          {MAJOR_CLIENTS.map((client, idx) => (
            <motion.div
              key={client.name + "-" + idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.012 }}
              className="flex flex-col items-center group relative p-2"
            >
              {/* Logo Area */}
              <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center mb-3.5 w-full px-2 relative">
                <div className="group-hover:scale-105 transition-transform duration-300 ease-out flex items-center justify-center w-full">
                  <ClientLogo name={client.name} />
                </div>
              </div>

              {/* Name Capsule */}
              <div className="w-full max-w-[125px] sm:max-w-[145px] md:max-w-[165px] h-7 sm:h-8 bg-white border border-slate-300 shadow-none rounded-full flex items-center justify-center px-3 transition-colors duration-300 hover:border-slate-400">
                <span className="text-[10px] md:text-xs font-semibold text-slate-500 truncate tracking-tight">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Static Info Footer */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2.5 px-8 py-4 bg-white border border-slate-200 rounded-full text-slate-500 text-sm font-bold shadow-sm hover:shadow-md transition-all">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            그 외 80여 개 이상의 기업들이 서비스를 성공적으로 이용하고 있습니다.
          </div>
        </div>

      </div>
    </section>
  );
}
