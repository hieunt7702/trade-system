"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../contexts/LanguageContext";

export function Header() {
  const pathname = usePathname() || "/";
  const { language, setLanguage, t } = useLanguage();

  // Helper function to check if active
  const isActive = (path: string, exact = false) => {
    if (exact) return pathname === path;
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const [isVtLinked, setIsVtLinked] = useState(false);
  useEffect(() => {
    setIsVtLinked(localStorage.getItem('vtLinked') === 'true');
    const handleStorageChange = () => {
      setIsVtLinked(localStorage.getItem('vtLinked') === 'true');
    };
    window.addEventListener('vt-linked-change', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('vt-linked-change', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('vtLinked');
    window.dispatchEvent(new Event('vt-linked-change'));
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img 
            src="https://hieunthub.co/uploads/branding/01KMD2Q3XVW7XM0T3CD1CDMJH2.webp" 
            alt="HieuNTHUB" 
            width="36" 
            height="36" 
            loading="eager" 
            decoding="async" 
            className="h-9 w-9 rounded-xl object-cover shadow-lg shadow-orange-500/30 shrink-0"
          />
          <div className="leading-tight">
            <div className="font-extrabold text-base sm:text-lg text-white">HieuNTHUB</div>
            <div className="text-[10px] text-zinc-500 -mt-0.5">.co</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm flex-1 justify-center min-w-0">
          <Link 
            href="/" 
            className={`relative inline-flex items-center gap-1.5 transition whitespace-nowrap ${
              isActive("/") ? "text-orange-400 font-semibold" : "text-zinc-400 hover:text-orange-300"
            }`}
          >
            <span>{t("nav.home")}</span>
          </Link>
          <Link 
            href="/offers-bonus" 
            className={`relative inline-flex items-center gap-1.5 transition whitespace-nowrap ${
              isActive("/offers-bonus") ? "text-orange-400 font-semibold" : "text-zinc-400 hover:text-orange-300"
            }`}
          >
            <span>{t("nav.offers")}</span>
            <span className="rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-rose-500/15 border border-rose-400/30 text-rose-300">{t("badge.hot")}</span>
          </Link>
          <Link 
            href="/indicators" 
            className={`relative inline-flex items-center gap-1.5 transition whitespace-nowrap ${
              isActive("/indicators") ? "text-orange-400 font-semibold" : "text-zinc-400 hover:text-orange-300"
            }`}
          >
            <span>{t("nav.indicators")}</span>
          </Link>
          <Link 
            href="/rewards" 
            className={`relative inline-flex items-center gap-1.5 transition whitespace-nowrap px-2.5 py-1 rounded-full border border-amber-400/30 shadow-[0_0_10px_rgba(251,191,36,0.15)] hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] ${
              isActive("/rewards") ? "bg-amber-500/20 text-amber-300 font-bold" : "text-zinc-400 hover:text-amber-300 bg-amber-500/10"
            }`}
          >
            <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span>Thưởng</span>
          </Link>
          <Link 
            href="/predictions" 
            className={`relative inline-flex items-center gap-1.5 transition whitespace-nowrap px-2.5 py-1 rounded-full border border-purple-400/30 shadow-[0_0_10px_rgba(168,85,247,0.15)] hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] ${
              isActive("/predictions") ? "bg-purple-500/20 text-purple-300 font-bold" : "text-zinc-400 hover:text-purple-300 bg-purple-500/10"
            }`}
          >
            <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Dự đoán</span>
          </Link>
          <Link 
            href="/ib-commission-overview" 
            className={`relative inline-flex items-center gap-1.5 transition whitespace-nowrap px-2.5 py-1 rounded-full border border-orange-400/30 ${
              isActive("/ib-commission-overview") ? "bg-orange-500/20 text-orange-300 font-bold" : "text-zinc-400 hover:text-orange-300 bg-orange-500/10"
            }`}
          >
            <span>{t("nav.ib")}</span>
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Desktop Resources Dropdown */}
          <details className="hidden md:block relative group" data-hh-nav-dropdown="">
            <summary className="list-none cursor-pointer inline-flex items-center gap-1.5 text-sm transition text-zinc-400 hover:text-orange-300">
              <span>{t("nav.resources")}</span>
              <svg className="h-3.5 w-3.5 transition group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
            </summary>
            <div className="absolute right-0 top-full pt-3 z-50 min-w-[240px]">
              <div className="rounded-xl border border-white/10 bg-zinc-900/95 backdrop-blur-md shadow-2xl p-2">
                <Link href="/brokers" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5 hover:text-white">
                  <span className="flex-1">{t("nav.brokers")}</span>
                </Link>
                <Link href="/brokers/so-sanh" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5 hover:text-white">
                  <span className="flex-1">{t("nav.compare")}</span>
                </Link>
                <Link href="/gia-vang-hom-nay" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5 hover:text-white">
                  <span className="flex-1">{t("nav.gold")}</span>
                  <span className="rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">{t("badge.live")}</span>
                </Link>
                <Link href="/passview" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5 hover:text-white">
                  <span className="flex-1">{t("nav.passview")}</span>
                </Link>
                <Link href="/courses" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5 hover:text-white">
                  <span className="flex-1">{t("nav.courses")}</span>
                </Link>
                <Link href="/cms" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5 hover:text-white">
                  <span className="flex-1">{t("nav.news")}</span>
                </Link>
                <Link href="/brokers/submit-request" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5 hover:text-white">
                  <span className="flex-1">{t("nav.custom_ib")}</span>
                </Link>
              </div>
            </div>
          </details>

          {/* Desktop Lang Toggle */}
          <div className="hidden md:inline-flex items-center text-xs text-zinc-400 border border-white/10 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setLanguage("vi")}
              className={`px-2.5 py-1 transition ${
                language === "vi" ? "bg-orange-500/20 text-orange-300 font-bold" : "hover:bg-white/5"
              }`}
            >
              VI
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 transition ${
                language === "en" ? "bg-orange-500/20 text-orange-300 font-bold" : "hover:bg-white/5"
              }`}
            >
              EN
            </button>
          </div>

          {/* User Avatar OR Contact Button */}
          {isVtLinked ? (
            <details className="hidden sm:block relative group" data-hh-nav-dropdown="">
              <summary className="list-none cursor-pointer inline-flex items-center outline-none">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 p-[2px] shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform">
                  <div className="h-full w-full rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-900 overflow-hidden">
                    <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="absolute right-0 top-full pt-3 z-50 min-w-[260px]">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-2xl overflow-hidden p-2">
                  <div className="p-3 border-b border-white/10 mb-2">
                    <div className="text-xs text-zinc-500 font-medium mb-0.5">Tài khoản liên kết</div>
                    <div className="text-sm text-white font-bold tracking-wide flex items-center justify-between">
                      VTM-982412
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase tracking-wider">Đã kết nối</span>
                    </div>
                  </div>
                  <Link href="/rewards" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5 hover:text-orange-300 group">
                    <svg className="w-4 h-4 text-zinc-400 group-hover:text-orange-400 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    Quản lý phần thưởng
                  </Link>
                  <button onClick={handleLogout} className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-rose-400 hover:bg-rose-500/10 text-left group">
                    <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Đăng xuất VT Market
                  </button>
                </div>
              </div>
            </details>
          ) : (
            <Link href="/contact" className="hidden sm:inline-flex rounded-xl bg-gradient-to-r from-orange-400 to-amber-600 px-4 py-2 text-sm font-semibold text-zinc-950 hover:from-orange-300 hover:to-amber-500 transition shadow-lg shadow-orange-500/30 whitespace-nowrap">
              {t("nav.contact")}
            </Link>
          )}

          {/* Mobile Menu */}
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer rounded-lg border border-white/10 bg-white/5 p-2 hover:border-white/20 transition" aria-label="Menu">
              <svg className="h-5 w-5 text-zinc-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-72 max-h-[80vh] overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-md shadow-2xl p-2 z-50">
              <Link href="/" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/") ? "text-orange-400 bg-orange-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <span className="flex-1">{t("nav.home")}</span>
              </Link>
              <Link href="/offers-bonus" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/offers-bonus") ? "text-orange-400 bg-orange-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <span className="flex-1">{t("nav.offers")}</span>
                <span className="rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-rose-500/15 border border-rose-400/30 text-rose-300">{t("badge.hot")}</span>
              </Link>
              <Link href="/indicators" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/indicators") ? "text-orange-400 bg-orange-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <span className="flex-1">{t("nav.indicators")}</span>
              </Link>
              <Link href="/rewards" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/rewards") ? "text-amber-400 bg-amber-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="flex-1">Hệ thống Thưởng</span>
              </Link>
              <Link href="/predictions" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/predictions") ? "text-purple-400 bg-purple-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="flex-1">Dự đoán hôm nay</span>
                <span className="rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-purple-500/15 border border-purple-400/30 text-purple-300">NEW</span>
              </Link>
              <Link href="/ib-commission-overview" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/ib-commission-overview") ? "text-orange-400 bg-orange-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <span className="flex-1">{t("nav.ib")}</span>
              </Link>
              
              <div className="my-1 border-t border-white/5"></div>
              
              <div className="px-3 pt-2 pb-1 text-[9px] uppercase tracking-[0.12em] text-zinc-500 font-bold">{t("nav.resources")}</div>
              <Link href="/brokers" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5">
                <span className="flex-1">{t("nav.brokers")}</span>
              </Link>
              <Link href="/brokers/so-sanh" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5">
                <span className="flex-1">{t("nav.compare")}</span>
              </Link>
              <Link href="/gia-vang-hom-nay" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5">
                <span className="flex-1">{t("nav.gold")}</span>
                <span className="rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">{t("badge.live")}</span>
              </Link>
              <Link href="/passview" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5">
                <span className="flex-1">{t("nav.passview")}</span>
              </Link>
              <Link href="/courses" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5">
                <span className="flex-1">{t("nav.courses")}</span>
              </Link>
              <Link href="/cms" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5">
                <span className="flex-1">{t("nav.news")}</span>
              </Link>
              <Link href="/brokers/submit-request" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition text-zinc-300 hover:bg-white/5">
                <span className="flex-1">{t("nav.custom_ib")}</span>
              </Link>
              
              {/* Mobile Lang */}
              <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-2 px-3 text-xs">
                <span className="text-zinc-500">Ngôn ngữ:</span>
                <button
                  type="button"
                  onClick={() => setLanguage("vi")}
                  className={`px-2 py-0.5 rounded ${language === "vi" ? "bg-orange-500/20 text-orange-300 font-bold" : "text-zinc-400"}`}
                >
                  VI
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-0.5 rounded ${language === "en" ? "bg-orange-500/20 text-orange-300 font-bold" : "text-zinc-400"}`}
                >
                  EN
                </button>
              </div>
              
              <div className="mt-2 pt-2 border-t border-white/10">
                {isVtLinked ? (
                   <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm transition text-rose-400 border border-rose-500/20 bg-rose-500/10 font-semibold">
                     Đăng xuất VT Market
                   </button>
                ) : (
                  <Link href="/contact" className="block rounded-lg bg-gradient-to-r from-orange-400 to-amber-600 px-3 py-2 text-sm font-semibold text-zinc-950 text-center">
                    {t("nav.contact")}
                  </Link>
                )}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
