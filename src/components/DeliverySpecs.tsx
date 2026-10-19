import React from 'react';
import { Smartphone, Mail, AlertCircle, Laptop, Tablet, Download, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const DeliverySpecs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0F281C] via-[#143725] to-[#102B1D] text-white border-y border-emerald-800/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Box 1: Format */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#183F2B] to-[#112D1F] border border-emerald-500/30 shadow-xl shadow-black/30 flex items-start gap-4 text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Download className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-300 block mb-1">
                Format
              </span>
              <h3 className="font-bold text-white text-base mb-1">
                Universelles PDF
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                Lesbar auf Smartphone, Tablet, PC, Mac oder E-Reader. Auch bequem zum Ausdrucken geeignet.
              </p>
              <div className="flex items-center gap-2.5 mt-3.5 text-emerald-300">
                <Smartphone className="w-4 h-4" />
                <Tablet className="w-4 h-4" />
                <Laptop className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Box 2: Lieferung */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#183F2B] to-[#112D1F] border border-emerald-500/30 shadow-xl shadow-black/30 flex items-start gap-4 text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-300 block mb-1">
                Lieferung
              </span>
              <h3 className="font-bold text-white text-base mb-1">
                Sofortiger digitaler Zugang
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                Direkt per E-Mail nach Zahlungsbestätigung. Keine Wartezeiten, kein lästiger Postversand.
              </p>
              <div className="flex items-center gap-1.5 mt-3.5 text-xs font-semibold text-emerald-300">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>24/7 Sofortfreischaltung</span>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Rechtlicher Hinweis */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.24 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#1E3025] to-[#14231A] border border-amber-400/30 shadow-xl shadow-black/30 flex items-start gap-4 text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <AlertCircle className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-300 block mb-1">
                Wichtiger Hinweis
              </span>
              <h3 className="font-bold text-white text-base mb-1">
                Medizinische Transparenz
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                Dieser Ratgeber ersetzt keine ärztliche Beratung oder Behandlung. Er dient als Orientierungshilfe zur Unterstützung im Alltag.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
