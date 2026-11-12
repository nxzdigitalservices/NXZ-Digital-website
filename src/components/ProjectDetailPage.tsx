import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  MapPin,
  Building,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Phone,
  MessageSquare,
  Share2,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Compass,
  Clock,
  Layers,
  Send,
  ExternalLink,
  FileText,
  Download,
  Eye,
  Tag,
  X,
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
  const { properties, addInquiry, openEnquiryModal } = useProperties();
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedPlanImage, setSelectedPlanImage] = useState<string | null>(null);

  // Form state
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [enquiryType, setEnquiryType] = useState<'Site Visit' | 'Price Sheet' | 'Brochure'>('Site Visit');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll to top on mount or project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIdx(0);
    setFormSubmitted(false);
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

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobileNumber) return;

    addInquiry({
      fullName,
      mobileNumber,
      emailAddress: emailAddress || 'Not provided',
      enquiryType,
      propertyId: project.id,
      propertyName: project.name,
      message,
    });

    setFormSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ${project.name} (${project.configurations.join(', ')}) at ${project.location}. Please share the official brochure, price sheet, and site inspection details.`
  );

  return (
    <div className="w-full bg-neutral-50 text-neutral-900 min-h-screen">
      {/* Top Breadcrumb & Return Bar */}
      <div className="bg-white border-b border-neutral-200 sticky top-20 z-30 shadow-xs">
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

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
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
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tabular-nums">
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
                <button
                  onClick={() => openEnquiryModal(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Price Sheet</span>
                </button>
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
                <div className="border border-neutral-200 rounded-xl overflow-hidden shadow-2xs">
                  <table className="w-full text-xs text-left">
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
                            <button
                              onClick={() => openEnquiryModal(project)}
                              className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-neutral-100 hover:bg-amber-100 hover:text-amber-900 text-neutral-700 transition-colors cursor-pointer"
                            >
                              Enquire
                            </button>
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

              {/* Floor Plan Diagrams / Layout Views */}
              {project.planDiagrams && project.planDiagrams.length > 0 && (
                <div className="pt-2 border-t border-neutral-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-800">
                      <Eye className="w-4 h-4 text-amber-600" />
                      <span>Floor Plan & Master Layout Diagrams</span>
                    </div>
                    <span className="text-[11px] text-neutral-400">Click to view in high resolution</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.planDiagrams.map((diagramUrl, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedPlanImage(diagramUrl)}
                        className="group relative aspect-4/3 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 cursor-pointer shadow-2xs hover:border-amber-400 hover:shadow-md transition-all"
                      >
                        <img
                          src={diagramUrl}
                          alt={`${project.name} Floor / Tower Plan ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-bold backdrop-blur-2xs">
                          <Maximize2 className="w-4 h-4" />
                          <span>View Plan</span>
                        </div>
                      </div>
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

          {/* Sticky Side Column: Quick Lead & Inspection Booking (4 cols) */}
          <div className="lg:col-span-4 sticky top-36 space-y-6">
            <div className="bg-neutral-950 text-white p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Direct Developer Access
                </span>
                <h3 className="font-display text-xl font-bold">
                  Schedule Private Site Visit
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Connect with the designated project specialist for {project.name}.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-lg font-bold">Request Logged!</h4>
                  <p className="text-xs text-neutral-300">
                    Our team will contact you at <strong>{mobileNumber}</strong> shortly.
                  </p>
                  <a
                    href={`https://wa.me/919603155571?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleQuickInquiry} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-neutral-300 font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-semibold mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-semibold mb-1">Email Address</label>
                    <input
                      type="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="rajesh@example.com"
                      className="w-full px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-semibold mb-1">Enquiry Purpose</label>
                    <select
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value as any)}
                      className="w-full px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white"
                    >
                      <option value="Site Visit">Private Site Visit</option>
                      <option value="Price Sheet">Price Breakdown Sheet</option>
                      <option value="Brochure">Download Brochure</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-600/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Site Visit Request</span>
                  </button>
                </form>
              )}

              {/* Instant Call / WhatsApp Buttons */}
              <div className="pt-4 border-t border-neutral-800 space-y-2">
                <a
                  href="tel:+919603155571"
                  className="w-full py-2.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Advisor: +91 96031 55571</span>
                </a>

                <a
                  href={`https://wa.me/919603155571?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
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

      {/* Lightbox Modal for Floor Plans */}
      {selectedPlanImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPlanImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <h3 className="font-display font-bold text-neutral-900 text-sm">
                {project.name} — Floor / Master Plan Layout
              </h3>
              <button
                onClick={() => setSelectedPlanImage(null)}
                className="p-1 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto max-h-[75vh] py-2 flex items-center justify-center">
              <img
                src={selectedPlanImage}
                alt={`${project.name} Floor Plan`}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span>Sourced from nxzdigital.com</span>
              <button
                onClick={() => openEnquiryModal(project)}
                className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-lg transition-colors cursor-pointer"
              >
                Request Detailed PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
