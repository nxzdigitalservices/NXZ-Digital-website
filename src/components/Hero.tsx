import React from 'react';
import { ArrowDown, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { useProperties } from '../context/PropertyContext';

export const Hero: React.FC<{ onExploreClick: () => void }> = ({ onExploreClick }) => {
  const { properties } = useProperties();

  return (
    <section className="relative w-full bg-neutral-950 text-white overflow-hidden">
      {/* Background Photography with High-Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-hyderabad.jpg"
          alt="Luxury penthouse view over Hyderabad skyline"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Measured Contrast Scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-20 sm:pb-16 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          {/* Natural human editorial kicker */}
          <div className="flex items-start sm:items-center gap-2 text-[11px] sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-3 sm:mb-4">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
            <span>HYDERABAD REAL ESTATE · EXCLUSIVE PORTFOLIO BY NXZ DIGITAL · TS RERA VERIFIED</span>
          </div>

          {/* Headline with text-wrap: balance */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-5 sm:mb-6 text-balance">
            Hyderabad’s Premier Real Estate Portfolio
          </h1>

          {/* Concrete Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl text-balance">
            Curated high-rise apartments, sky villas, and master-planned townships across Neopolis Kokapet, Tellapur, Gachibowli, and Shamshabad. Sourced directly from verified developer filings with transparent pricing.
          </p>

          {/* Action Points */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12">
            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20 cursor-pointer"
            >
              <span>Explore All Properties</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919603155571?text=Hello%2C%20I%20am%20looking%20for%20luxury%20properties%20in%20Hyderabad.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Clean Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              Direct Developer Pricing
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Zero Brokerage Fees</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Official Brochures & Price Sheets</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Escrow Compliant Handover</span>
          </div>
        </div>

        {/* 4-Column Proof & KPI Strip Placed in a Clean Full-Width Row */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {properties.length}+ Projects
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Curated Active Inventory
            </div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
              ₹52 L – ₹14 Cr+
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Apartments, Villas, Plots & Offices
            </div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
              100% TS RERA
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Sanctioned Master Plans & Permits
            </div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
              12 Prime Corridors
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Neopolis, Kokapet, Tellapur & Airport
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
