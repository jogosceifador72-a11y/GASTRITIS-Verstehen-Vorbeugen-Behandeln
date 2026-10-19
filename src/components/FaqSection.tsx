import React, { useState } from 'react';
import { FAQS } from '../data/ebookData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-gradient-to-b from-[#0D2217] via-[#123122] to-[#0A1D13] text-white border-t border-emerald-800/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Heading with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/70 text-emerald-200 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5 text-amber-300" />
            <span>Häufig gestellte Fragen</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight">
            Alles, was Sie vor dem Kauf wissen möchten
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base">
            Hier finden Sie direkte Antworten zu Format, Download, Zahlung und Inhalten.
          </p>
        </motion.div>

        {/* FAQs with Motion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-400 bg-gradient-to-r from-[#18422E] to-[#123323] shadow-xl shadow-black/40'
                    : 'border-emerald-500/30 bg-[#122E20]/70 hover:bg-[#153827]/80 shadow-md'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-white text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/30 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-emerald-100/90 leading-relaxed border-t border-emerald-500/20 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
