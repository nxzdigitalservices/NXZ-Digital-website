import React, { useState } from 'react';
import {
  X,
  Lock,
  Plus,
  Edit2,
  Trash2,
  Copy,
  Download,
  Upload,
  RotateCcw,
  Check,
  Eye,
  Phone,
  MessageSquare,
  Shield,
  Layers,
  Sparkles,
  Search,
} from 'lucide-react';
import { Property, PropertyType, BHKType, HyderabadLocation } from '../types/property';
import { useProperties } from '../context/PropertyContext';
import { HYDERABAD_LOCATIONS } from '../data/locations';

const PROPERTY_TYPES: PropertyType[] = ['Apartment', 'Villas', 'Plots', 'Commercial'];
const BHK_OPTIONS: BHKType[] = ['2 BHK', '3 BHK', '4 BHK', '5 BHK', '6 BHK'];

export const AdminPortalModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const {
    properties,
    addProperty,
    updateProperty,
    deleteProperty,
    resetToDefaults,
    exportData,
    importData,
    inquiries,
    updateInquiryStatus,
    isAdmin,
    loginAdmin,
    logoutAdmin,
  } = useProperties();

  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'inventory' | 'form' | 'inquiries' | 'backup'>('inventory');
  const [editingPropertyId, setEditingPropertyId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedExport, setCopiedExport] = useState(false);
  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Form State for Adding / Editing a Project
  const [formData, setFormData] = useState<Partial<Property>>({
    name: '',
    tagline: '',
    developerName: '',
    propertyType: 'Apartment',
    location: 'Kokapet & Neopolis',
    specificAddress: '',
    configurations: ['3 BHK', '4 BHK'],
    startingPrice: '₹3.20 Cr*',
    priceNumeric: 320,
    priceNote: 'Base Price Indicative',
    statusBadge: 'Under Construction',
    statusType: 'ongoing',
    isDetailed: true,
    isFeatured: false,
    areaRange: '2,800 – 4,200 sq.ft.',
    image: '/projects/msn-neopolis/1.webp',
    gallery: [
      '/projects/msn-neopolis/1.webp',
      '/projects/msn-neopolis/2.webp',
      '/projects/msn-neopolis/3.webp',
    ],
    headline: 'Modern Architectural Grandeur in Hyderabad',
    description: '',
    reraNumber: 'P02400008888',
    possessionYear: '2027',
    keyHighlights: [
      'Prime master-planned location with 45-meter wide avenues',
      '100% subterranean utilities with high-speed elevator access',
      'Generous layouts with double-height grand viewing balconies',
    ],
    keySpecs: [
      { label: 'Configurations', value: '3 & 4 BHK' },
      { label: 'Sizes', value: '2,800 – 4,200 sq.ft.' },
      { label: 'Ceiling Clearance', value: '11.5 ft Floor-to-Floor' },
      { label: 'Structure', value: 'R.C.C Shear Wall Construction' },
    ],
    amenities: [
      { name: 'Rooftop Infinity Edge Pool', category: 'Wellness' },
      { name: 'Multi-Tier Lifestyle Clubhouse', category: 'Leisure' },
      { name: 'Indoor Badminton & Squash Arena', category: 'Sports' },
      { name: '24/7 Biometric Multi-Tier Security', category: 'Infrastructure' },
    ],
  });

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(passcode)) {
      setLoginError(false);
      setPasscode('');
    } else {
      setLoginError(true);
    }
  };

  const handleStartAdd = () => {
    setEditingPropertyId(null);
    setFormData({
      name: '',
      tagline: '',
      developerName: '',
      propertyType: 'Apartment',
      location: 'Kokapet & Neopolis',
      specificAddress: '',
      configurations: ['3 BHK', '4 BHK'],
      startingPrice: '₹3.00 Cr*',
      priceNumeric: 300,
      priceNote: 'Pre-launch Indicative',
      statusBadge: 'Upcoming Landmark',
      statusType: 'upcoming',
      isDetailed: true,
      isFeatured: false,
      areaRange: '2,500 – 4,000 sq.ft.',
      image: '/projects/cascades/1.webp',
      gallery: ['/projects/cascades/1.webp', '/projects/cascades/2.webp'],
      headline: 'Iconic Living in Premier Corridor',
      description: 'Exclusive residential master development offering refined spaces and world-class amenities.',
      reraNumber: 'Registration In Progress',
      possessionYear: '2028',
      keyHighlights: ['Master planned development', 'High speed access to ORR'],
      keySpecs: [{ label: 'Configurations', value: '3 & 4 BHK' }],
      amenities: [{ name: 'Clubhouse & Pool', category: 'Leisure' }],
    });
    setActiveTab('form');
  };

  const handleStartEdit = (prop: Property) => {
    setEditingPropertyId(prop.id);
    setFormData({ ...prop });
    setActiveTab('form');
  };

  const handleToggleBhk = (bhk: string) => {
    const current = formData.configurations || [];
    if (current.includes(bhk)) {
      setFormData({ ...formData, configurations: current.filter((b) => b !== bhk) });
    } else {
      setFormData({ ...formData, configurations: [...current, bhk] });
    }
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.developerName || !formData.startingPrice) {
      alert('Please fill in required fields: Property Name, Developer, and Price.');
      return;
    }

    const payload = {
      name: formData.name || 'New Property',
      slug: (formData.slug || formData.name || 'new-property')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, ''),
      tagline: formData.tagline || '',
      developerName: formData.developerName || '',
      propertyType: formData.propertyType || 'Apartment',
      location: formData.location || 'Kokapet & Neopolis',
      specificAddress: formData.specificAddress || '',
      configurations: formData.configurations || ['3 BHK'],
      startingPrice: formData.startingPrice || '₹3.00 Cr*',
      priceNumeric: Number(formData.priceNumeric) || 300,
      priceNote: formData.priceNote || '',
      statusBadge: formData.statusBadge || 'Under Construction',
      statusType: formData.statusType || 'ongoing',
      isDetailed: true,
      isFeatured: !!formData.isFeatured,
      areaRange: formData.areaRange || '2,500 – 4,000 sq.ft.',
      image: formData.image || '/projects/msn-neopolis/1.webp',
      gallery: formData.gallery && formData.gallery.length > 0 ? formData.gallery : [formData.image || ''],
      headline: formData.headline || formData.name || '',
      description: formData.description || '',
      reraNumber: formData.reraNumber || '',
      possessionYear: formData.possessionYear || '2027',
      keyHighlights: formData.keyHighlights || [],
      keySpecs: formData.keySpecs || [],
      amenities: formData.amenities || [],
    };

    if (editingPropertyId) {
      updateProperty(editingPropertyId, payload);
    } else {
      addProperty(payload);
    }

    setActiveTab('inventory');
    setEditingPropertyId(null);
  };

  const filteredProperties = properties.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.developerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-900 text-white border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold">Owner & Admin Project Portal</h2>
              <p className="text-xs text-neutral-400">
                Personal management tool to upload, edit, and update Neopolis properties
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAdmin && (
              <button
                onClick={logoutAdmin}
                className="text-xs text-neutral-400 hover:text-white px-2 py-1 rounded border border-neutral-700 hover:border-neutral-500 transition-colors"
              >
                Log Out
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Gate */}
        {!isAdmin ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center max-w-md mx-auto my-auto">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
              Owner Portal Authentication
            </h3>
            <p className="text-xs text-neutral-600 mb-6">
              Enter your owner passcode to upload or update new projects and review client inquiries.
            </p>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setLoginError(false);
                  }}
                  placeholder="Enter passcode (admin123)"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-center"
                  autoFocus
                />
                {loginError && (
                  <p className="text-xs text-red-600 mt-1.5 font-medium">
                    Incorrect passcode. (Hint: Use <strong>admin123</strong>)
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-sm font-bold transition-colors cursor-pointer"
              >
                Unlock Management Portal
              </button>

              <div className="text-[11px] text-neutral-400 text-center">
                Default Owner Passcode: <span className="font-mono text-neutral-700 font-bold">admin123</span>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Owner Workspace */
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Navigation Tabs */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-6 bg-neutral-50 overflow-x-auto">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('inventory')}
                  className={`px-4 py-3 text-xs font-bold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'inventory'
                      ? 'border-amber-600 text-amber-800 bg-white'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Project Inventory ({properties.length})
                </button>
                <button
                  onClick={() => setActiveTab('form')}
                  className={`px-4 py-3 text-xs font-bold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'form'
                      ? 'border-amber-600 text-amber-800 bg-white'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {editingPropertyId ? 'Edit Project' : '+ Add New Project'}
                </button>
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`px-4 py-3 text-xs font-bold border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === 'inquiries'
                      ? 'border-amber-600 text-amber-800 bg-white'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <span>Client Leads & Inquiries</span>
                  <span className="w-4 h-4 rounded-full bg-amber-600 text-white text-[10px] flex items-center justify-center">
                    {inquiries.length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('backup')}
                  className={`px-4 py-3 text-xs font-bold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === 'backup'
                      ? 'border-amber-600 text-amber-800 bg-white'
                      : 'border-transparent text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Backup & Reset
                </button>
              </div>

              {activeTab === 'inventory' && (
                <button
                  onClick={handleStartAdd}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Project</span>
                </button>
              )}
            </div>

            {/* Tab 1: INVENTORY TABLE */}
            {activeTab === 'inventory' && (
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="relative max-w-sm flex-1">
                    <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search inventory..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-neutral-200"
                    />
                  </div>
                  <div className="text-xs text-neutral-500 font-medium">
                    {filteredProperties.length} projects displayed
                  </div>
                </div>

                <div className="border border-neutral-200 rounded-xl overflow-hidden shadow-xs">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-neutral-100 text-neutral-700 font-bold border-b border-neutral-200">
                      <tr>
                        <th className="py-2.5 px-4">Project</th>
                        <th className="py-2.5 px-3">Type & BHK</th>
                        <th className="py-2.5 px-3">Location</th>
                        <th className="py-2.5 px-3">Price</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 bg-white">
                      {filteredProperties.map((p) => (
                        <tr key={p.id} className="hover:bg-neutral-50/80 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={p.image}
                                alt={p.name}
                                className="w-10 h-8 rounded object-cover shrink-0 bg-neutral-200"
                              />
                              <div>
                                <div className="font-bold text-neutral-900">{p.name}</div>
                                <div className="text-[11px] text-neutral-500">{p.developerName}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3">
                            <div className="font-semibold text-neutral-800">{p.propertyType}</div>
                            <div className="text-[11px] text-neutral-500">{p.configurations.join(', ')}</div>
                          </td>
                          <td className="py-3 px-3 text-neutral-700 truncate max-w-[150px]">
                            {p.location}
                          </td>
                          <td className="py-3 px-3 font-bold text-neutral-900 tabular-nums">
                            {p.startingPrice}
                          </td>
                          <td className="py-3 px-3">
                            <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-neutral-100 text-neutral-700">
                              {p.statusBadge}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => handleStartEdit(p)}
                                className="p-1.5 rounded text-neutral-600 hover:text-amber-700 hover:bg-neutral-100 transition-colors"
                                title="Edit project"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => {
                                  if (confirm(`Are you sure you want to delete ${p.name}?`)) {
                                    deleteProperty(p.id);
                                  }
                                }}
                                className="p-1.5 rounded text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                                title="Delete project"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 2: ADD / EDIT PROJECT FORM */}
            {activeTab === 'form' && (
              <form onSubmit={handleSaveForm} className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                  <h3 className="font-display text-base font-bold text-neutral-900">
                    {editingPropertyId ? `Edit: ${formData.name}` : 'Upload New Real Estate Project'}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab('inventory')}
                    className="text-xs text-neutral-500 hover:text-neutral-800"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Project Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name || ''}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. MSN Neopolis, The Crown Mansions"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Developer / Builder *</label>
                    <input
                      type="text"
                      required
                      value={formData.developerName || ''}
                      onChange={(e) => setFormData({ ...formData, developerName: e.target.value })}
                      placeholder="e.g. Sattva Group, Brigade, Godrej"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Property Type *</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as PropertyType })}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white"
                    >
                      {PROPERTY_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Location Corridor *</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value as HyderabadLocation })}
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200 bg-white"
                    >
                      {HYDERABAD_LOCATIONS.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Starting Price (Display) *</label>
                    <input
                      type="text"
                      required
                      value={formData.startingPrice || ''}
                      onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                      placeholder="e.g. ₹3.26 Cr* or Contact for Price"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Price Numeric (In Lakhs, for sort)</label>
                    <input
                      type="number"
                      value={formData.priceNumeric || ''}
                      onChange={(e) => setFormData({ ...formData, priceNumeric: Number(e.target.value) })}
                      placeholder="e.g. 326 (for 3.26 Cr) or 85 (for 85 L)"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Super Built-up Area Range</label>
                    <input
                      type="text"
                      value={formData.areaRange || ''}
                      onChange={(e) => setFormData({ ...formData, areaRange: e.target.value })}
                      placeholder="e.g. 2,800 – 4,500 sq.ft."
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Status Badge</label>
                    <input
                      type="text"
                      value={formData.statusBadge || ''}
                      onChange={(e) => setFormData({ ...formData, statusBadge: e.target.value })}
                      placeholder="e.g. Under Construction, Ready to Move"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">TS RERA Number</label>
                    <input
                      type="text"
                      value={formData.reraNumber || ''}
                      onChange={(e) => setFormData({ ...formData, reraNumber: e.target.value })}
                      placeholder="e.g. P02400007812"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-700 mb-1">Possession Year</label>
                    <input
                      type="text"
                      value={formData.possessionYear || ''}
                      onChange={(e) => setFormData({ ...formData, possessionYear: e.target.value })}
                      placeholder="e.g. 2027, Ready to Move"
                      className="w-full px-3 py-2 rounded-lg border border-neutral-200"
                    />
                  </div>
                </div>

                {/* BHK Configurations checkboxes */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-neutral-700">Configurations</label>
                  <div className="flex flex-wrap gap-2">
                    {BHK_OPTIONS.map((b) => {
                      const isSelected = (formData.configurations || []).includes(b);
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleToggleBhk(b)}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-amber-600 text-white border-amber-600'
                              : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Image & Gallery */}
                <div className="space-y-2 text-xs">
                  <label className="block font-bold text-neutral-700">Main Showcase Image URL</label>
                  <input
                    type="text"
                    value={formData.image || ''}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/projects/msn-neopolis/1.webp or custom image path"
                    className="w-full px-3 py-2 rounded-lg border border-neutral-200 font-mono text-[11px]"
                  />
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                    <span>Quick presets:</span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: '/projects/msn-neopolis/1.webp' })}
                      className="text-amber-700 hover:underline"
                    >
                      MSN 1
                    </button>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: '/projects/sattva-lakeridge/1.webp' })}
                      className="text-amber-700 hover:underline"
                    >
                      Sattva 1
                    </button>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: '/projects/brigade-barcelona/1.webp' })}
                      className="text-amber-700 hover:underline"
                    >
                      Brigade 1
                    </button>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: '/src/assets/images/villa_luxury_estate_1794462274794.jpg' })}
                      className="text-amber-700 hover:underline"
                    >
                      Villa Estate
                    </button>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1 text-xs">
                  <label className="block font-bold text-neutral-700">Project Description</label>
                  <textarea
                    rows={4}
                    value={formData.description || ''}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Provide detailed description of the project, architecture, location, and lifestyle amenities..."
                    className="w-full px-3 py-2 rounded-lg border border-neutral-200"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setActiveTab('inventory')}
                    className="px-4 py-2 border border-neutral-300 rounded-lg text-xs font-semibold text-neutral-700 hover:bg-neutral-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition-colors shadow-sm cursor-pointer"
                  >
                    {editingPropertyId ? 'Save & Update Property' : 'Publish New Property'}
                  </button>
                </div>
              </form>
            )}

            {/* Tab 3: CLIENT INQUIRIES & LEADS */}
            {activeTab === 'inquiries' && (
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-neutral-900">
                      Client Leads & Site Visit Requests
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Direct inquiries captured through the website forms
                    </p>
                  </div>
                  <span className="text-xs font-semibold bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full">
                    {inquiries.length} Inquiries
                  </span>
                </div>

                <div className="border border-neutral-200 rounded-xl overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-neutral-100 text-neutral-700 font-bold border-b border-neutral-200">
                      <tr>
                        <th className="py-2.5 px-4">Client Name</th>
                        <th className="py-2.5 px-3">Contact</th>
                        <th className="py-2.5 px-3">Property & Type</th>
                        <th className="py-2.5 px-3">Date / Message</th>
                        <th className="py-2.5 px-3">Status</th>
                        <th className="py-2.5 px-4 text-right">Quick Connect</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 bg-white">
                      {inquiries.map((inq) => (
                        <tr key={inq.id} className="hover:bg-neutral-50">
                          <td className="py-3 px-4 font-bold text-neutral-900">{inq.fullName}</td>
                          <td className="py-3 px-3">
                            <div className="font-semibold text-neutral-800">{inq.mobileNumber}</div>
                            <div className="text-[11px] text-neutral-500">{inq.emailAddress}</div>
                          </td>
                          <td className="py-3 px-3">
                            <div className="font-semibold text-neutral-800">
                              {inq.propertyName || 'General Inquiry'}
                            </div>
                            <div className="text-[10px] text-neutral-500">{inq.enquiryType}</div>
                          </td>
                          <td className="py-3 px-3 text-neutral-600 max-w-[200px]">
                            {inq.message || inq.preferredDate || 'No message provided'}
                          </td>
                          <td className="py-3 px-3">
                            <select
                              value={inq.status}
                              onChange={(e) => updateInquiryStatus(inq.id, e.target.value as any)}
                              className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                                inq.status === 'new'
                                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                                  : inq.status === 'contacted'
                                  ? 'bg-blue-50 text-blue-900 border-blue-300'
                                  : 'bg-emerald-50 text-emerald-900 border-emerald-300'
                              }`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="closed">Closed</option>
                            </select>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <a
                                href={`tel:${inq.mobileNumber.replace(/\s+/g, '')}`}
                                className="p-1.5 rounded bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
                                title="Call client"
                              >
                                <Phone className="w-3.5 h-3.5" />
                              </a>
                              <a
                                href={`https://wa.me/${inq.mobileNumber.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
                                  inq.fullName
                                )}%2C%20thank%20you%20for%20contacting%20Neopolis%20Properties.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
                                title="Chat on WhatsApp"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 4: BACKUP & RESTORE */}
            {activeTab === 'backup' && (
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-3">
                  <h4 className="font-display text-sm font-bold text-neutral-900">
                    Export Portfolio Data (JSON)
                  </h4>
                  <p className="text-xs text-neutral-600">
                    Save a full backup copy of all projects and custom edits to your computer.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(exportData());
                        setCopiedExport(true);
                        setTimeout(() => setCopiedExport(false), 2000);
                      }}
                      className="px-4 py-2 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-neutral-800 flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedExport ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedExport ? 'Copied to Clipboard!' : 'Copy JSON'}</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-3">
                  <h4 className="font-display text-sm font-bold text-neutral-900">
                    Restore Scraped Defaults
                  </h4>
                  <p className="text-xs text-neutral-600">
                    Reset the portfolio back to the original scraped projects from neopolisproperties.com and initial Hyderabad properties.
                  </p>
                  <button
                    onClick={() => {
                      if (confirm('Restore default properties? Custom changes will be reset.')) {
                        resetToDefaults();
                        alert('Portfolio restored to initial state.');
                        setActiveTab('inventory');
                      }
                    }}
                    className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restore Default Scraped Data</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
