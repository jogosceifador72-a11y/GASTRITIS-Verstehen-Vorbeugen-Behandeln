import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, X, Sparkles, Download } from 'lucide-react';
import { PURCHASE_NOTIFICATIONS } from '../data/ebookData';

export const PurchaseNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial appearance after 4 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    let timer: NodeJS.Timeout;

    if (isVisible) {
      // Stay visible for 5.5 seconds
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 5500);
    } else {
      // Stay hidden for 7 seconds before showing next
      timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PURCHASE_NOTIFICATIONS.length);
        setIsVisible(true);
      }, 7000);
    }

    return () => clearTimeout(timer);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const currentNotification = PURCHASE_NOTIFICATIONS[currentIndex];

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="bg-white/95 backdrop-blur-md border border-[#CCD8CF] shadow-xl rounded-2xl p-3.5 sm:p-4 max-w-[320px] sm:max-w-[350px] flex items-start gap-3 relative text-left ring-1 ring-black/5">
        
        {/* Verified Icon with Pulsing Dot */}
        <div className="relative shrink-0 mt-0.5">
          <div className="w-10 h-10 rounded-xl bg-[#E8F0EA] text-[#2F4D38] flex items-center justify-center shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-[#2F4D38]" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </div>

        {/* Text Content: Strictly No Personal Names */}
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="inline-block text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Kauf bestätigt
            </span>
            <span className="text-[10px] text-stone-400 font-medium">
              • {currentNotification.time}
            </span>
          </div>

          <p className="text-xs font-bold text-stone-900 leading-snug">
            {currentNotification.text}
          </p>

          <p className="text-[11px] text-stone-500 mt-0.5 leading-tight truncate">
            {currentNotification.subtext}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2.5 right-2.5 text-stone-400 hover:text-stone-700 p-1 rounded-md transition-colors"
          aria-label="Benachrichtigung schließen"
        >
          <X className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
