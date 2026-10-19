import React from 'react';
import { AlertCircle, Flame, HelpCircle, UtensilsCrossed, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';

export const PainPoints: React.FC = () => {
  const painItems = [
    {
      icon: Flame,
      title: 'Ständiges Brennen & Druckgefühl',
      description: 'Ein unangenehmes Drücken, Brennen im Oberbauch oder plötzliches Sodbrennen – besonders nach dem Essen oder nachts im Liegen.',
      accent: 'from-amber-500/20 to-orange-500/10'
    },
    {
      icon: HelpCircle,
      title: 'Quälende Ungewissheit',
      description: 'Ist es nur eine Reizung, eine Gastritis Typ A, B oder C oder droht ein Magengeschwür? Welche Symptome sind harmlos, welche gefährlich?',
      accent: 'from-teal-500/20 to-emerald-500/10'
    },
    {
      icon: UtensilsCrossed,
      title: 'Frust beim Essen & Verzicht',
      description: 'Ständige Angst vor der nächsten Mahlzeit. Man traut sich kaum noch etwas zu essen, weil man nicht weiß, was den Magen wirklich reizt.',
      accent: 'from-yellow-500/20 to-amber-500/10'
    },
    {
      icon: Stethoscope,
      title: 'Kurze Arztgespräche & Latein',
      description: 'Im Praxisalltag fehlt oft die Zeit für ausführliche Erklärungen. Sie erhalten Rezepte oder Befunde, verstehen aber die Zusammenhänge nicht.',
      accent: 'from-emerald-500/20 to-green-500/10'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#11291D] via-[#163828] to-[#0E2519] text-white relative overflow-hidden border-t border-emerald-800/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider shadow-sm">
            <AlertCircle className="w-3.5 h-3.5 text-amber-300" />
            <span>Kennen Sie diese Beschwerden?</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight">
            Wenn der Magen rebelliert und jeder Bissen zur Qual wird
          </h2>
          <p className="text-emerald-100/80 text-base sm:text-lg max-w-2xl mx-auto">
            Eine Magenschleimhautentzündung (Gastritis) betrifft Millionen Menschen. Doch die meisten leiden unnötig lange, weil ihnen einfache, verlässliche Orientierung fehlt.
          </p>
        </motion.div>

        {/* 4 Pain Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {painItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#1A3D2C]/90 to-[#122A1E]/95 border border-emerald-500/30 hover:border-emerald-400/60 shadow-xl shadow-black/30 transition-all flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Subtle top card glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-300 to-teal-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="w-13 h-13 rounded-2xl bg-[#0D2418] border border-emerald-500/30 text-amber-300 flex items-center justify-center mb-5 shadow-inner group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-300">
                    <Icon className="w-6 h-6 text-amber-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-emerald-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-emerald-100/75 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-emerald-800/50 text-xs text-amber-300/90 font-semibold flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> Im Ratgeber verständlich gelöst
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transitional Banner with Scroll Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#173F2B] via-[#1E5239] to-[#153B28] border-2 border-emerald-400/30 shadow-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white">
              Das muss nicht so bleiben: Holen Sie sich Ihren Magenfrieden zurück.
            </h3>
            <p className="text-emerald-100/90 text-sm max-w-2xl">
              Wenn Sie verstehen, was in Ihrer Magenschleimhaut vor sich geht, können Sie gezielt handeln – ohne Angst und ohne unnötiges Herumprobieren.
            </p>
          </div>
          <a
            href="#was-ist-es"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-900 font-bold text-sm hover:from-amber-300 hover:to-yellow-300 transition-all shadow-lg hover:shadow-amber-400/25 relative z-10 transform hover:scale-105 active:scale-95"
          >
            Lösung entdecken ↓
          </a>
        </motion.div>

      </div>
    </section>
  );
};
