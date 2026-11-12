import React from 'react';
import { Phone, MessageSquare, Filter, Calendar } from 'lucide-react';
import { useProperties } from '../context/PropertyContext';

export const MobileQuickBar: React.FC = () => {
  const { openEnquiryModal } = useProperties();

  const handleFilterClick = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2 text-white shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 text-center">
        <a
          href="tel:+919603155571"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-semibold mt-1">Call</span>
        </a>

        <a
          href="https://wa.me/919603155571?text=Hello%2C%20I%20am%20interested%20in%20properties%20in%20Hyderabad."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-emerald-400 hover:bg-neutral-800 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] font-semibold mt-1">WhatsApp</span>
        </a>

        <button
          onClick={handleFilterClick}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <Filter className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-semibold mt-1">Filters</span>
        </button>

        <button
          onClick={() => openEnquiryModal()}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-1">Enquire</span>
        </button>
      </div>
    </div>
  );
};
