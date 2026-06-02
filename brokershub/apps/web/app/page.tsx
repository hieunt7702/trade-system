import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { getDictionary } from "../lib/dictionary";

export default async function Home() {
  const { t } = await getDictionary();
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 hh-hero-bg opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/15 via-transparent to-transparent"></div>
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-300 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                  {t("home.hero.badge")}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
                  {t("home.hero.title_part1")}
                  <span className="block bg-gradient-to-r from-orange-300 via-amber-400 to-amber-500 bg-clip-text text-transparent"> {t("home.hero.title_part2")}</span>
                  <span className="block text-zinc-300 text-3xl md:text-4xl lg:text-5xl mt-2">{t("home.hero.title_part3")}</span>
                </h1>

                <p className="mt-6 max-w-xl text-zinc-400 text-lg leading-relaxed">
                  {t("home.hero.desc")}
                </p>

                <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl" method="GET" action="/brokers">
                  <div className="flex-1 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 focus-within:border-orange-400/50 transition backdrop-blur">
                    <svg className="h-5 w-5 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <input type="text" name="q" placeholder={t("home.hero.search_placeholder")} autoComplete="off" className="flex-1 bg-transparent placeholder:text-zinc-500 outline-none text-zinc-100" />
                  </div>
                  <button type="submit" className="rounded-2xl bg-gradient-to-r from-orange-400 to-amber-600 px-8 py-4 font-bold text-zinc-950 hover:from-orange-300 hover:to-amber-500 transition shadow-xl shadow-orange-500/30 whitespace-nowrap">
                    {t("home.hero.search_btn")}
                  </button>
                </form>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="text-xs text-zinc-500 self-center mr-1">{t("home.hero.quick_search")}</span>
                  <a href="/brokers?sort=spread" className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-300 hover:border-orange-400/40 hover:text-orange-300 transition">
                    {t("home.hero.tag.spread")}
                  </a>
                  <a href="/brokers?rebate=1" className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-300 hover:border-orange-400/40 hover:text-orange-300 transition">
                    {t("home.hero.tag.rebate")}
                  </a>
                  <a href="/brokers?cpa=1" className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-300 hover:border-orange-400/40 hover:text-orange-300 transition">
                    {t("home.hero.tag.cpa")}
                  </a>
                  <a href="/brokers?fast_withdrawal=1" className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-300 hover:border-orange-400/40 hover:text-orange-300 transition">
                    {t("home.hero.tag.withdrawal")}
                  </a>
                  <a href="/brokers?regulated=1" className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-300 hover:border-orange-400/40 hover:text-orange-300 transition">
                    {t("home.hero.tag.regulated")}
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-8 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-white">29+</div>
                    <div className="text-zinc-500 text-xs">{t("home.hero.stat.brokers")}</div>
                  </div>
                  <div className="h-10 w-px bg-white/10"></div>
                  <div>
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-zinc-500 text-xs">{t("home.hero.stat.traders")}</div>
                  </div>
                  <div className="h-10 w-px bg-white/10"></div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-300 flex items-center gap-1">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                      </svg>
                      {t("home.hero.stat.audit")}
                    </div>
                    <div className="text-zinc-500 text-xs">{t("home.hero.stat.audit_desc")}</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:col-span-5 lg:col-span-5 relative h-[480px]">
                <div className="absolute top-0 right-0 w-72 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur p-5 shadow-2xl hh-float-slow" style={{ animationDelay: '0s' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img src="https://hieunthub.co/uploads/brokers/logos/vt-markets-logo-v3.png" alt="VT Markets" className="h-12 w-12 rounded-xl object-cover" />
                      <div>
                        <div className="font-bold text-white">VT Markets</div>
                        <div className="text-xs text-zinc-500">ASIC · CIMA · FSCA</div>
                      </div>
                    </div>
                    <span className="text-amber-400 text-sm whitespace-nowrap">★ 4.8</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 px-2 py-1.5">
                      <div className="text-zinc-500">{t("home.broker.founded")}</div>
                      <div className="font-semibold text-white">2015</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-2 py-1.5">
                      <div className="text-emerald-300">{t("home.broker.rebate")}</div>
                      <div className="font-semibold text-white">✓</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-32 left-0 w-72 rounded-2xl border border-orange-400/30 bg-gradient-to-b from-orange-500/15 to-amber-500/5 shadow-orange-500/20 backdrop-blur p-5 shadow-2xl hh-float-slow" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img src="https://hieunthub.co/uploads/brokers/logos/01KNKNVFQ3XNQ4JNXTJP154PWK.webp" alt="Dupoin" className="h-12 w-12 rounded-xl object-cover" />
                      <div>
                        <div className="font-bold text-white">Dupoin</div>
                        <div className="text-xs text-zinc-500">FCA · BAPPEBTI</div>
                      </div>
                    </div>
                    <span className="rounded bg-orange-500 text-zinc-950 px-2 py-0.5 text-[10px] font-bold whitespace-nowrap">TOP PICK</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 px-2 py-1.5">
                      <div className="text-zinc-500">{t("home.broker.founded")}</div>
                      <div className="font-semibold text-white">2021</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-2 py-1.5">
                      <div className="text-emerald-300">{t("home.broker.rebate")}</div>
                      <div className="font-semibold text-white">✓</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-12 w-72 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur p-5 shadow-2xl hh-float-slow" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img src="https://hieunthub.co/uploads/brokers/logos/01KJC1HBZDKDEMV3T7WCF03QBW.webp" alt="GTCFX" className="h-12 w-12 rounded-xl object-cover" />
                      <div>
                        <div className="font-bold text-white">GTCFX</div>
                        <div className="text-xs text-zinc-500">FCA · ASIC · VFSC</div>
                      </div>
                    </div>
                    <span className="text-amber-400 text-sm whitespace-nowrap">★ 4.3</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 px-2 py-1.5">
                      <div className="text-zinc-500">{t("home.broker.founded")}</div>
                      <div className="font-semibold text-white">2012</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-2 py-1.5">
                      <div className="text-emerald-300">{t("home.broker.rebate")}</div>
                      <div className="font-semibold text-white">✓</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden col-span-full grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur p-5 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img src="https://hieunthub.co/uploads/brokers/logos/vt-markets-logo-v3.png" alt="VT Markets" className="h-12 w-12 rounded-xl object-cover" />
                      <div>
                        <div className="font-bold text-white">VT Markets</div>
                        <div className="text-xs text-zinc-500">ASIC · CIMA · FSCA</div>
                      </div>
                    </div>
                    <span className="text-amber-400 text-sm whitespace-nowrap">★ 4.8</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 px-2 py-1.5">
                      <div className="text-zinc-500">{t("home.broker.founded")}</div>
                      <div className="font-semibold text-white">2015</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-2 py-1.5">
                      <div className="text-emerald-300">{t("home.broker.rebate")}</div>
                      <div className="font-semibold text-white">✓</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-orange-400/30 bg-gradient-to-b from-orange-500/15 to-amber-500/5 backdrop-blur p-5 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img src="https://hieunthub.co/uploads/brokers/logos/01KNKNVFQ3XNQ4JNXTJP154PWK.webp" alt="Dupoin" className="h-12 w-12 rounded-xl object-cover" />
                      <div>
                        <div className="font-bold text-white">Dupoin</div>
                        <div className="text-xs text-zinc-500">FCA · BAPPEBTI</div>
                      </div>
                    </div>
                    <span className="rounded bg-orange-500 text-zinc-950 px-2 py-0.5 text-[10px] font-bold whitespace-nowrap">TOP PICK</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 px-2 py-1.5">
                      <div className="text-zinc-500">{t("home.broker.founded")}</div>
                      <div className="font-semibold text-white">2021</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-2 py-1.5">
                      <div className="text-emerald-300">{t("home.broker.rebate")}</div>
                      <div className="font-semibold text-white">✓</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur p-5 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img src="https://hieunthub.co/uploads/brokers/logos/01KJC1HBZDKDEMV3T7WCF03QBW.webp" alt="GTCFX" className="h-12 w-12 rounded-xl object-cover" />
                      <div>
                        <div className="font-bold text-white">GTCFX</div>
                        <div className="text-xs text-zinc-500">FCA · ASIC · VFSC</div>
                      </div>
                    </div>
                    <span className="text-amber-400 text-sm whitespace-nowrap">★ 4.3</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 px-2 py-1.5">
                      <div className="text-zinc-500">{t("home.broker.founded")}</div>
                      <div className="font-semibold text-white">2012</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-2 py-1.5">
                      <div className="text-emerald-300">{t("home.broker.rebate")}</div>
                      <div className="font-semibold text-white">✓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promotions */}
        <section className="border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-300">{t("home.promo.hot")}</span>
              </div>
              <a href="#" className="text-xs text-zinc-400 hover:text-orange-300 transition">{t("home.promo.view_all")}</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-indigo-500/5 p-6 hover:border-orange-400/40 hover:shadow-xl hover:shadow-blue-500/10 transition flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://hieunthub.co/uploads/brokers/logos/vt-markets-logo-v3.png" alt="VT Markets" className="h-12 w-12 rounded-xl object-cover shrink-0" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm truncate">VT Markets</div>
                    <div className="flex items-center gap-1 text-xs text-amber-400 mt-0.5">★ <span className="text-zinc-300 font-bold tabular-nums">4.6</span></div>
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-white">Welcome Bonus</div>
                <div className="text-sm text-blue-300 mt-1">VT Markets · {t("home.promo.open_account")}</div>
                <div className="mt-auto pt-4 flex items-center justify-between text-xs">
                  <span className="text-zinc-400">{t("home.promo.for_new")}</span>
                  <span className="inline-flex items-center gap-1 text-blue-300 font-bold group-hover:translate-x-0.5 transition">
                    {t("home.promo.get_now")}
                  </span>
                </div>
              </a>
              <a href="#" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-teal-500/5 p-6 hover:border-orange-400/40 hover:shadow-xl hover:shadow-emerald-500/10 transition flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://hieunthub.co/uploads/brokers/logos/01KMQ0DQKRJEWC9F1TD5NN79NA.webp" alt="Infinox" className="h-12 w-12 rounded-xl object-cover shrink-0" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm truncate">Infinox</div>
                    <div className="flex items-center gap-1 text-xs text-amber-400 mt-0.5">★ <span className="text-zinc-300 font-bold tabular-nums">3.7</span></div>
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-white">Welcome Bonus</div>
                <div className="text-sm text-emerald-300 mt-1">Infinox · {t("home.promo.open_account")}</div>
                <div className="mt-auto pt-4 flex items-center justify-between text-xs">
                  <span className="text-zinc-400">{t("home.promo.for_new")}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-300 font-bold group-hover:translate-x-0.5 transition">
                    {t("home.promo.get_now")}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* EA Product Section */}
        <section className="border-b border-white/5 bg-gradient-to-br from-orange-500/[0.06] via-transparent to-amber-400/[0.04] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-14 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-bold text-orange-300 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  HieuNTHUB · HHubAssistant EA v4.10.2
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                  EA đa năng cho MT5 —
                  <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Free dùng ngay, Pro unlock $50</span>
                </h2>
                <p className="mt-5 text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl">
                  Chart Vision 3-tier + Risk panel + R:R Planner trong bản Free. Mua key Pro trọn đời để unlock Auto-Trade, Smart Manage và 8 tính năng tự động khác.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-400 hover:to-amber-300 text-zinc-950 font-bold px-6 py-3.5 shadow-lg shadow-orange-500/20 transition">
                    Mua Pro $50 — Trọn đời
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                  </a>
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:border-orange-400/40 hover:bg-white/[0.03] text-white font-bold px-6 py-3.5 transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Tải miễn phí
                  </a>
                </div>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-500">
                  <span className="inline-flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> 3 slot MT5/license</span>
                  <span className="inline-flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> HMAC SHA-256</span>
                  <span className="inline-flex items-center gap-1.5"><svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> 7-day offline grace</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-orange-400/30 transition">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-bold text-white">Auto-Trade</div>
                  <div className="text-xs text-zinc-500 mt-0.5">UT Bot + filter</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-orange-400/30 transition">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm font-bold text-white">Smart Manage</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Staged TP + trail</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-orange-400/30 transition">
                  <div className="text-2xl mb-2">🛡</div>
                  <div className="text-sm font-bold text-white">Spread Guard</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Auto-disarm spike</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-orange-400/30 transition">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm font-bold text-white">Chart Vision</div>
                  <div className="text-xs text-zinc-500 mt-0.5">3 tier overlay</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-orange-400/30 transition">
                  <div className="text-2xl mb-2">📲</div>
                  <div className="text-sm font-bold text-white">Telegram push</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Realtime event</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-orange-400/30 transition">
                  <div className="text-2xl mb-2">🖥</div>
                  <div className="text-sm font-bold text-white">Desktop Bridge</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Tauri app</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Brokers */}
        <section className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-300 mb-3">
                  ⭐ TOP PICKS 2026
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Top sàn được
                  <span className="bg-gradient-to-r from-orange-300 to-amber-500 bg-clip-text text-transparent"> HieuNTHUB </span>
                  tuyển chọn
                </h2>
                <p className="text-zinc-400 mt-2">Đánh giá độc lập từ team phân tích, không sponsor.</p>
              </div>
              <a href="#" className="hidden md:inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white">
                Xem tất cả 29+ sàn →
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group relative overflow-hidden rounded-2xl border border-orange-400/30 bg-gradient-to-b from-orange-500/10 to-amber-500/[0.02] hover:border-orange-400/60 hover:shadow-2xl hover:shadow-orange-500/20 transition flex flex-col">
                <div className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 text-zinc-950 px-2.5 py-1 text-[10px] font-bold z-10">#1 CHOICE</div>
                <a href="#" className="flex-1 block p-6">
                  <img src="https://hieunthub.co/uploads/brokers/logos/vt-markets-logo-v3.png" alt="VT Markets" className="h-14 w-14 rounded-xl object-cover shadow-lg shadow-orange-500/30" />
                  <h3 className="mt-4 font-extrabold text-lg text-white group-hover:text-orange-300 transition">VT Markets</h3>
                  <div className="mt-1 text-xs text-zinc-500">ASIC · CIMA · FSCA</div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 px-2 py-2">
                      <div className="text-zinc-500">Năm thành lập</div>
                      <div className="font-bold mt-0.5 text-white">2015</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-2 py-2">
                      <div className="text-emerald-300">Rebate</div>
                      <div className="font-bold mt-0.5 text-white">✓</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-amber-400">★★★★★★</span>
                    <span className="text-zinc-500">4.8 · đánh giá</span>
                  </div>
                </a>
                <div className="px-6 pb-5 -mt-2">
                  <button type="button" className="w-full rounded-lg border border-white/10 bg-white/5 hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300 px-3 py-2 text-xs font-semibold text-zinc-400 transition flex items-center justify-center gap-2">So sánh</button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-500/10 transition flex flex-col">
                <a href="#" className="flex-1 block p-6">
                  <img src="https://hieunthub.co/uploads/brokers/logos/01KNKNVFQ3XNQ4JNXTJP154PWK.webp" alt="Dupoin" className="h-14 w-14 rounded-xl object-cover" />
                  <h3 className="mt-4 font-extrabold text-lg text-white group-hover:text-orange-300 transition">Dupoin</h3>
                  <div className="mt-1 text-xs text-zinc-500">FCA · BAPPEBTI</div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 px-2 py-2">
                      <div className="text-zinc-500">Năm thành lập</div>
                      <div className="font-bold mt-0.5 text-white">2021</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-2 py-2">
                      <div className="text-emerald-300">Rebate</div>
                      <div className="font-bold mt-0.5 text-white">✓</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-amber-400">★★★★☆</span>
                    <span className="text-zinc-500">4.5 · đánh giá</span>
                  </div>
                </a>
                <div className="px-6 pb-5 -mt-2">
                  <button type="button" className="w-full rounded-lg border border-white/10 bg-white/5 hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300 px-3 py-2 text-xs font-semibold text-zinc-400 transition flex items-center justify-center gap-2">So sánh</button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-500/10 transition flex flex-col">
                <a href="#" className="flex-1 block p-6">
                  <img src="https://hieunthub.co/uploads/brokers/logos/01KJC1HBZDKDEMV3T7WCF03QBW.webp" alt="GTCFX" className="h-14 w-14 rounded-xl object-cover" />
                  <h3 className="mt-4 font-extrabold text-lg text-white group-hover:text-orange-300 transition">GTCFX</h3>
                  <div className="mt-1 text-xs text-zinc-500">FCA · ASIC · VFSC</div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 px-2 py-2">
                      <div className="text-zinc-500">Năm thành lập</div>
                      <div className="font-bold mt-0.5 text-white">2012</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-2 py-2">
                      <div className="text-emerald-300">Rebate</div>
                      <div className="font-bold mt-0.5 text-white">✓</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-amber-400">★★★★☆</span>
                    <span className="text-zinc-500">4.3 · đánh giá</span>
                  </div>
                </a>
                <div className="px-6 pb-5 -mt-2">
                  <button type="button" className="w-full rounded-lg border border-white/10 bg-white/5 hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300 px-3 py-2 text-xs font-semibold text-zinc-400 transition flex items-center justify-center gap-2">So sánh</button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-500/10 transition flex flex-col">
                <a href="#" className="flex-1 block p-6">
                  <img src="https://hieunthub.co/uploads/brokers/logos/01KJ4T0M44H5R139ZV71CV1W24.webp" alt="ETO Markets" className="h-14 w-14 rounded-xl object-cover" />
                  <h3 className="mt-4 font-extrabold text-lg text-white group-hover:text-orange-300 transition">ETO Markets</h3>
                  <div className="mt-1 text-xs text-zinc-500">ASIC · FSAS</div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-white/5 px-2 py-2">
                      <div className="text-zinc-500">Min deposit</div>
                      <div className="font-bold mt-0.5 text-white">$50</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-2 py-2">
                      <div className="text-emerald-300">Rebate</div>
                      <div className="font-bold mt-0.5 text-white">✓</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-amber-400">★★★★☆</span>
                    <span className="text-zinc-500">4.2 · đánh giá</span>
                  </div>
                </a>
                <div className="px-6 pb-5 -mt-2">
                  <button type="button" className="w-full rounded-lg border border-white/10 bg-white/5 hover:border-orange-400/40 hover:bg-orange-500/10 hover:text-orange-300 px-3 py-2 text-xs font-semibold text-zinc-400 transition flex items-center justify-center gap-2">So sánh</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why HieuNTHUB */}
        <section className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Vì sao chọn
                <span className="bg-gradient-to-r from-orange-300 to-amber-500 bg-clip-text text-transparent"> HieuNTHUB</span>?
              </h2>
              <p className="text-zinc-400 mt-3">Không phải affiliate ngẫu nhiên — HieuNTHUB audit từng sàn.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 hover:border-orange-400/40 transition">
                <div className="h-12 w-12 rounded-xl bg-orange-500/15 border border-orange-400/30 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <h3 className="font-bold text-xl text-white">Audit độc lập</h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">Mỗi sàn được team phân tích kiểm tra giấy phép, spread thực, lệch giá so với liquidity provider.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 hover:border-orange-400/40 transition">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="font-bold text-xl text-white">Rebate minh bạch</h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">Hoa hồng IB rõ từng sàn — bao nhiêu USD/lot, FTD, CPA, lifetime hay theo tier.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 hover:border-orange-400/40 transition">
                <div className="h-12 w-12 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="font-bold text-xl text-white">Hỗ trợ tiếng Việt</h3>
                <p className="mt-2 text-zinc-400 text-sm leading-relaxed">Team HH support cho anh em trader Việt qua Telegram 24/7.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Tìm sàn theo nhu cầu</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <a href="#" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center hover:border-orange-400/40 hover:bg-orange-500/5 transition">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-sm font-semibold text-white">Spread thấp</div>
              </a>
              <a href="#" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center hover:border-orange-400/40 hover:bg-orange-500/5 transition">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-sm font-semibold text-white">Rebate cao</div>
              </a>
              <a href="#" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center hover:border-orange-400/40 hover:bg-orange-500/5 transition">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-sm font-semibold text-white">CPA Lifetime</div>
              </a>
              <a href="#" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center hover:border-orange-400/40 hover:bg-orange-500/5 transition">
                <div className="text-3xl mb-2">🥇</div>
                <div className="text-sm font-semibold text-white">Vàng XAUUSD</div>
              </a>
              <a href="#" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center hover:border-orange-400/40 hover:bg-orange-500/5 transition">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="text-sm font-semibold text-white">Có giấy phép</div>
              </a>
              <a href="#" className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center hover:border-orange-400/40 hover:bg-orange-500/5 transition">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-sm font-semibold text-white">Cho người Việt</div>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-b border-white/5 bg-zinc-950 relative overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Trader Việt đang nói gì</h2>
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-zinc-300 italic">"HH list rebate rất rõ ràng, click 1 phát biết sàn nào trả bao nhiêu. Đỡ phải đi hỏi affiliate manager từng nơi."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-white">M</div>
                  <div>
                    <div className="font-semibold text-sm text-white">Minh Nguyễn</div>
                    <div className="text-xs text-zinc-500">IB · 3 năm</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-zinc-300 italic">"Audit của HH cứu mình khỏi 1 sàn scam — họ flag spread bất thường trước khi mình deposit lớn."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-white">L</div>
                  <div>
                    <div className="font-semibold text-sm text-white">Linh Trần</div>
                    <div className="text-xs text-zinc-500">Trader · scalper</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
                <div className="flex text-amber-400 mb-3">★★★★★</div>
                <p className="text-zinc-300 italic">"Page so sánh 2 sàn cạnh nhau là feature mình dùng nhiều nhất. Spread, rebate, đối tác — show 1 trang đủ luôn."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">T</div>
                  <div>
                    <div className="font-semibold text-sm text-white">Tuấn Phạm</div>
                    <div className="text-xs text-zinc-500">Trader · swing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA IB */}
        <section className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
            <div className="rounded-3xl border border-orange-400/30 bg-gradient-to-br from-orange-500/15 via-amber-500/5 to-transparent p-10 md:p-14 relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-3 py-1 text-xs font-bold text-orange-300 mb-4">
                    🎯 DÀNH CHO IB
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
                    Trở thành đối tác IB của
                    <span className="bg-gradient-to-r from-orange-300 to-amber-500 bg-clip-text text-transparent"> HieuNTHUB</span>
                  </h3>
                  <p className="mt-4 text-zinc-400">Nhận hoa hồng cao hơn rebate trực tiếp từ sàn — kèm portal quản lý lead, marketing assets, training video.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                  <a href="#" className="rounded-xl bg-gradient-to-r from-orange-400 to-amber-600 px-6 py-4 font-bold text-zinc-950 hover:from-orange-300 hover:to-amber-500 transition shadow-xl shadow-orange-500/30 text-center whitespace-nowrap">
                    Đăng ký IB ngay →
                  </a>
                  <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white hover:border-white/20 transition text-center whitespace-nowrap">
                    Xem cơ chế
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
