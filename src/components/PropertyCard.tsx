import React, { useState } from 'react';
import { MapPin, MessageSquare, Check, Plus, ExternalLink, ShieldCheck } from 'lucide-react';
import { Property } from '../types/property';
import { useProperties } from '../context/PropertyContext';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  const { toggleCompare, isInCompare } = useProperties();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];
  const currentImage = images[activeImageIndex] || property.image;
  const inCompare = isInCompare(property.id);

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to enquire about ${property.name} (${property.configurations.join(', ')}) at ${property.location}. Please share the official brochure and pricing sheet.`
  );

  const handleCardClick = (e: React.MouseEvent) => {
    // If not clicking button or link, open project page
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a')) {
      return;
    }
    onViewDetails(property);
  };

  return (
    <article
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white rounded-xl border border-neutral-200/90 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Visual Carrier / Photo Gallery */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100">
        {!imageError ? (
          <img
            src={currentImage}
            alt={property.imageAlt || `${property.name} real estate property in ${property.location}`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 text-neutral-300 p-4 text-center">
            <span className="font-display font-bold text-lg text-white mb-1">{property.name}</span>
            <span className="text-xs text-neutral-400">{property.location}</span>
          </div>
        )}

        {/* Subtle Top Gradient for status and compare */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded bg-neutral-900/80 text-white backdrop-blur-md">
            {property.propertyType}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleCompare(property);
            }}
            className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-md transition-colors cursor-pointer ${
              inCompare
                ? 'bg-amber-500 text-neutral-950 font-bold'
                : 'bg-black/50 text-white hover:bg-black/75'
            }`}
            title={inCompare ? 'Remove from comparison' : 'Add to comparison'}
          >
            {inCompare ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
            <span>{inCompare ? 'Comparing' : 'Compare'}</span>
          </button>
        </div>

        {/* Bottom Image Overlay: Image Gallery Dots & Price Note */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="text-[11px] font-medium text-neutral-200 drop-shadow-sm truncate max-w-[60%]">
            {property.statusBadge}
          </span>

          {images.length > 1 && (
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full">
              {images.slice(0, 5).map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    activeImageIndex === idx ? 'bg-amber-400 w-3' : 'bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="flex flex-col flex-1 p-5">
        {/* Developer & RERA Unboxed Metadata */}
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
          <span className="font-medium text-neutral-700">{property.developerName}</span>
          {property.reraNumber && (
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              TS RERA
            </span>
          )}
        </div>

        {/* Title */}
        <a
          href={`/${property.slug}`}
          onClick={(e) => {
            e.preventDefault();
            onViewDetails(property);
          }}
          className="font-display text-lg font-bold text-neutral-900 group-hover:text-amber-700 transition-colors cursor-pointer leading-snug mb-1 block"
        >
          {property.name}
        </a>

        {/* Location unboxed with pin icon */}
        <div className="flex items-center gap-1 text-xs text-neutral-500 mb-3.5">
          <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Key Specs Row */}
        <div className="grid grid-cols-2 gap-2 py-3 border-y border-neutral-100 mb-4 text-xs">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Configurations</div>
            <div className="font-semibold text-neutral-800 truncate mt-0.5">
              {property.configurations.join(', ')}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Built-up Area</div>
            <div className="font-semibold text-neutral-800 truncate mt-0.5">
              {property.areaRange}
            </div>
          </div>
        </div>

        {/* Pricing & CTA Section */}
        <div className="mt-auto pt-1 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
              Starting From
            </div>
            <div className="font-display text-lg sm:text-xl font-extrabold text-neutral-950 tabular-nums leading-tight">
              {property.startingPrice}
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/919603155571?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 transition-colors"
              title="Chat on WhatsApp about this project"
              aria-label={`WhatsApp about ${property.name}`}
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* View Details Primary Action */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(property);
              }}
              className="px-3.5 py-2 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer whitespace-nowrap"
            >
              <span>Explore</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
