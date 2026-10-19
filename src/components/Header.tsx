import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL, PRICE, CURRENCY } from '../data/ebookData';
import { BookOpen, Sparkles, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar with Radiant Emerald & Amber Glow */}
      <div className="bg-gradient-to-r from-[#0C2417] via-[#16432B] to-[#0C2417] text-[#D1F2D9] text-xs sm:text-sm py-2.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-emerald-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent animate-pulse" />
        <span className="relative z-10 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-400/20 text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
          </span>
          <span>
            <strong>Sofortiger digitaler PDF-Download</strong> · Lieferung per E-Mail direkt nach Zahlungsbestätigung
          </span>
          <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
            Nur {PRICE} {CURRENCY}
          </span>
        </span>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0E251A]/95 backdrop-blur-md shadow-xl border-b border-emerald-500/20'
            : 'bg-[#10291D]/90 backdrop-blur-sm border-b border-emerald-800/30'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo / Book Brand */}
          <a href="#" className="flex items-center gap-3 group text-left">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center shadow-lg shadow-emerald-900/40 group-hover:scale-105 group-hover:shadow-emerald-500/30 transition-all duration-300">
              <BookOpen className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <span className="block font-editorial font-bold text-lg sm:text-xl text-white leading-tight group-hover:text-emerald-300 transition-colors">
                GASTRITIS
              </span>
              <span className="block text-[11px] sm:text-xs text-emerald-200/70 font-sans tracking-wide">
                Verstehen · Vorbeugen · Behandeln
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-emerald-100/80">
            <a href="#was-ist-es" className="hover:text-emerald-300 transition-colors">
              Was ist das?
            </a>
            <a href="#loesungen" className="hover:text-emerald-300 transition-colors">
              Was löst es?
            </a>
            <a href="#inhaltsverzeichnis" className="hover:text-emerald-300 transition-colors">
              Inhaltsverzeichnis
            </a>
            <a href="#fuer-wen" className="hover:text-emerald-300 transition-colors">
              Für wen?
            </a>
            <a href="#faq" className="hover:text-emerald-300 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-900/50 hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shine-effect"
            >
              <span>E-Book sichern</span>
              <span className="bg-black/25 px-1.5 py-0.5 rounded text-[11px] font-bold text-amber-200 tracking-wide border border-amber-300/30">
                {PRICE} {CURRENCY}
              </span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline text-emerald-100" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-emerald-200 hover:bg-emerald-900/50 transition-colors"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0D2217] border-b border-emerald-800/50 px-6 py-5 space-y-3"
            >
              <a
                href="#was-ist-es"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-emerald-100/90 hover:text-emerald-300 font-medium text-sm"
              >
                Was ist das?
              </a>
              <a
                href="#loesungen"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-emerald-100/90 hover:text-emerald-300 font-medium text-sm"
              >
                Was löst es?
              </a>
              <a
                href="#inhaltsverzeichnis"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-emerald-100/90 hover:text-emerald-300 font-medium text-sm"
              >
                Inhaltsverzeichnis (30 Seiten)
              </a>
              <a
                href="#fuer-wen"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-emerald-100/90 hover:text-emerald-300 font-medium text-sm"
              >
                Für wen ist es?
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-emerald-100/90 hover:text-emerald-300 font-medium text-sm"
              >
                Häufige Fragen (FAQ)
              </a>
              <div className="pt-2">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-lg"
                >
                  <span>Jetzt für {PRICE} {CURRENCY} herunterladen</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
