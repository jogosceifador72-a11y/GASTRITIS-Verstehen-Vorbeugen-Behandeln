import React from 'react';
import mockupImg from '../assets/images/mockup.jpg';
import { BookOpen, Check, Layers, Zap, HeartHandshake, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL, PRICE, CURRENCY } from '../data/ebookData';
import { motion } from 'motion/react';

export const WhatIsIt: React.FC = () => {
  return (
    <section id="was-ist-es" className="py-20 sm:py-28 bg-gradient-to-b from-[#0E2519] via-[#133022] to-[#0E261A] text-white relative overflow-hidden">
      
      {/* Ambient background illumination */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/60 text-emerald-200 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span>1. Was ist das?</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight">
            Kompaktes Wissen auf 30 Seiten – klar, direkt und alltagstauglich
          </h2>
          <p className="text-emerald-100/80 text-base sm:text-lg">
            Keine dicken Wälzer, keine akademischen Ausschweifungen. Ein praktischer Leitfaden, den Sie an einem Nachmittag durchlesen und sofort anwenden können.
          </p>
        </motion.div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-14 items-center">
          
          {/* Left Column: Device Mockup Image with Motion */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-400/40 bg-[#122A1E] group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
              
              <img
                src={mockupImg}
                alt="Gastritis E-Book auf Tablet und Smartphone mit Tee"
                className="w-full h-auto object-cover relative z-10 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A1A12]/90 backdrop-blur-md rounded-2xl p-3.5 text-white text-xs flex items-center justify-between border border-emerald-500/30 z-20 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-amber-300" />
                  <span className="font-medium text-emerald-100">30 Seiten optimiert für Handy, Tablet & PC</span>
                </div>
                <span className="font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-md border border-amber-400/30">
                  Sofort-PDF
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Breakdown with Motion */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="space-y-4 text-emerald-100/90 leading-relaxed text-sm sm:text-base">
              <p>
                Das E-Book <strong className="text-white">„Gastritis – Verstehen, Vorbeugen, Behandeln“</strong> ist ein praktischer PDF-Ratgeber, der auf 30 Seiten erklärt, was bei einer Magenschleimhautentzündung passiert, welche Ursachen dahinterstecken und welche ärztlichen Schritte sinnvoll sind.
              </p>
              <p>
                Ohne lange Theorie oder Fachchinesisch zeigt es Ihnen klar und einfach, wie Sie Ihre Beschwerden besser verstehen und im Alltag richtig handeln – <span className="font-semibold text-amber-300">in Ihrem ganz eigenen Tempo</span>.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-3.5 pt-2">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-gradient-to-r from-[#173B29] to-[#122F20] border border-emerald-500/30 shadow-lg shadow-black/20"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ohne Fachchinesisch</h4>
                  <p className="text-xs text-emerald-100/75 mt-0.5 leading-relaxed">
                    Komplexe biologische Vorgänge im Magen werden in verständlicher Sprache mit konkreten Beispielen erklärt.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-gradient-to-r from-[#173B29] to-[#122F20] border border-emerald-500/30 shadow-lg shadow-black/20"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">30 Seiten geballtes Praxiswissen</h4>
                  <p className="text-xs text-emerald-100/75 mt-0.5 leading-relaxed">
                    Schnell erfassbar, klar gegliedert und mit konkreten Handlungsanweisungen für Ihren Alltag.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-gradient-to-r from-[#173B29] to-[#122F20] border border-emerald-500/30 shadow-lg shadow-black/20"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-400/20 text-teal-300 border border-teal-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Sicherheit & Orientierung</h4>
                  <p className="text-xs text-emerald-100/75 mt-0.5 leading-relaxed">
                    Damit Sie beim nächsten Arztbesuch genau wissen, welche Fragen wichtig sind und was verordnet wird.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-3">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Jetzt für {PRICE} {CURRENCY} sichern und direkt lesen</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
