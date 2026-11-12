import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useProperties } from '../context/PropertyContext';

export const ContactSection: React.FC = () => {
  const { addInquiry } = useProperties();
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [enquiryType, setEnquiryType] = useState<'Site Visit' | 'Price Sheet' | 'Brochure' | 'General Query'>('Site Visit');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    const cleanPhone = mobileNumber.replace(/[\s\-\(\)]/g, '');
    if (!cleanPhone) {
      errs.mobileNumber = 'Mobile number is required.';
    } else if (cleanPhone.length < 8 || !/^[+]?[0-9]{8,15}$/.test(cleanPhone)) {
      errs.mobileNumber = 'Please enter a valid mobile number.';
    }
    if (emailAddress.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim())) {
      errs.emailAddress = 'Please enter a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    addInquiry({
      fullName,
      mobileNumber,
      emailAddress: emailAddress || 'Not provided',
      enquiryType,
      message,
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-neutral-900 text-white py-16 sm:py-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Advisory Desk */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Private Advisory & Site Inspections</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Schedule Your Private Neopolis Tour
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Connect directly with our senior luxury property advisors for private site visits, developer-direct pricing sheets, and sanctioned architectural floor plans.
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <a
                href="tel:+919603155571"
                className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/80 border border-neutral-700 hover:border-amber-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                    Direct Phone Line
                  </div>
                  <div className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    +91 96031 55571
                  </div>
                  <div className="text-[11px] text-neutral-400">Available 9:00 AM – 8:00 PM IST</div>
                </div>
              </a>

              <a
                href="https://wa.me/919603155571?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20luxury%20properties%20in%20Hyderabad."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/80 border border-neutral-700 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                    WhatsApp Advisory Desk
                  </div>
                  <div className="font-display text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +91 96031 55571
                  </div>
                  <div className="text-[11px] text-neutral-400">Instant PDF Brochures & Video Walkthroughs</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <div className="w-10 h-10 rounded-lg bg-neutral-700 text-neutral-300 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                    Client Services Email
                  </div>
                  <a
                    href="mailto:service@nxzdigital.com"
                    className="font-medium text-white hover:text-amber-400 transition-colors block text-sm"
                  >
                    service@nxzdigital.com
                  </a>
                  <div className="text-[11px] text-neutral-400">Responses within 2 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/80 border border-neutral-700">
                <div className="w-10 h-10 rounded-lg bg-neutral-700 text-neutral-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                    Experience Center & Advisory Desk
                  </div>
                  <div className="font-medium text-white text-xs leading-relaxed mt-0.5">
                    Neopolis Boulevard, Sector 1, Kokapet, Gandipet Mandal, Hyderabad 500075
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-10 rounded-2xl border border-neutral-800 shadow-2xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm text-neutral-300 max-w-md">
                  Your request has been received. Our senior property specialist for Kokapet & Neopolis will contact you shortly with tailored inventory options.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    Send Direct Property Enquiry
                  </h3>
                  <p className="text-xs text-neutral-400 mb-6">
                    Enter your contact details to receive verified brochures and payment milestone sheets.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-neutral-300 mb-1.5 uppercase tracking-wider text-[11px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Anand Varma"
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    />
                    {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-300 mb-1.5 uppercase tracking-wider text-[11px]">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    />
                    {errors.mobileNumber && <p className="text-[11px] text-red-400 mt-1">{errors.mobileNumber}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-neutral-300 mb-1.5 uppercase tracking-wider text-[11px]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="anand@domain.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    />
                    {errors.emailAddress && <p className="text-[11px] text-red-400 mt-1">{errors.emailAddress}</p>}
                  </div>

                  <div>
                    <label className="block font-bold text-neutral-300 mb-1.5 uppercase tracking-wider text-[11px]">
                      Nature of Enquiry
                    </label>
                    <select
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value as any)}
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 appearance-none"
                    >
                      <option value="Site Visit">Private Site Inspection</option>
                      <option value="Price Sheet">Developer Pricing Sheet</option>
                      <option value="Brochure">Official Sanctioned Brochure</option>
                      <option value="General Query">Investment Advice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-neutral-300 mb-1.5 uppercase tracking-wider text-[11px]">
                    Message / Preferred BHK & Location
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you're looking for (e.g. 3 BHK in Neopolis or 4 BHK villa in Tellapur)..."
                    className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry Now</span>
                </button>

                <p className="text-[11px] text-neutral-500 text-center pt-2">
                  We maintain strict client confidentiality. No spam or unsolicited third-party marketing calls.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
