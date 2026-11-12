import React from 'react';
import { Search, Filter, RotateCcw, Building2, Home, Landmark, Briefcase, MapPin } from 'lucide-react';
import { FilterState, PropertyType, BHKType, HyderabadLocation } from '../types/property';
import { HYDERABAD_LOCATIONS } from '../data/locations';

interface SearchFilterBarProps {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  totalMatches: number;
  totalProperties: number;
}

const PROPERTY_TYPES: { label: string; value: string; icon: React.ElementType }[] = [
  { label: 'All Types', value: 'all', icon: Building2 },
  { label: 'Apartments', value: 'Apartment', icon: Building2 },
  { label: 'Villas', value: 'Villas', icon: Home },
  { label: 'Plots', value: 'Plots', icon: Landmark },
  { label: 'Commercial', value: 'Commercial', icon: Briefcase },
];

const BHK_OPTIONS: { label: string; value: string }[] = [
  { label: 'All BHK', value: 'all' },
  { label: '2 BHK', value: '2 BHK' },
  { label: '3 BHK', value: '3 BHK' },
  { label: '4 BHK', value: '4 BHK' },
  { label: '5 BHK', value: '5 BHK' },
  { label: '6 BHK', value: '6 BHK' },
];

const PRICE_RANGES = [
  { label: 'Any Budget', value: 'all' },
  { label: 'Under ₹1.5 Cr', value: 'under-1.5' },
  { label: '₹1.5 Cr – ₹3.0 Cr', value: '1.5-3' },
  { label: '₹3.0 Cr – ₹5.0 Cr', value: '3-5' },
  { label: '₹5.0 Cr & Above', value: 'above-5' },
];

const STATUS_OPTIONS = [
  { label: 'All Statuses', value: 'all' },
  { label: 'Ready to Move', value: 'ready' },
  { label: 'Under Construction', value: 'ongoing' },
  { label: 'Upcoming / Pre-Launch', value: 'upcoming' },
];

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  filter,
  setFilter,
  totalMatches,
  totalProperties,
}) => {
  const isFiltered =
    filter.propertyType !== 'all' ||
    filter.bhk !== 'all' ||
    filter.location !== 'all' ||
    filter.priceRange !== 'all' ||
    filter.status !== 'all' ||
    filter.searchQuery.trim() !== '';

  const handleReset = () => {
    setFilter({
      propertyType: 'all',
      bhk: 'all',
      location: 'all',
      priceRange: 'all',
      status: 'all',
      searchQuery: '',
      sortBy: 'featured',
    });
  };

  return (
    <div id="properties" className="w-full bg-white border-y border-neutral-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top Filter Bar: Search Input + Segmented Property Type Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
          {/* Text Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={filter.searchQuery}
              onChange={(e) => setFilter((prev) => ({ ...prev, searchQuery: e.target.value }))}
              placeholder="Search by project name, developer, or landmark..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-colors bg-neutral-50/50 hover:bg-white"
            />
            {filter.searchQuery && (
              <button
                onClick={() => setFilter((prev) => ({ ...prev, searchQuery: '' }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Property Type Segmented Controls (Functional buttons with active states) */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-lg overflow-x-auto">
            {PROPERTY_TYPES.map((t) => {
              const Icon = t.icon;
              const isActive = filter.propertyType === t.value;
              return (
                <button
                  key={t.value}
                  onClick={() => setFilter((prev) => ({ ...prev, propertyType: t.value }))}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-neutral-900 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-600' : 'text-neutral-400'}`} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Second Row: Detailed Multi-Select Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-neutral-100">
          {/* Location Dropdown covering all 12 requested regions */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              Location Corridor
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
              <select
                value={filter.location}
                onChange={(e) => setFilter((prev) => ({ ...prev, location: e.target.value }))}
                className="w-full pl-9 pr-8 py-2 text-xs font-medium rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 appearance-none transition-colors"
              >
                <option value="all">All Locations (12 Corridors)</option>
                {HYDERABAD_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* BHK Configuration Dropdown (2Bhk, 3bhk, 4bhk, 5bhk, 6bhk) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              BHK Configuration
            </label>
            <div className="flex items-center gap-1 overflow-x-auto">
              {BHK_OPTIONS.map((b) => {
                const isActive = filter.bhk === b.value;
                return (
                  <button
                    key={b.value}
                    onClick={() => setFilter((prev) => ({ ...prev, bhk: b.value }))}
                    className={`flex-1 py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    {b.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              Budget Range
            </label>
            <div className="relative">
              <select
                value={filter.priceRange}
                onChange={(e) => setFilter((prev) => ({ ...prev, priceRange: e.target.value }))}
                className="w-full px-3 py-2 text-xs font-medium rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 appearance-none transition-colors"
              >
                {PRICE_RANGES.map((pr) => (
                  <option key={pr.value} value={pr.value}>
                    {pr.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Status & Sort Combined */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
              Sort By
            </label>
            <div className="relative">
              <select
                value={filter.sortBy}
                onChange={(e) => setFilter((prev) => ({ ...prev, sortBy: e.target.value as any }))}
                className="w-full px-3 py-2 text-xs font-medium rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 appearance-none transition-colors"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="area-desc">Area: Largest First</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Filter Summary & Active State Reset */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-3 border-t border-neutral-100 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-900 tabular-nums">
              Showing {totalMatches} of {totalProperties} properties
            </span>
            {filter.location !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 text-[11px] font-medium">
                {filter.location}
              </span>
            )}
            {filter.propertyType !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 text-[11px] font-medium">
                {filter.propertyType}
              </span>
            )}
            {filter.bhk !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 text-[11px] font-medium">
                {filter.bhk}
              </span>
            )}
          </div>

          {isFiltered && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 hover:text-amber-800 hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
