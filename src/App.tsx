import React, { useState, useEffect, useMemo } from 'react';
import { PropertyProvider, useProperties } from './context/PropertyContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchFilterBar } from './components/SearchFilterBar';
import { PropertyCard } from './components/PropertyCard';
import { EMICalculator } from './components/EMICalculator';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { CompareModal } from './components/CompareModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { FilterState, Property } from './types/property';
import { Building2, RotateCcw } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { properties } = useProperties();

  // URL Path Routing State
  const [currentSlug, setCurrentSlug] = useState<string>(() => {
    return window.location.pathname.replace(/^\/|\/$/g, '');
  });

  // Listen for browser Back/Forward popstate
  useEffect(() => {
    const handlePopState = () => {
      const slug = window.location.pathname.replace(/^\/|\/$/g, '');
      setCurrentSlug(slug);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToProject = (slug: string) => {
    window.history.pushState(null, '', `/${slug}`);
    setCurrentSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.history.pushState(null, '', '/');
    setCurrentSlug('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if current URL matches any project slug
  const activeProject = useMemo(() => {
    if (!currentSlug) return null;
    const normalized = currentSlug.toLowerCase();
    const targetSlug = normalized === 'godrej-brooklyn-heights' ? 'godrej-brooklyn-avenue' : normalized;
    return properties.find(
      (p) => p.slug.toLowerCase() === targetSlug || p.id.toLowerCase() === targetSlug
    ) || null;
  }, [currentSlug, properties]);

  // Filters State for Homepage
  const [filter, setFilter] = useState<FilterState>({
    propertyType: 'all',
    bhk: 'all',
    location: 'all',
    priceRange: 'all',
    status: 'all',
    searchQuery: '',
    sortBy: 'featured',
  });

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    return properties
      .filter((p) => {
        // Property Type Filter
        if (filter.propertyType !== 'all') {
          if (p.propertyType.toLowerCase() !== filter.propertyType.toLowerCase()) {
            return false;
          }
        }

        // BHK Filter (e.g. 2 BHK, 3 BHK, 4 BHK, 5 BHK, 6 BHK)
        if (filter.bhk !== 'all') {
          const hasBhk = (p.configurations || []).some((cfg) =>
            cfg.toLowerCase().includes(filter.bhk.toLowerCase())
          );
          if (!hasBhk) return false;
        }

        // Location Filter
        if (filter.location !== 'all') {
          if (p.location.toLowerCase() !== filter.location.toLowerCase()) {
            return false;
          }
        }

        // Price Filter
        if (filter.priceRange !== 'all') {
          const price = p.priceNumeric || 300;
          if (filter.priceRange === 'under-1.5' && price > 150) return false;
          if (filter.priceRange === '1.5-3' && (price < 150 || price > 300)) return false;
          if (filter.priceRange === '3-5' && (price < 300 || price > 500)) return false;
          if (filter.priceRange === 'above-5' && price < 500) return false;
        }

        // Status Filter
        if (filter.status !== 'all') {
          if (p.statusType !== filter.status) return false;
        }

        // Search Query
        if (filter.searchQuery.trim()) {
          const q = filter.searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDev = p.developerName.toLowerCase().includes(q);
          const matchLoc = p.location.toLowerCase().includes(q);
          const matchDesc = (p.description || '').toLowerCase().includes(q);
          if (!matchName && !matchDev && !matchLoc && !matchDesc) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filter.sortBy === 'price-asc') {
          return (a.priceNumeric || 0) - (b.priceNumeric || 0);
        }
        if (filter.sortBy === 'price-desc') {
          return (b.priceNumeric || 0) - (a.priceNumeric || 0);
        }
        if (filter.sortBy === 'area-desc') {
          const areaA = parseInt((a.areaRange || '0').replace(/[^0-9]/g, '')) || 0;
          const areaB = parseInt((b.areaRange || '0').replace(/[^0-9]/g, '')) || 0;
          return areaB - areaA;
        }
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }, [properties, filter]);

  const scrollToProperties = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If viewing a single project page (e.g. /msn-neopolis, /godrej-epoque)
  if (activeProject) {
    return (
      <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 pb-16 md:pb-0">
        <Navbar onNavigateToHome={navigateToHome} isProjectPage={true} />

        <main className="flex-1">
          <ProjectDetailPage
            project={activeProject}
            onBackToHome={navigateToHome}
            onNavigateToProject={navigateToProject}
          />
        </main>

        <Footer />
        <CompareModal />
        <MobileQuickBar />
      </div>
    );
  }

  // Otherwise, render full Hyderabad Real Estate homepage
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 pb-16 md:pb-0">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar onNavigateToHome={navigateToHome} isProjectPage={false} />

      {/* Hero Section */}
      <Hero onExploreClick={scrollToProperties} />

      {/* Interactive Search & Multi-Parameter Filter */}
      <SearchFilterBar
        filter={filter}
        setFilter={setFilter}
        totalMatches={filteredProperties.length}
        totalProperties={properties.length}
      />

      {/* Main Portfolio Grid */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex-1">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Verified Projects in Hyderabad
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              {filter.location === 'all'
                ? 'Showing verified luxury developments across Hyderabad from nxzdigital.com'
                : `Showing exclusive developments in ${filter.location}`}
            </p>
          </div>
        </div>

        {/* Property Grid or Empty State */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={(prop) => navigateToProject(prop.slug)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 px-4 text-center rounded-2xl bg-white border border-neutral-200 shadow-xs max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-neutral-900 mb-1">
              No matching projects found
            </h3>
            <p className="text-xs text-neutral-500 mb-6 max-w-sm mx-auto">
              We couldn't find any projects matching your current filter combination. Try resetting your search or broadening the location and budget parameters.
            </p>
            <button
              onClick={() =>
                setFilter({
                  propertyType: 'all',
                  bhk: 'all',
                  location: 'all',
                  priceRange: 'all',
                  status: 'all',
                  searchQuery: '',
                  sortBy: 'featured',
                })
              }
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </main>

      {/* EMI & Mortgage Calculator */}
      <EMICalculator />

      {/* Scraped Frequently Asked Questions */}
      <FAQSection />

      {/* Legal & Compliance Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CompareModal />

      {/* Mobile Sticky Quick Navigation */}
      <MobileQuickBar />
    </div>
  );
};

export default function App() {
  return (
    <PropertyProvider>
      <MainAppContent />
    </PropertyProvider>
  );
}
