import React, { useState } from 'react';
import { X, BookOpen, Download, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, PRICE, CURRENCY, CHAPTERS } from '../data/ebookData';
import coverImg from '../assets/images/cover.jpg';

interface SamplePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({ isOpen, onClose }) => {
  const [activePreviewTab, setActivePreviewTab] = useState<'toc' | 'excerpt1' | 'excerpt2'>('toc');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Modal Header */}
        <div className="bg-[#2D4536] text-white p-4 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#A3C9A8]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-editorial text-lg sm:text-xl font-bold leading-tight">
                Leseprobe & Inhaltsverzeichnis
              </h3>
              <p className="text-xs text-[#C9E0D0]">
                E-Book „Gastritis – Verstehen, Vorbeugen, Behandeln“ (30 Seiten PDF)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Vorschau schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-stone-100 p-2 border-b border-stone-200 flex items-center gap-1.5 overflow-x-auto shrink-0">
          <button
            onClick={() => setActivePreviewTab('toc')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activePreviewTab === 'toc'
                ? 'bg-white text-[#2D4536] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Inhaltsübersicht (6 Kapitel)
          </button>
          <button
            onClick={() => setActivePreviewTab('excerpt1')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activePreviewTab === 'excerpt1'
                ? 'bg-white text-[#2D4536] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Leseprobe: Was im Magen passiert
          </button>
          <button
            onClick={() => setActivePreviewTab('excerpt2')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activePreviewTab === 'excerpt2'
                ? 'bg-white text-[#2D4536] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Leseprobe: Die Warnzeichen-Ampel
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-stone-700 leading-relaxed text-sm">
          
          {activePreviewTab === 'toc' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-28 sm:w-36 shrink-0 rounded-xl overflow-hidden shadow-md border border-stone-200">
                  <img src={coverImg} alt="Cover" className="w-full h-auto object-cover" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#3E5C46]">
                    Vollständiges Inhaltsverzeichnis
                  </span>
                  <h4 className="font-editorial text-xl font-bold text-stone-900">
                    6 klar strukturierte Kapitel auf 30 Seiten
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Jedes Kapitel ist so konzipiert, dass Sie die Zusammenhänge schnell erfassen und direkt wissen, was im jeweiligen Stadium zu tun ist.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {CHAPTERS.map((ch) => (
                  <div key={ch.number} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#3E5C46] bg-white px-2 py-0.5 rounded border border-stone-200">
                        Kapitel {ch.number}
                      </span>
                      <strong className="text-stone-900 text-sm">{ch.title}</strong>
                    </div>
                    <p className="text-xs text-stone-500 mt-1 pl-1">
                      {ch.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activePreviewTab === 'excerpt1' && (
            <div className="space-y-4">
              <div className="border-l-4 border-[#3E5C46] pl-4 py-1">
                <span className="text-xs uppercase tracking-wider font-bold text-[#3E5C46]">
                  Auszug aus Kapitel 1
                </span>
                <h4 className="font-editorial text-xl font-bold text-stone-900">
                  Die Magenschleimhaut und ihre Schutzbarriere
                </h4>
              </div>

              <p className="text-sm">
                Der menschliche Magen ist ein echtes Hochleistungsorgan: Täglich produziert er bis zu zwei Liter stark sauren Magensaft. Dieser enthält Salzsäure mit einem pH-Wert zwischen 1 und 2 – sauer genug, um Krankheitserreger abzutöten und Nahrungseiweiße aufzuspalten.
              </p>

              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-emerald-950 text-xs sm:text-sm">
                <strong className="block text-emerald-900 mb-1">
                  Der entscheidende Schutzmechanismus:
                </strong>
                Damit sich der Magen nicht selbst verdaut, ist seine Innenwand mit einer dicken, schützenden Schleimschicht (Mukosa) und Bikarbonat ausgekleidet. Eine Gastritis entsteht immer dann, wenn dieses feine Gleichgewicht zwischen <em>aggressiver Magensäure</em> und <em>schützender Schleimhaut</em> gestört wird.
              </div>

              <p className="text-sm text-stone-600">
                Im weiteren Verlauf des Kapitels lernen Sie genau, was die Schutzschicht schwächt und wie Sie ihr die nötige Zeit und Ruhe zur Regeneration geben können...
              </p>
            </div>
          )}

          {activePreviewTab === 'excerpt2' && (
            <div className="space-y-4">
              <div className="border-l-4 border-amber-600 pl-4 py-1">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-700">
                  Auszug aus Kapitel 3
                </span>
                <h4 className="font-editorial text-xl font-bold text-stone-900">
                  Warnzeichen-Ampel: Wann müssen Sie sofort zum Arzt?
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-xs font-bold text-emerald-900 uppercase">
                    Grün: Typische Beschwerden
                  </span>
                  <ul className="text-xs text-stone-700 mt-2 space-y-1.5 list-disc list-inside">
                    <li>Druckgefühl im Oberbauch nach dem Essen</li>
                    <li>Leichte Übelkeit am Morgen</li>
                    <li>Häufiges saures Aufstoßen</li>
                    <li>Frühzeitiges Völlegefühl</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                  <span className="text-xs font-bold text-rose-900 uppercase">
                    Rot: Alarmsignale (Sofort zum Arzt!)
                  </span>
                  <ul className="text-xs text-rose-950 mt-2 space-y-1.5 list-disc list-inside font-medium">
                    <li>Teerstuhl (schwarzer, glänzender Stuhl)</li>
                    <li>Kaffeesatzartiges Erbrechen oder Bluterbrechen</li>
                    <li>Plötzlicher, stechender Vernichtungsschmerz</li>
                    <li>Ungewollter rapider Gewichtsverlust</li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-stone-500 italic">
                Dieser Auszug vermittelt Ihnen die lebenswichtige Unterscheidung, um unnötige Panik zu vermeiden und im Ernstfall ohne Verzögerung die richtige medizinische Hilfe in Anspruch zu nehmen.
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Vollständiger Ratgeber (30 Seiten) für nur <strong>{PRICE} {CURRENCY}</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-medium hover:bg-stone-100 transition-colors"
            >
              Schließen
            </button>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2F4D38] hover:bg-[#233A2A] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
            >
              <span>Jetzt für {PRICE} {CURRENCY} freischalten</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
