"use client";

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
            href="/brokers" 
            className={`relative inline-flex items-center gap-1.5 transition whitespace-nowrap ${
              isActive("/brokers", true) ? "text-orange-400 font-semibold" : "text-zinc-400 hover:text-orange-300"
            }`}
          >
            <span>{t("nav.brokers")}</span>
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
            href="/brokers/so-sanh" 
            className={`relative inline-flex items-center gap-1.5 transition whitespace-nowrap ${
              isActive("/brokers/so-sanh") ? "text-orange-400 font-semibold" : "text-zinc-400 hover:text-orange-300"
            }`}
          >
            <span>{t("nav.compare")}</span>
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

          {/* Contact Button */}
          <Link href="/contact" className="hidden sm:inline-flex rounded-xl bg-gradient-to-r from-orange-400 to-amber-600 px-4 py-2 text-sm font-semibold text-zinc-950 hover:from-orange-300 hover:to-amber-500 transition shadow-lg shadow-orange-500/30 whitespace-nowrap">
            {t("nav.contact")}
          </Link>

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
              <Link href="/brokers" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/brokers", true) ? "text-orange-400 bg-orange-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <span className="flex-1">{t("nav.brokers")}</span>
              </Link>
              <Link href="/offers-bonus" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/offers-bonus") ? "text-orange-400 bg-orange-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <span className="flex-1">{t("nav.offers")}</span>
                <span className="rounded-full px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-rose-500/15 border border-rose-400/30 text-rose-300">{t("badge.hot")}</span>
              </Link>
              <Link href="/brokers/so-sanh" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/brokers/so-sanh") ? "text-orange-400 bg-orange-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <span className="flex-1">{t("nav.compare")}</span>
              </Link>
              <Link href="/indicators" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/indicators") ? "text-orange-400 bg-orange-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <span className="flex-1">{t("nav.indicators")}</span>
              </Link>
              <Link href="/ib-commission-overview" className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition font-semibold ${isActive("/ib-commission-overview") ? "text-orange-400 bg-orange-500/10" : "text-zinc-300 hover:bg-white/5"}`}>
                <span className="flex-1">{t("nav.ib")}</span>
              </Link>
              
              <div className="my-1 border-t border-white/5"></div>
              
              <div className="px-3 pt-2 pb-1 text-[9px] uppercase tracking-[0.12em] text-zinc-500 font-bold">{t("nav.resources")}</div>
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
                <Link href="/contact" className="block rounded-lg bg-gradient-to-r from-orange-400 to-amber-600 px-3 py-2 text-sm font-semibold text-zinc-950 text-center">
                  {t("nav.contact")}
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
