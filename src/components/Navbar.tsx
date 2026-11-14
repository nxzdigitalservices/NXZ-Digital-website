import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';
import { useProperties } from '../context/PropertyContext';

interface NavbarProps {
  onNavigateToHome?: () => void;
  isProjectPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToHome, isProjectPage }) => {
  const { comparisonList, setIsCompareModalOpen } = useProperties();
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
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-decoration-none cursor-pointer"
            aria-label="Hyderabad Real Estate Home"
          >
            <img
              src="/assets/aistudio/NXZ_logo_main_text_25a21177.jpeg"
              alt="NXZ Digital Logo"
              className="h-9 sm:h-10 w-auto object-contain rounded-md bg-white px-1.5 py-1 border border-neutral-200/80 shadow-2xs"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors leading-tight">
                HYDERABAD <span className="text-amber-600 font-semibold">REAL ESTATE</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-medium">
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

            {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/919603155571?text=Hi%2C%20I%20am%20interested%20in%20Hyderabad%20luxury%20real%20estate%20projects."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>

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
            </nav>

            <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2">
              <a
                href="https://wa.me/919603155571?text=Hi%2C%20I%20am%20interested%20in%20Hyderabad%20luxury%20real%20estate%20projects."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
