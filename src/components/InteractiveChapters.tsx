import React, { useState } from 'react';
import { CHAPTERS, CHECKOUT_URL, PRICE, CURRENCY } from '../data/ebookData';
import { BookOpen, Check, ChevronDown, ChevronUp, FileText, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveChaptersProps {
  onOpenPreview: () => void;
}

export const InteractiveChapters: React.FC<InteractiveChaptersProps> = ({ onOpenPreview }) => {
  const [openChapter, setOpenChapter] = useState<number | null>(0);

  const toggleChapter = (index: number) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  return (
    <section id="inhaltsverzeichnis" className="py-20 sm:py-28 bg-gradient-to-b from-[#0E271B] via-[#143725] to-[#0E2519] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/70 text-emerald-200 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-md">
            <FileText className="w-3.5 h-3.5 text-amber-300" />
            <span>Strukturierter Aufbau</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight">
            Blick in die 30 Seiten: Was Sie Kapitel für Kapitel lernen
          </h2>
          <p className="text-emerald-100/80 text-base sm:text-lg">
            Klar gegliedert, medizinisch fundiert aufbereitet und sofort im täglichen Leben umsetzbar.
          </p>
        </motion.div>

        {/* Chapters Accordion / Card List with Motion */}
        <div className="mt-14 max-w-4xl mx-auto space-y-4">
          {CHAPTERS.map((chapter, idx) => {
            const isOpen = openChapter === idx;
            return (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-gradient-to-r from-[#18422E] to-[#123323] border-emerald-400 shadow-xl shadow-black/40 ring-1 ring-emerald-400/40'
                    : 'bg-[#133022]/80 hover:bg-[#183B2A]/90 border-emerald-500/30 shadow-md'
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleChapter(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-md">
                      {chapter.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg leading-snug">
                        {chapter.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-200/70 font-normal mt-0.5">
                        {chapter.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="text-xs text-amber-300/80 font-medium hidden sm:inline">
                      {isOpen ? 'Schließen' : 'Vorschau öffnen'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/30 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Accordion Body with Motion */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-emerald-500/20 text-left overflow-hidden"
                    >
                      <p className="text-sm text-emerald-100/90 leading-relaxed bg-[#0B2015]/60 p-4 rounded-xl border border-emerald-500/20 mb-4">
                        {chapter.summary}
                      </p>

                      <div>
                        <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Wichtige Erkenntnisse in diesem Kapitel:</span>
                        </h4>
                        <ul className="space-y-2">
                          {chapter.takeaways.map((takeaway, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100/90">
                              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Buttons underneath with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={onOpenPreview}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-400/50 bg-[#163D2B] hover:bg-[#1B4B34] text-white text-sm font-semibold shadow-md transition-all transform hover:scale-105"
          >
            <Eye className="w-4 h-4 text-amber-300" />
            <span>Interaktive Leseprobe ansehen</span>
          </button>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-sm font-bold shadow-lg shadow-emerald-900/50 transition-all transform hover:scale-105"
          >
            <span>Komplettes E-Book für {PRICE} {CURRENCY} freischalten</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
