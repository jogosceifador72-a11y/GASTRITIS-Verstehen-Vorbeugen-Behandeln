import React from 'react';
import { CORE_SOLUTIONS, CHECKOUT_URL, PRICE, CURRENCY } from '../data/ebookData';
import { CheckCircle2, ShieldCheck, ArrowRight, AlertTriangle, HelpCircle, BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const WhatItSolves: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5 text-teal-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <section id="loesungen" className="py-20 sm:py-28 bg-gradient-to-b from-[#0D2418] via-[#143926] to-[#0E271B] text-white relative overflow-hidden border-t border-emerald-800/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/70 text-emerald-200 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-md">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>2. Was löst es?</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight">
            Dieses E-Book räumt die 4 häufigsten Hürden aus dem Weg
          </h2>
          <p className="text-emerald-100/80 text-base sm:text-lg">
            Schluss mit Verwirrung und vergeblichen Diät-Experimenten. Hier erhalten Sie erprobte Antworten auf die drängendsten Fragen.
          </p>
        </motion.div>

        {/* 4 Solutions Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {CORE_SOLUTIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#183F2B]/90 to-[#102C1E]/95 border border-emerald-500/30 hover:border-emerald-400/60 shadow-xl shadow-black/30 relative overflow-hidden group"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B2115] shadow-inner border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <div className="space-y-3.5 flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      Hürde {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-emerald-200 transition-colors">
                    {item.title}
                  </h3>

                  {/* Problem state */}
                  <div className="p-3.5 rounded-xl bg-black/30 border border-amber-500/25 text-xs text-amber-200/90 leading-relaxed">
                    <strong className="block text-amber-300 mb-0.5">Das Problem bisher:</strong>
                    {item.problem}
                  </div>

                  {/* Solution state */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-emerald-900/40 border border-emerald-500/40 text-xs sm:text-sm text-emerald-100 space-y-1.5 shadow-inner">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Was dieses E-Book für Sie löst:</span>
                    </div>
                    <p className="leading-relaxed pl-5 text-emerald-100/90">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big End Result Highlight Box with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 p-7 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1C4B33] via-[#215E3F] to-[#15402A] text-white shadow-2xl border-2 border-emerald-400/40 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Ihr greifbares Endergebnis nach der Lektüre</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Sie wissen genau, wie eine Gastritis diagnostiziert und behandelt wird – und was Sie selbst zur Vorbeugung tun können.
            </h3>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Sie gehen mit Ruhe und Gewissheit an Mahlzeiten und Arzttermine heran, schützen Ihre Magenschleimhaut im Alltag effektiv und vermeiden schmerzhafte Rückfälle.
            </p>
            <div className="pt-3">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-stone-900 font-bold text-sm sm:text-base shadow-xl hover:shadow-amber-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Jetzt E-Book für {PRICE} {CURRENCY} sichern</span>
                <ArrowRight className="w-5 h-5 text-stone-900" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
