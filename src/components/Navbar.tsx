import React, { useState } from 'react';
import { Phone, MessageSquare, Shield, Menu, X, Building2 } from 'lucide-react';
import { useProperties } from '../context/PropertyContext';

interface NavbarProps {
  onNavigateToHome?: () => void;
  isProjectPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToHome, isProjectPage }) => {
  const { comparisonList, setIsCompareModalOpen, setIsAdminPortalOpen, openEnquiryModal, isAdmin } = useProperties();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateToHome) {
      onNavigateToHome();
    } else {
      window.history.pushState(null, '', '/');
      window.location.href = '/';
    }
  };

  const handleNavClick = (anchor: string) => {
    setMobileMenuOpen(false);
    if (isProjectPage && onNavigateToHome) {
      onNavigateToHome();
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element in display font) */}
          <a
            href="/"
            onClick={handleBrandClick}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-decoration-none cursor-pointer"
            aria-label="Hyderabad Real Estate Home"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-900 text-amber-400 flex items-center justify-center font-bold text-lg tracking-wider shadow-sm group-hover:bg-neutral-800 transition-colors">
              NXZ
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors">
                HYDERABAD <span className="text-amber-600 font-semibold">REAL ESTATE</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-medium -mt-0.5">
                Premier Projects by NXZ Digital
              </span>
            </div>
          </a>

          {/* Zone 2: 3–4 concise single-line nav links with hover underlines */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
            <button
              onClick={() => handleNavClick('#properties')}
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              All Projects
            </button>
            <button
              onClick={() => handleNavClick('#emi-calc')}
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Mortgage Calculator
            </button>
            <button
              onClick={() => handleNavClick('#faqs')}
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              FAQs
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="hover:text-neutral-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Contact Desk
            </button>
          </nav>

          {/* Zone 3: Primary Action & Quick Tools */}
          <div className="flex items-center gap-3 shrink-0">
            {comparisonList.length > 0 && (
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors cursor-pointer whitespace-nowrap"
                title="Compare selected properties"
              >
                <span>Compare</span>
                <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px] font-bold">
                  {comparisonList.length}
                </span>
              </button>
            )}

            {/* Direct Call Advisory */}
            <a
              href="tel:+919603155571"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Call property advisor"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>+91 96031 55571</span>
            </a>

            {/* Consultation Action */}
            <button
              onClick={() => openEnquiryModal()}
              className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              Enquire Now
            </button>

            {/* Owner / Admin Portal Discreet Access */}
            <button
              onClick={() => setIsAdminPortalOpen(true)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer shrink-0 ${
                isAdmin
                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                  : 'text-neutral-400 border-transparent hover:text-neutral-700 hover:bg-neutral-100'
              }`}
              title={isAdmin ? 'Owner Portal (Authenticated)' : 'Owner / Admin Login'}
              aria-label="Owner Management Portal"
            >
              <Shield className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200 space-y-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-neutral-700">
              <button
                onClick={() => handleNavClick('#properties')}
                className="text-left px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors"
              >
                All Projects
              </button>
              <button
                onClick={() => handleNavClick('#emi-calc')}
                className="text-left px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors"
              >
                Mortgage Calculator
              </button>
              <button
                onClick={() => handleNavClick('#faqs')}
                className="text-left px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors"
              >
                Frequently Asked Questions
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="text-left px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors"
              >
                Contact & Site Visits
              </button>
            </nav>

            <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
              <a
                href="tel:+919603155571"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-100 text-neutral-800 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call +91 96031 55571</span>
              </a>
              <a
                href="https://wa.me/919603155571?text=Hi%2C%20I%20am%20interested%20in%20Hyderabad%20luxury%20real%20estate%20projects."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Advisory Desk</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
