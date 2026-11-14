import React from 'react';
import { MessageSquare, Filter, GitCompare } from 'lucide-react';
import { useProperties } from '../context/PropertyContext';

interface MobileQuickBarProps {
  onNavigateToHome?: () => void;
  isProjectPage?: boolean;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onNavigateToHome,
  isProjectPage,
}) => {
  const { comparisonList, setIsCompareModalOpen } = useProperties();

  const handleFilterClick = () => {
    if (isProjectPage && onNavigateToHome) {
      onNavigateToHome();
      setTimeout(() => {
        const el = document.getElementById('properties');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 w-full bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] text-white shadow-2xl">
      <div className="flex items-center gap-2 w-full max-w-md mx-auto">
        <button
          onClick={handleFilterClick}
          className="flex-1 min-w-0 flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-lg bg-neutral-800 text-neutral-200 hover:text-white transition-colors cursor-pointer"
        >
          <Filter className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="text-[11px] font-semibold truncate">
            {isProjectPage ? 'All Projects' : 'Projects & Filters'}
          </span>
        </button>

        {comparisonList.length > 0 && (
          <button
            onClick={() => setIsCompareModalOpen(true)}
            className="shrink-0 flex items-center justify-center gap-1 py-2.5 px-2.5 rounded-lg bg-amber-500 text-neutral-950 font-bold text-[11px] cursor-pointer"
            aria-label="Compare selected properties"
          >
            <GitCompare className="w-3.5 h-3.5 shrink-0" />
            <span>{comparisonList.length}</span>
          </button>
        )}

        <a
          href="https://wa.me/919603155571?text=Hello%2C%20I%20am%20interested%20in%20properties%20in%20Hyderabad."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[11px] font-bold truncate">Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
