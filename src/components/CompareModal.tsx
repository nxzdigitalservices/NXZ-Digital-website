import React from 'react';
import { X, Check, Trash2, ExternalLink } from 'lucide-react';
import { useProperties } from '../context/PropertyContext';
import { Property } from '../types/property';

export const CompareModal: React.FC = () => {
  const {
    comparisonList,
    toggleCompare,
    clearCompare,
    isCompareModalOpen,
    setIsCompareModalOpen,
    setSelectedProperty,
  } = useProperties();

  if (!isCompareModalOpen || comparisonList.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div>
            <h3 className="font-display text-lg font-bold text-neutral-900">
              Side-by-Side Property Comparison ({comparisonList.length}/3)
            </h3>
            <p className="text-xs text-neutral-500">
              Compare specifications, configurations, pricing, and locations
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearCompare}
              className="text-xs text-neutral-500 hover:text-red-600 px-2 py-1 rounded transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={() => setIsCompareModalOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-y-auto flex-1 p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-3 px-4 w-40 font-bold text-neutral-400 uppercase text-[10px] tracking-wider border-b border-neutral-200 bg-neutral-50">
                    Feature
                  </th>
                  {comparisonList.map((p) => (
                    <th key={p.id} className="py-3 px-4 min-w-[220px] border-b border-neutral-200 align-top">
                      <div className="flex flex-col gap-2">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-28 object-cover rounded-lg bg-neutral-100"
                        />
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-display font-bold text-sm text-neutral-900">{p.name}</h4>
                          <button
                            onClick={() => toggleCompare(p)}
                            className="p-1 text-neutral-400 hover:text-red-600 transition-colors"
                            title="Remove from comparison"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-neutral-500">{p.developerName}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="py-3 px-4 font-bold text-neutral-700 bg-neutral-50">Starting Price</td>
                  {comparisonList.map((p) => (
                    <td key={p.id} className="py-3 px-4 font-display font-extrabold text-base text-neutral-950 tabular-nums">
                      {p.startingPrice}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-neutral-700 bg-neutral-50">Property Type</td>
                  {comparisonList.map((p) => (
                    <td key={p.id} className="py-3 px-4 font-medium text-neutral-800">
                      {p.propertyType}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-neutral-700 bg-neutral-50">Location</td>
                  {comparisonList.map((p) => (
                    <td key={p.id} className="py-3 px-4 text-neutral-700">
                      {p.location}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-neutral-700 bg-neutral-50">Configurations</td>
                  {comparisonList.map((p) => (
                    <td key={p.id} className="py-3 px-4 font-semibold text-neutral-800">
                      {p.configurations.join(', ')}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-neutral-700 bg-neutral-50">Super Built-up Area</td>
                  {comparisonList.map((p) => (
                    <td key={p.id} className="py-3 px-4 text-neutral-800 font-medium tabular-nums">
                      {p.areaRange}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-neutral-700 bg-neutral-50">Status & Possession</td>
                  {comparisonList.map((p) => (
                    <td key={p.id} className="py-3 px-4 text-neutral-800">
                      <div>{p.statusBadge}</div>
                      <div className="text-[11px] text-neutral-500">{p.possessionYear || 'On Schedule'}</div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-neutral-700 bg-neutral-50">TS RERA Number</td>
                  {comparisonList.map((p) => (
                    <td key={p.id} className="py-3 px-4 font-mono text-[11px] text-emerald-800 font-medium">
                      {p.reraNumber || 'Registration In Progress'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-neutral-700 bg-neutral-50">Key Amenities</td>
                  {comparisonList.map((p) => (
                    <td key={p.id} className="py-3 px-4 text-neutral-700">
                      <ul className="space-y-1">
                        {(p.amenities || []).slice(0, 4).map((a, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-[11px]">
                            <Check className="w-3 h-3 text-amber-600 shrink-0" />
                            <span>{a.name}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-neutral-700 bg-neutral-50">Action</td>
                  {comparisonList.map((p) => (
                    <td key={p.id} className="py-3 px-4">
                      <button
                        onClick={() => {
                          setIsCompareModalOpen(false);
                          setSelectedProperty(p);
                        }}
                        className="w-full py-2 px-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
