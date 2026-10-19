import React from 'react';
import { AUDIENCE_YES, AUDIENCE_NO, CHECKOUT_URL, PRICE, CURRENCY } from '../data/ebookData';
import { CheckCircle2, XCircle, Users, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const AudienceTarget: React.FC = () => {
  return (
    <section id="fuer-wen" className="py-20 sm:py-28 bg-gradient-to-b from-[#0E2519] via-[#163E2B] to-[#0F281C] text-white relative overflow-hidden border-t border-emerald-800/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/70 text-emerald-200 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-md">
            <Users className="w-3.5 h-3.5 text-amber-300" />
            <span>3. Zielgruppe & Orientierung</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight">
            Ist dieser Gastritis-Ratgeber das Richtige für Sie?
          </h2>
          <p className="text-emerald-100/80 text-base sm:text-lg">
            Wir möchten, dass Sie genau die Hilfe bekommen, die Sie wirklich brauchen. Deshalb ist dieser Ratgeber ganz bewusst für bestimmte Bedürfnisse geschrieben.
          </p>
        </motion.div>

        {/* 2 Comparison Cards with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 items-stretch">
          
          {/* Card 1: FÜR SIE (Vibrant Emerald Glow) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#1C4731] via-[#183E2B] to-[#123122] border-2 border-emerald-400/60 shadow-2xl shadow-black/40 flex flex-col justify-between text-left relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-100" />
                <span>Dieser Ratgeber ist perfekt für Sie, wenn:</span>
              </div>

              <ul className="space-y-4">
                {AUDIENCE_YES.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-emerald-100">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/30">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-emerald-500/30 text-xs text-amber-300 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>100% maßgeschneidert auf Ihre Entlastung und Klarheit</span>
            </div>
          </motion.div>

          {/* Card 2: NICHT FÜR SIE (Muted Charcoal/Warm Contrast) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#16281F]/90 via-[#102018]/90 to-[#0C1912]/95 border border-emerald-800/40 shadow-xl shadow-black/40 flex flex-col justify-between text-left"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 text-stone-300 border border-white/10 text-xs font-bold uppercase tracking-wider mb-6">
                <XCircle className="w-4 h-4 text-stone-400" />
                <span>Nicht für Sie geeignet, wenn:</span>
              </div>

              <ul className="space-y-4">
                {AUDIENCE_NO.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-stone-300">
                    <div className="w-5 h-5 rounded-full bg-stone-800 text-stone-400 flex items-center justify-center shrink-0 mt-0.5 border border-stone-700">
                      <XCircle className="w-4 h-4 text-stone-400" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-stone-800 text-xs text-stone-400">
              Ehrliche Transparenz spart Zeit: Kein Scheinversprechen, sondern echte Praxis.
            </div>
          </motion.div>

        </div>

        {/* Callout below with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center space-y-4"
        >
          <p className="text-emerald-100 text-base sm:text-lg">
            Erkennen Sie sich in den Punkten wieder? Dann machen Sie jetzt den ersten Schritt.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-950/60 hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5"
          >
            <span>Jetzt Ratgeber für {PRICE} {CURRENCY} freischalten</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
