/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { WhatIsIt } from './components/WhatIsIt';
import { WhatItSolves } from './components/WhatItSolves';
import { InteractiveChapters } from './components/InteractiveChapters';
import { AudienceTarget } from './components/AudienceTarget';
import { DeliverySpecs } from './components/DeliverySpecs';
import { OfferPricing } from './components/OfferPricing';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PurchaseNotification } from './components/PurchaseNotification';
import { SamplePreviewModal } from './components/SamplePreviewModal';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 font-sans selection:bg-[#3E5C46]/20 selection:text-[#233A2A]">
      {/* Sticky Header with Notification Banner */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* Empathy & Pain Points */}
        <PainPoints />

        {/* 1. Was ist das? */}
        <WhatIsIt />

        {/* 2. Was löst es? */}
        <WhatItSolves />

        {/* Table of Contents / Chapters */}
        <InteractiveChapters onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* 3. Für wen ist es? (Audience Comparison) */}
        <AudienceTarget />

        {/* Delivery Specifications & Format */}
        <DeliverySpecs />

        {/* Pricing Offer & Hotmart Checkout */}
        <OfferPricing />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* Footer with Contact Buttons & Disclaimers */}
      <Footer />

      {/* Live Purchase Confirmed Notification in Bottom-Left Corner (Without names) */}
      <PurchaseNotification />

      {/* Interactive Sample & TOC Modal */}
      <SamplePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </div>
  );
}
