import React from 'react';
import { CHECKOUT_URL, PRICE, ORIGINAL_PRICE, CURRENCY } from '../data/ebookData';
import { ArrowRight, CheckCircle2, ShieldCheck, Download, Smartphone, Clock, Eye, Sparkles, Star } from 'lucide-react';
import coverImg from '../assets/images/cover.jpg';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#0E251A] via-[#143525] to-[#11291D] text-white">
      
      {/* Dynamic Animated Ambient Glowing Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none animate-ambient-slow" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none animate-ambient-fast" />
      <div className="absolute -bottom-10 left-10 w-[380px] h-[380px] bg-teal-500/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle organic grid/texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Sales Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Top Tagline / Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-medium shadow-lg backdrop-blur-md"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              </span>
              <span className="font-semibold text-emerald-100">Praktischer 30-Seiten PDF-Ratgeber für Magenfrieden</span>
              <span className="hidden sm:inline text-amber-300 font-bold">• Sofort-Zugang</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.16]"
            >
              GASTRITIS – <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent italic font-normal">
                Verstehen, Vorbeugen,
              </span> Behandeln
            </motion.h1>

            {/* Subheadline from Product Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-xl font-normal"
            >
              Der verständliche Ratgeber, mit dem Sie Ursachen, Warnzeichen und Behandlung Ihrer Gastritis 
              <span className="font-semibold text-white"> sicher einordnen</span>. Ohne lange Theorie, ohne Fachchinesisch – Schritt für Schritt im eigenen Tempo.
            </motion.p>

            {/* Core Value Checkmarks */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-emerald-100/90 text-sm"
            >
              <div className="flex items-center gap-2.5 bg-[#18392B]/60 backdrop-blur-xs p-2.5 rounded-xl border border-emerald-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium">30 Seiten kompaktes Praxiswissen</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#18392B]/60 backdrop-blur-xs p-2.5 rounded-xl border border-emerald-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium">Warnzeichen & Auslöser sofort erkennen</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#18392B]/60 backdrop-blur-xs p-2.5 rounded-xl border border-emerald-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium">Magenfreundliche Ernährung im Alltag</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#18392B]/60 backdrop-blur-xs p-2.5 rounded-xl border border-emerald-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium">Direkter Download per E-Mail</span>
              </div>
            </motion.div>

            {/* Pricing Box & CTA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="pt-4 p-5 sm:p-6 bg-gradient-to-br from-[#183E2D]/90 via-[#1A4532]/80 to-[#122F22]/90 backdrop-blur-md rounded-2xl border-2 border-emerald-400/30 shadow-2xl shadow-black/40 space-y-4"
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold block">
                    Aktionspreis (Einmalig)
                  </span>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {PRICE} {CURRENCY}
                    </span>
                    <span className="text-base text-emerald-300/50 line-through">
                      {ORIGINAL_PRICE} {CURRENCY}
                    </span>
                    <span className="text-xs font-bold text-amber-900 bg-gradient-to-r from-amber-300 to-yellow-300 px-2.5 py-0.5 rounded-full shadow-xs">
                      Sofort verfügbar
                    </span>
                  </div>
                </div>

                <div className="text-right text-xs text-emerald-200/80 flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/5">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>Kein Abo · Lebenslanger Zugriff</span>
                </div>
              </div>

              {/* High-Converting CTA Button with Shine & Pulse */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base shadow-xl shadow-emerald-900/60 hover:shadow-emerald-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shine-effect"
                >
                  <Download className="w-5 h-5 text-emerald-100" />
                  <span>Jetzt E-Book für {PRICE} {CURRENCY} herunterladen</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenPreview}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-900/40 hover:bg-emerald-900/70 text-emerald-100 font-medium text-sm transition-all hover:border-emerald-400"
                >
                  <Eye className="w-4 h-4 text-emerald-300" />
                  <span>Leseprobe ansehen</span>
                </button>
              </div>

              {/* Safe Payment Guarantee Bar */}
              <div className="pt-2 border-t border-emerald-500/20 flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-emerald-200/80 gap-y-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sicherer 256-Bit SSL Checkout über <strong>Hotmart</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-emerald-300" />
                  <span>Kompatibel mit Smartphone, Tablet & PC</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Book Cover Presentation with Motion */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative group cursor-pointer" onClick={onOpenPreview}>
              
              {/* Backglow Aura */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/40 via-teal-400/30 to-amber-400/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse-glow" />

              {/* Book Stand Shadow */}
              <motion.div 
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="w-[270px] sm:w-[320px] md:w-[350px] rounded-2xl overflow-hidden shadow-2xl shadow-black/70 border-4 border-emerald-400/40 group-hover:border-emerald-300 transition-all duration-500">
                  <img
                    src={coverImg}
                    alt="Gastritis – Verstehen, Vorbeugen, Behandeln E-Book Cover"
                    className="w-full h-auto object-cover block"
                  />
                </div>

                {/* Spine Depth Illusion */}
                <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent pointer-events-none rounded-l-md" />

                {/* Floating Click to Preview Tag */}
                <div className="absolute bottom-4 right-4 bg-emerald-950/90 hover:bg-black text-white text-xs px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xl border border-emerald-400/40 flex items-center gap-1.5 transition-transform group-hover:scale-105">
                  <Eye className="w-3.5 h-3.5 text-amber-300" />
                  <span className="font-medium">Vorschau anklicken</span>
                </div>

                {/* Format Tag */}
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-900 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-amber-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-stone-900" />
                  <span>30 Seiten PDF</span>
                </div>
              </motion.div>

              {/* Floor Shadow */}
              <div className="w-[85%] h-7 mx-auto mt-5 bg-black/60 rounded-[100%] blur-lg" />
            </div>

            {/* Quick Caption Under Book */}
            <p className="text-xs text-emerald-200/70 mt-2 text-center max-w-xs">
              Offizielles deutsches E-Book · Sofortiger PDF-Download nach dem Kauf über Hotmart
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
