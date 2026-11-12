import React, { useState } from 'react';
import {
  X,
  MapPin,
  Building,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Phone,
  MessageSquare,
  FileText,
  ChevronRight,
  Layers,
  Sparkles,
  Share2,
  Check,
  ExternalLink,
} from 'lucide-react';
import { Property, FloorPlan } from '../types/property';
import { useProperties } from '../context/PropertyContext';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  const { openEnquiryModal } = useProperties();
  const [activeTab, setActiveTab] = useState<'overview' | 'floorplans' | 'pricing' | 'amenities' | 'specs'>('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFloorPlanId, setSelectedFloorPlanId] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!property) return null;

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];
  const currentImage = images[activeImageIndex] || property.image;

  const floorPlans: FloorPlan[] = property.floorPlans || [];
  const currentPlan = floorPlans.find((fp) => fp.id === selectedFloorPlanId) || floorPlans[0];

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ${property.name} (${property.configurations.join(', ')}) at ${property.location}. Please share the official brochure, price breakdown, and site visit availability.`
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/80 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-xl font-bold text-neutral-900 leading-tight">
                  {property.name}
                </h2>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                  {property.propertyType}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
                <span>By {property.developerName}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-neutral-400" />
                  {property.location}
                </span>
                {property.reraNumber && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-medium">RERA: {property.reraNumber}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors cursor-pointer"
              title="Copy property link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors cursor-pointer"
              aria-label="Close property details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Main Photo Showcase & Thumbnail Strip */}
          <div className="space-y-3">
            <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-neutral-900 shadow-inner">
              <img
                src={currentImage}
                alt={`${property.name} photo`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-4 text-white text-xs bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg">
                <span className="font-semibold">{property.name}</span> — {property.tagline}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-amber-600 scale-102 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200/80 text-xs">
            <div>
              <div className="text-[10px] uppercase font-bold text-neutral-400">Starting Price</div>
              <div className="font-display text-lg font-bold text-neutral-900 tabular-nums">
                {property.startingPrice}
              </div>
              <div className="text-[10px] text-neutral-500">{property.priceNote || 'Base price exclusive of tax'}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-neutral-400">Configurations</div>
              <div className="font-semibold text-neutral-900 text-sm mt-0.5">
                {property.configurations.join(', ')}
              </div>
              <div className="text-[10px] text-neutral-500">{property.propertyType}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-neutral-400">Super Built-up Area</div>
              <div className="font-semibold text-neutral-900 text-sm mt-0.5">
                {property.areaRange}
              </div>
              <div className="text-[10px] text-neutral-500">Generous Layouts</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-neutral-400">Possession Timeline</div>
              <div className="font-semibold text-neutral-900 text-sm mt-0.5">
                {property.possessionYear || 'On Schedule'}
              </div>
              <div className="text-[10px] text-neutral-500">{property.statusBadge}</div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-neutral-200 pb-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              Overview & Highlights
            </button>
            {floorPlans.length > 0 && (
              <button
                onClick={() => setActiveTab('floorplans')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'floorplans'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                Floor Plans ({floorPlans.length})
              </button>
            )}
            {property.pricingBreakdown && (
              <button
                onClick={() => setActiveTab('pricing')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'pricing'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                Pricing & Payment Plan
              </button>
            )}
            {property.amenities && property.amenities.length > 0 && (
              <button
                onClick={() => setActiveTab('amenities')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'amenities'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                Amenities & Facilities
              </button>
            )}
            {property.keySpecs && property.keySpecs.length > 0 && (
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'specs'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                Specifications & RERA
              </button>
            )}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                  {property.headline}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {property.keyHighlights && property.keyHighlights.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-display text-sm font-bold text-neutral-900 uppercase tracking-wider">
                    Key Project Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {property.keyHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50 text-xs text-neutral-800">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FLOOR PLANS */}
          {activeTab === 'floorplans' && (
            <div className="space-y-6">
              {property.floorPlanRows && property.floorPlanRows.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-neutral-200">
                    <div>
                      <h4 className="font-display text-base font-bold text-neutral-900">
                        Available Configurations & Unit Layouts
                      </h4>
                      <p className="text-xs text-neutral-500">
                        Indicative floor plans, dimensions, and configurations for {property.name}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-neutral-400 block uppercase font-bold">
                        Super Built-up Range
                      </span>
                      <span className="font-display text-sm font-bold text-neutral-900">
                        {property.areaRange}
                      </span>
                    </div>
                  </div>

                  {/* Verified Table */}
                  <div className="border border-neutral-200 rounded-xl overflow-hidden shadow-2xs">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-neutral-100 text-neutral-800 font-bold border-b border-neutral-200 uppercase tracking-wider text-[11px]">
                        <tr>
                          <th className="py-2.5 px-3">Configuration</th>
                          <th className="py-2.5 px-3">Super Built-up Area</th>
                          <th className="py-2.5 px-3">Carpet Area</th>
                          <th className="py-2.5 px-3 text-right">Price Range</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 bg-white">
                        {property.floorPlanRows.map((row, i) => (
                          <tr key={i} className="hover:bg-neutral-50">
                            <td className="py-2.5 px-3 font-bold text-neutral-900">{row.configuration}</td>
                            <td className="py-2.5 px-3 text-neutral-700">{row.size}</td>
                            <td className="py-2.5 px-3 text-neutral-500">{row.carpetArea || 'Varies by layout'}</td>
                            <td className="py-2.5 px-3 text-right font-bold text-neutral-900 tabular-nums">
                              {row.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Floor Plan Images if available */}
                  {property.planDiagrams && property.planDiagrams.length > 0 && (
                    <div className="pt-2">
                      <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider block mb-2">
                        Official Floor & Master Plan Layouts
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {property.planDiagrams.map((diag, idx) => (
                          <a
                            key={idx}
                            href={diag}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-4/3 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 p-2 hover:border-amber-400 transition-all flex items-center justify-center"
                          >
                            <img
                              src={diag}
                              alt={`${property.name} Layout ${idx + 1}`}
                              referrerPolicy="no-referrer"
                              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] font-bold">
                              <span>Enlarge Plan</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : currentPlan ? (
                <>
                  {/* Floor Plan Selectors */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {floorPlans.map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedFloorPlanId(plan.id)}
                        className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                          (selectedFloorPlanId || floorPlans[0].id) === plan.id
                            ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        {plan.bhk} — {plan.superBuiltUpArea}
                      </button>
                    ))}
                  </div>

                  {/* Current Plan Overview */}
                  <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-200">
                      <div>
                        <h4 className="font-display text-base font-bold text-neutral-900">{currentPlan.name}</h4>
                        <span className="text-xs text-neutral-500">{currentPlan.bhk} Layout ({currentPlan.facing})</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-neutral-400 block">Super Built-up Area</span>
                        <span className="font-display text-base font-bold text-neutral-900 tabular-nums">{currentPlan.superBuiltUpArea}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="p-2.5 bg-white rounded-lg border border-neutral-200">
                        <span className="text-[10px] text-neutral-400 block font-bold uppercase">Carpet Area</span>
                        <span className="font-semibold text-neutral-800">{currentPlan.carpetArea}</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-neutral-200">
                        <span className="text-[10px] text-neutral-400 block font-bold uppercase">Bedrooms</span>
                        <span className="font-semibold text-neutral-800">{currentPlan.bedrooms}</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-neutral-200">
                        <span className="text-[10px] text-neutral-400 block font-bold uppercase">Bathrooms</span>
                        <span className="font-semibold text-neutral-800">{currentPlan.bathrooms}</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-neutral-200">
                        <span className="text-[10px] text-neutral-400 block font-bold uppercase">Balconies</span>
                        <span className="font-semibold text-neutral-800">{currentPlan.balconies}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          )}

          {/* TAB 3: PRICING & PAYMENT PLAN */}
          {activeTab === 'pricing' && (
            <div className="space-y-6">
              {/* Highlights strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs">
                <div>
                  <span className="text-[10px] text-amber-800 block uppercase font-bold">Starting Price</span>
                  <span className="font-display text-sm sm:text-base font-extrabold text-neutral-950">
                    {property.startingPrice}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-amber-800 block uppercase font-bold">Avg. Rate / SFT</span>
                  <span className="font-display text-sm sm:text-base font-extrabold text-amber-900">
                    {property.avgPricePerSqFt || 'Competitive'}
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-amber-800 block uppercase font-bold">Total Area</span>
                  <span className="font-bold text-neutral-800">
                    {property.areaRange}
                  </span>
                </div>
              </div>

              {/* Verified Floor Plan & Pricing Table */}
              {property.floorPlanRows && property.floorPlanRows.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-display text-sm font-bold text-neutral-900 uppercase tracking-wider">
                    Unit Configurations & Price Ranges
                  </h4>
                  <div className="border border-neutral-200 rounded-xl overflow-hidden shadow-2xs">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-neutral-100 text-neutral-800 font-bold border-b border-neutral-200 uppercase tracking-wider text-[11px]">
                        <tr>
                          <th className="py-2.5 px-3">Configuration</th>
                          <th className="py-2.5 px-3">Built-up Area</th>
                          <th className="py-2.5 px-3 text-right">Price Range</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 bg-white">
                        {property.floorPlanRows.map((row, i) => (
                          <tr key={i} className="hover:bg-neutral-50">
                            <td className="py-2.5 px-3 font-bold text-neutral-900">{row.configuration}</td>
                            <td className="py-2.5 px-3 text-neutral-700">{row.size}</td>
                            <td className="py-2.5 px-3 text-right font-bold text-neutral-900 tabular-nums">
                              {row.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Official Drive Documents if available */}
              {property.driveDocuments && property.driveDocuments.length > 0 && (
                <div className="space-y-2.5 pt-2">
                  <h4 className="font-display text-xs font-bold text-neutral-800 uppercase tracking-wider">
                    Official Documents (nxzdigital.com)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {property.driveDocuments.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-amber-600 text-white text-xs font-semibold transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>{doc.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {property.pricingBreakdown && (
                <div className="space-y-3">
                  <h4 className="font-display text-sm font-bold text-neutral-900 uppercase tracking-wider">
                    Detailed Unit Pricing Breakdown
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(property.pricingBreakdown).map(([key, item]) => (
                      <div key={key} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-2.5 text-xs">
                        <div className="font-bold text-sm text-neutral-900 border-b border-neutral-200 pb-1.5">
                          {item.title}
                        </div>
                        <div className="flex justify-between text-neutral-700">
                          <span>Base Price</span>
                          <span className="font-bold text-neutral-900">{item.basePrice}</span>
                        </div>
                        {item.floorRise && (
                          <div className="flex justify-between text-neutral-700">
                            <span>Floor Rise Premium</span>
                            <span className="font-medium">{item.floorRise}</span>
                          </div>
                        )}
                        {item.facingPremium && (
                          <div className="flex justify-between text-neutral-700">
                            <span>Facing Premium</span>
                            <span className="font-medium">{item.facingPremium}</span>
                          </div>
                        )}
                        {item.amenities && (
                          <div className="flex justify-between text-neutral-700">
                            <span>Clubhouse & Infrastructure</span>
                            <span className="font-medium">{item.amenities}</span>
                          </div>
                        )}
                        {item.carParking && (
                          <div className="flex justify-between text-neutral-700">
                            <span>Car Parking</span>
                            <span className="font-medium">{item.carParking}</span>
                          </div>
                        )}
                        <div className="pt-2 border-t border-neutral-200 flex justify-between font-bold text-neutral-900 text-sm">
                          <span>Indicative Range</span>
                          <span className="text-amber-800">{item.range}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.paymentPlan && (
                <div className="space-y-3">
                  <h4 className="font-display text-sm font-bold text-neutral-900 uppercase tracking-wider">
                    Construction Linked Payment Plan ({property.paymentPlan.scheme})
                  </h4>
                  <div className="border border-neutral-200 rounded-xl overflow-hidden">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-neutral-100 text-neutral-700 font-bold border-b border-neutral-200">
                        <tr>
                          <th className="py-2.5 px-4">Milestone</th>
                          <th className="py-2.5 px-4 text-right">Percentage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 bg-white">
                        {property.paymentPlan.instalments.map((inst, i) => (
                          <tr key={i} className="hover:bg-neutral-50">
                            <td className="py-2.5 px-4 text-neutral-800">{inst.milestone}</td>
                            <td className="py-2.5 px-4 text-right font-bold text-neutral-900 tabular-nums">
                              {inst.percentage}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {property.paymentPlan.notes && (
                    <p className="text-[11px] text-neutral-500 italic">{property.paymentPlan.notes}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: AMENITIES */}
          {activeTab === 'amenities' && (
            <div className="space-y-4">
              <h4 className="font-display text-sm font-bold text-neutral-900 uppercase tracking-wider">
                Curated Amenities & Lifestyle Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {(property.amenities || []).map((am, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200/80 bg-neutral-50/50 text-xs">
                    <div className="w-7 h-7 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">{am.name}</div>
                      <div className="text-[10px] text-neutral-500 uppercase">{am.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SPECS */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <h4 className="font-display text-sm font-bold text-neutral-900 uppercase tracking-wider">
                Sanctioned Specifications & Approvals
              </h4>
              <div className="border border-neutral-200 rounded-xl overflow-hidden">
                <table className="w-full text-xs text-left">
                  <tbody className="divide-y divide-neutral-200">
                    {(property.keySpecs || []).map((sp, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-neutral-50/60' : 'bg-white'}>
                        <td className="py-2.5 px-4 font-bold text-neutral-700 w-1/3">{sp.label}</td>
                        <td className="py-2.5 px-4 text-neutral-900">{sp.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Fixed CTA Bar */}
        <div className="p-4 bg-neutral-100/90 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500 hidden sm:inline">Starting at</span>
            <span className="font-display text-xl font-bold text-neutral-900 tabular-nums">
              {property.startingPrice}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={`https://wa.me/919603155571?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Advisor</span>
            </a>

            <a
              href="tel:+919603155571"
              className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 96031 55571</span>
            </a>

            <button
              onClick={() => {
                onClose();
                openEnquiryModal(property);
              }}
              className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              Book Site Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
