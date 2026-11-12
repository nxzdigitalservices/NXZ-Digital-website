import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Lock } from 'lucide-react';
import { useProperties } from '../context/PropertyContext';

export const Footer: React.FC = () => {
  const { setIsAdminPortalOpen, isAdmin } = useProperties();

  return (
    <footer className="w-full bg-neutral-950 text-neutral-400 border-t border-neutral-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Trust */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 text-amber-400 flex items-center justify-center font-bold text-sm tracking-wider">
                NXZ
              </div>
              <span className="font-display font-extrabold text-base tracking-tight text-white">
                HYDERABAD <span className="text-amber-500 font-semibold">REAL ESTATE</span>
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Hyderabad’s dedicated luxury real estate platform showcasing verified high-rise apartments, sky villas, and master-planned townships sourced directly from nxzdigital.com.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>TS RERA Registered Project Showcase · NXZ Digital</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-300 text-[11px]">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#properties" className="hover:text-white transition-colors">
                  All Projects
                </a>
              </li>
              <li>
                <a href="#emi-calc" className="hover:text-white transition-colors">
                  EMI Calculator
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs & Buying Guide
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Top Locations */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-300 text-[11px]">
              Key Corridors
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Kokapet & Neopolis</li>
              <li>Financial District & Nanakramguda</li>
              <li>Narsingi & Tellapur</li>
              <li>Gachibowli</li>
              <li>Shamshabad & Tukkuguda</li>
            </ul>
          </div>

          {/* Direct Advisory */}
          <div className="space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-neutral-300 text-[11px]">
              Advisory Desk
            </h4>
            <div className="space-y-2 text-neutral-400">
              <div>
                <a href="tel:+919603155571" className="hover:text-white transition-colors font-medium text-white block">
                  +91 96031 55571
                </a>
                <span className="text-[10px] text-neutral-500">Mon – Sun: 9AM – 8PM</span>
              </div>
              <div>
                <a href="mailto:service@nxzdigital.com" className="hover:text-white transition-colors block">
                  service@nxzdigital.com
                </a>
              </div>
              <div className="text-[11px] text-neutral-500">
                Neopolis Boulevard, Kokapet, Hyderabad
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer Notice */}
        <div className="pt-8 border-t border-neutral-900 text-[11px] text-neutral-400 space-y-3 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> nxzdigital.com is a curated real estate platform providing information regarding verified residential and commercial developments in Hyderabad. Project details, specifications, floor plans, and pricing are sourced directly from registered developer filings with the Telangana State Real Estate Regulatory Authority (TS RERA). All logos and brand names belong to their respective developers. Buyers are advised to verify details with authorized representatives prior to purchase.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-900/60">
            <div className="text-neutral-400">
              © {new Date().getFullYear()} Hyderabad Real Estate & NXZ Digital. All rights reserved.
            </div>

            {/* Owner Portal Discreet Link */}
            <button
              onClick={() => setIsAdminPortalOpen(true)}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-neutral-400 transition-colors text-[11px] cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>{isAdmin ? 'Owner Portal Active' : 'Owner Project Management'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
