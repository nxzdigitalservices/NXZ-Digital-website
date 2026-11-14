import React from 'react';
import { MessageSquare, Filter } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  const handleFilterClick = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2 text-white shadow-2xl">
      <div className="grid grid-cols-2 gap-2 text-center">
        <button
          onClick={handleFilterClick}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-neutral-800 text-neutral-200 hover:text-white transition-colors cursor-pointer"
        >
          <Filter className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold">Projects & Filters</span>
        </button>

        <a
          href="https://wa.me/919603155571?text=Hello%2C%20I%20am%20interested%20in%20properties%20in%20Hyderabad."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs font-bold">Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
