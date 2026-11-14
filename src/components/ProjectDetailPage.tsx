import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Share2,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Compass,
  Clock,
  Layers,
  ExternalLink,
  FileText,
} from 'lucide-react';
import { Property } from '../types/property';
import { useProperties } from '../context/PropertyContext';

interface ProjectDetailPageProps {
  project: Property;
  onBackToHome: () => void;
  onNavigateToProject: (slug: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBackToHome,
  onNavigateToProject,
}) => {
  const { properties } = useProperties();
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top on mount or project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIdx(0);
  }, [project.slug]);

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
  const currentImage = images[activeImageIdx] || project.image;

  // Find related projects (other projects in the same developer or location)
  const relatedProjects = properties
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ${project.name} (${project.configurations.join(', ')}) at ${project.location}. Please share the official brochure, price sheet, and site inspection details.`
  );

  return (
    <div className="w-full bg-neutral-50 text-neutral-900 min-h-screen">
      {/* Top Breadcrumb & Return Bar */}
      <div className="bg-white border-b border-neutral-200 sticky top-16 sm:top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-500 overflow-x-auto whitespace-nowrap">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 font-semibold text-neutral-800 hover:text-amber-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Projects</span>
            </button>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <span className="text-neutral-500">{project.location}</span>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <span className="font-bold text-neutral-900 truncate max-w-[200px] sm:max-w-none">
              {project.name}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
              title="Share project link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <a
              href={`https://wa.me/919603155571?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Project Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Project Header Info */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-8 border-b border-neutral-200">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
              <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-bold">
                {project.propertyType || 'Apartments'}
              </span>
              <span>·</span>
              <span>{project.developerName}</span>
              {project.reraNumber && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    TS RERA: {project.reraNumber}
                  </span>
                </>
              )}
            </div>

            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              {project.name}
            </h1>

            <div className="flex items-center gap-1.5 text-sm text-neutral-600 mt-2">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{project.specificAddress || project.location}</span>
            </div>
          </div>

          <div className="lg:text-right shrink-0">
            <span className="text-xs uppercase font-bold tracking-wider text-neutral-400 block">
              Pricing Starts From
            </span>
            <div className="font-display text-2xl sm:text-4xl font-extrabold text-neutral-950 tabular-nums">
              {project.startingPrice}
            </div>
            <span className="text-xs text-neutral-500 font-medium">
              Configurations: {project.configurations.join(', ')}
            </span>
          </div>
        </div>

        {/* 2-Column Split: Visual Gallery & Overview on Left, Floating Quick Contact on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Visual & Project Details (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Images Showcase */}
            <div className="space-y-3">
              <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-md">
                <img
                  src={currentImage}
                  alt={`${project.name} photo ${activeImageIdx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Arrow Controls */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image counter tag */}
                <div className="absolute bottom-3 right-4 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-xs font-semibold tabular-nums">
                  {activeImageIdx + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activeImageIdx === idx
                          ? 'border-amber-600 scale-102 shadow-sm ring-1 ring-amber-600'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Description */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
              <h2 className="font-display text-2xl font-bold text-neutral-900">
                Project Overview & Description
              </h2>
              <div className="text-sm text-neutral-700 leading-relaxed space-y-4 whitespace-pre-line">
                {project.description}
              </div>
            </section>

            {/* 3. Project Highlights */}
            {project.projectHighlights && project.projectHighlights.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <h2 className="font-display text-2xl font-bold text-neutral-900">
                    Project Highlights
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {project.projectHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-800 leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. Location Highlights */}
            {project.locationHighlights && project.locationHighlights.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-600" />
                  <h2 className="font-display text-2xl font-bold text-neutral-900">
                    Location Highlights
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {project.locationHighlights.map((lh, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-800 leading-snug"
                    >
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{lh}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Floor Plan and Pricing */}
            <section className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-600" />
                    <h2 className="font-display text-2xl font-bold text-neutral-900">
                      Floor Plan & Pricing
                    </h2>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Verified unit configurations, super built-up dimensions, carpet areas, and pricing as published on nxzdigital.com
                  </p>
                </div>
                <a
                  href={`https://wa.me/919603155571?text=${encodeURIComponent(`Hello, please share the price sheet & floor plans for ${project.name} (${project.location}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors shrink-0 self-start sm:self-auto"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Get Price Sheet on WhatsApp</span>
                </a>
              </div>

              {/* Pricing & Area Highlights Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800/80 block">
                    Starting Price
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-neutral-900 font-display">
                    {project.startingPrice}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800/80 block">
                    Avg. Rate / SFT
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-amber-900 font-display">
                    {project.avgPricePerSqFt || 'Competitive'}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800/80 block">
                    Super Built-up Area
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-800">
                    {project.areaRange}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800/80 block">
                    Carpet Area Range
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-800">
                    {project.carpetAreaRange || 'Varies by layout'}
                  </span>
                </div>
              </div>

              {/* Floor Plan & Pricing Table */}
              {project.floorPlanRows && project.floorPlanRows.length > 0 ? (
                <div className="border border-neutral-200 rounded-xl overflow-x-auto shadow-2xs">
                  <table className="w-full min-w-[580px] text-xs text-left">
                    <thead className="bg-neutral-100 text-neutral-800 font-bold border-b border-neutral-200 uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="py-3 px-4">Configuration</th>
                        <th className="py-3 px-4">Super Built-up Area</th>
                        <th className="py-3 px-4">Carpet Area</th>
                        <th className="py-3 px-4 text-right">Indicative Pricing</th>
                        <th className="py-3 px-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 bg-white">
                      {project.floorPlanRows.map((row, i) => (
                        <tr key={i} className="hover:bg-neutral-50/80 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-neutral-950 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            {row.configuration}
                          </td>
                          <td className="py-3.5 px-4 text-neutral-800 font-medium">{row.size}</td>
                          <td className="py-3.5 px-4 text-neutral-600 font-medium">
                            {row.carpetArea || 'Varies by layout'}
                          </td>
                          <td className="py-3.5 px-4 text-right font-extrabold text-neutral-950 tabular-nums">
                            {row.price}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <a
                              href={`https://wa.me/919603155571?text=${encodeURIComponent(`Hello, I am interested in ${project.name} - ${row.configuration} (${row.size}). Please share unit availability and pricing details.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-md bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 transition-colors"
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-700">
                  <div className="flex justify-between font-bold text-neutral-900 mb-2">
                    <span>Available Configurations:</span>
                    <span>{project.configurations.join(', ')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Sizes:</span>
                    <span>{project.areaRange}</span>
                  </div>
                </div>
              )}

              {/* Pricing Breakdown, EOI Terms & Additional Charges */}
              {project.pricingNotes && project.pricingNotes.length > 0 && (
                <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200/90 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Pricing Breakdown, EOI Terms & Additional Charges
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {project.pricingNotes.map((note, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white border border-neutral-200/80 text-xs"
                      >
                        <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                          {note.label}
                        </div>
                        <div className="font-semibold text-neutral-900 mt-0.5">
                          {note.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Documents & Google Drive Downloads (from nxzdigital.com) */}
              {project.driveDocuments && project.driveDocuments.length > 0 && (
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-amber-600" />
                    <span>Official Project Documentation & Master Sheets</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {project.driveDocuments.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-amber-600 text-white text-xs font-bold transition-all shadow-2xs hover:shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{doc.label}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-300" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* 6. Amenities */}
            {project.amenities && project.amenities.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
                <h2 className="font-display text-2xl font-bold text-neutral-900">
                  Amenities & Club Facilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                  {project.amenities.map((am, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50/70 border border-neutral-200/70 text-xs text-neutral-800"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold">{am.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. Near By Locations & 8. Locations Feature */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Near By Locations */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <h3 className="font-display text-xl font-bold text-neutral-900">
                    Near By Locations
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-700 pt-1">
                  {(project.nearbyLocations && project.nearbyLocations.length > 0
                    ? project.nearbyLocations
                    : [
                        'Financial District & Nanakramguda: 5-8 Mins',
                        'Rajiv Gandhi International Airport (RGIA): 22-25 Mins',
                        'HITEC City & Cyber Towers: 15 Mins',
                        'Continental & AIG Hospitals: 10 Mins',
                      ]
                  ).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Locations Feature */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-600" />
                  <h3 className="font-display text-xl font-bold text-neutral-900">
                    Locations Feature
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-700 pt-1">
                  {(project.locationFeatures && project.locationFeatures.length > 0
                    ? project.locationFeatures
                    : [
                        '45-meter and 36-meter wide master-planned concrete avenues',
                        '100% subterranean multi-utility ducting eliminating road cutting',
                        'High green cover, pedestrian pathways and cycling tracks',
                        'Signal-free trumpet interchange to Outer Ring Road (ORR)',
                      ]
                  ).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Sticky Side Column: WhatsApp Advisory Desk (4 cols) */}
          <div className="lg:col-span-4 sticky top-36 space-y-6">
            <div className="bg-neutral-950 text-white p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Direct Developer Access
                </span>
                <h3 className="font-display text-xl font-bold">
                  Chat With Our Property Advisor
                </h3>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Connect instantly on WhatsApp with the designated project specialist for {project.name} to receive brochures, floor plans, pricing sheets, and private site visit slots.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/919603155571?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <p className="text-[11px] text-neutral-500 text-center">
                  Instant response · Direct developer pricing · Zero brokerage
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 11. Related Projects Section */}
        <section className="pt-12 border-t border-neutral-200 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Curated Portfolio
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900">
              Related Hyderabad Projects You May Like
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Explore other verified high-rise and luxury developments in West and South Hyderabad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigateToProject(rel.slug)}
                className="group flex flex-col bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md hover:border-neutral-300 transition-all cursor-pointer"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-neutral-900/80 text-white text-[10px] font-bold backdrop-blur-md">
                    {rel.propertyType || 'Apartment'}
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="text-[10px] text-neutral-500 uppercase font-semibold">
                    {rel.developerName}
                  </div>
                  <h3 className="font-display font-bold text-base text-neutral-900 group-hover:text-amber-700 transition-colors mt-0.5">
                    {rel.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-neutral-500 mt-1 mb-3">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span className="truncate">{rel.location}</span>
                  </div>

                  <div className="mt-auto pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block font-semibold uppercase">
                        Starting At
                      </span>
                      <span className="font-display text-sm font-bold text-neutral-900 tabular-nums">
                        {rel.startingPrice}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-amber-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>View</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
