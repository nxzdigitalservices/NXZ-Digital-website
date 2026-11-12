import React, { useState } from 'react';
import { X, CheckCircle, Phone, MessageSquare, Calendar, Building, Send } from 'lucide-react';
import { useProperties } from '../context/PropertyContext';
import { Property } from '../types/property';

export const EnquiryModal: React.FC = () => {
  const { isEnquiryModalOpen, setIsEnquiryModalOpen, enquiryTargetProperty, addInquiry } = useProperties();

  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [enquiryType, setEnquiryType] = useState<'Site Visit' | 'Price Sheet' | 'Brochure' | 'General Query' | 'Floor Plans'>('Site Visit');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  if (!isEnquiryModalOpen) return null;

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = 'Please enter your full name';
    const cleanMobile = mobileNumber.replace(/[\s\-\(\)]/g, '');
    if (!cleanMobile) {
      errors.mobileNumber = 'Please enter your mobile number';
    } else if (cleanMobile.length < 8 || !/^[+]?[0-9]{8,15}$/.test(cleanMobile)) {
      errors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (emailAddress.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim())) {
      errors.emailAddress = 'Please enter a valid email address';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    addInquiry({
      fullName,
      mobileNumber,
      emailAddress: emailAddress || 'Not provided',
      enquiryType,
      preferredDate: preferredDate || undefined,
      propertyId: enquiryTargetProperty?.id,
      propertyName: enquiryTargetProperty?.name,
      message: message || undefined,
    });

    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setMobileNumber('');
    setEmailAddress('');
    setMessage('');
    setPreferredDate('');
    setFormErrors({});
    setIsEnquiryModalOpen(false);
  };

  const whatsappDirect = () => {
    const text = encodeURIComponent(
      `Hello, I would like to schedule a site inspection for ${
        enquiryTargetProperty?.name || 'Neopolis properties'
      }. My name is ${fullName || 'Client'}.`
    );
    window.open(`https://wa.me/919603155571?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-neutral-900">
              {enquiryTargetProperty ? `Enquire: ${enquiryTargetProperty.name}` : 'Request Property Consultation'}
            </h3>
            <p className="text-xs text-neutral-500">
              Direct developer assistance · Official brochures · Verified pricing
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl font-bold text-neutral-900">
                Inquiry Received Successfully!
              </h4>
              <p className="text-xs text-neutral-600 max-w-sm">
                Thank you, <strong>{fullName}</strong>. Our senior property advisor will reach out to you at{' '}
                <strong>{mobileNumber}</strong> within 15 minutes with complete brochures and pricing details.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full">
                <button
                  onClick={whatsappDirect}
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp Now</span>
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-neutral-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ramesh Reddy"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 text-xs"
                />
                {formErrors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1">{formErrors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 text-xs"
                  />
                  {formErrors.mobileNumber && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.mobileNumber}</p>
                  )}
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 text-xs"
                  />
                  {formErrors.emailAddress && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.emailAddress}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Purpose of Inquiry</label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 bg-white text-xs"
                  >
                    <option value="Site Visit">Schedule Site Inspection</option>
                    <option value="Price Sheet">Receive Unit Price Sheet</option>
                    <option value="Brochure">Download Official Brochure</option>
                    <option value="Floor Plans">Request Sanctioned Floor Plans</option>
                    <option value="General Query">Investment Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-neutral-700 mb-1">Preferred Date (Optional)</label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-neutral-300 bg-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-neutral-700 mb-1">Specific Requirements / Message</label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Interested in 3 BHK or 4 BHK above 20th floor with East orientation..."
                  className="w-full px-3.5 py-2 rounded-lg border border-neutral-300 text-xs"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>

                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-neutral-500">
                  <span>Or contact advisor directly:</span>
                  <a href="tel:+919603155571" className="font-bold text-amber-700 hover:underline">
                    +91 96031 55571
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
