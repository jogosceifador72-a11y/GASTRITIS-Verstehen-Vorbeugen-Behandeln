import React from 'react';
import { CHECKOUT_URL, PRICE, ORIGINAL_PRICE, CURRENCY } from '../data/ebookData';
import { CheckCircle2, ShieldCheck, Download, ArrowRight, Sparkles, Lock, CreditCard, Flame } from 'lucide-react';
import coverImg from '../assets/images/cover.jpg';
import { motion } from 'motion/react';

export const OfferPricing: React.FC = () => {
  const inclusions = [
    'Das komplette 30-Seiten E-Book als PDF',
    'Schritt-für-Schritt Erklärung: Was im Magen wirklich passiert',
    'Ursachen-Check: Helicobacter pylori, Schmerzmittel & Stress',
    'Warnzeichen-Katalog: Wann Sie sofort zum Arzt müssen',
    'Praxiserprobte magenfreundliche Ernährungsrichtlinien',
    'Lebensmittel-Tipps: Was beruhigt, was reizt die Schleimhaut',
    'Sofortiger Download per E-Mail nach dem Kauf',
    'Kompatibel mit allen Geräten (Handy, Tablet, Laptop & PC)'
  ];

  return (
    <section id="preis" className="py-20 sm:py-32 bg-gradient-to-b from-[#102B1D] via-[#163E2B] to-[#0D2217] text-white relative overflow-hidden border-t border-emerald-800/40">
      
      {/* Radiant Glowing Ambient Beams */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/15 rounded-full blur-[150px] pointer-events-none animate-ambient-slow" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none animate-ambient-fast" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Heading with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-900 text-xs font-black uppercase tracking-wider shadow-lg">
            <Flame className="w-4 h-4 text-stone-900" />
            <span>Jetzt handeln & Beschwerden lindern</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Sichern Sie sich Ihren Gastritis-Ratgeber
          </h2>
          <p className="text-emerald-100/90 text-base max-w-xl mx-auto">
            Geben Sie Ihrem Magen die Chance auf Erholung. Für weniger als ein durchschnittlicher Restaurantbesuch erhalten Sie verlässliches Wissen für ein beschwerdefreies Leben.
          </p>
        </motion.div>

        {/* Pricing Card with Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-gradient-to-br from-[#1C4631] via-[#173A29] to-[#102A1E] border-2 border-emerald-400/50 shadow-2xl shadow-black/60 overflow-hidden relative"
        >
          {/* Top highlight bar */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white py-3.5 px-6 text-center text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 border-b border-emerald-400/30">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Aktions-Angebot · Nur für begrenzte Zeit zum Einführungspreis von {PRICE} {CURRENCY}</span>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Visual & Price */}
              <div className="lg:col-span-5 text-center flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  className="w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border-2 border-emerald-400/40 mb-6 transform -rotate-2 transition-transform duration-300"
                >
                  <img
                    src={coverImg}
                    alt="E-Book Cover"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                <div className="space-y-1.5">
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-300">
                    Einmalige Zahlung · Kein Abo
                  </span>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {PRICE} {CURRENCY}
                    </span>
                    <span className="text-lg sm:text-xl text-emerald-300/40 line-through">
                      {ORIGINAL_PRICE} {CURRENCY}
                    </span>
                  </div>
                  <span className="inline-block text-xs font-bold text-stone-900 bg-gradient-to-r from-amber-300 to-yellow-400 px-3 py-1 rounded-full shadow-md mt-1">
                    Sie sparen fast 40%
                  </span>
                </div>
              </div>

              {/* Right Column: Inclusions & CTA */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white">
                  Das ist alles für Sie enthalten:
                </h3>

                <ul className="space-y-3">
                  {inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-emerald-100">
                      <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/30">
                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Big Button with Shine & Hover */}
                <div className="pt-4 space-y-3.5">
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-stone-900 font-black text-base sm:text-lg shadow-2xl shadow-amber-400/30 hover:shadow-amber-400/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center shine-effect"
                  >
                    <Download className="w-5 h-5 text-stone-900" />
                    <span>Jetzt für nur {PRICE} {CURRENCY} freischalten</span>
                    <ArrowRight className="w-5 h-5 text-stone-900" />
                  </a>

                  {/* Trust guarantees */}
                  <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-emerald-200/80 gap-2 pt-1 border-t border-emerald-500/20">
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Sichere 256-Bit SSL Verschlüsselung</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Offizielle Abwicklung über Hotmart</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                      <span>PayPal, Karte, Klarna & mehr</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
