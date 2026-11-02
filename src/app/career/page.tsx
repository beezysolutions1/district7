'use client';

import React, { useState, useRef, useEffect } from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { UploadCloud, FileText, CheckCircle2, ArrowUpRight, X } from 'lucide-react';

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fileInfo = selectedFile ? ` (Attaching resume: ${selectedFile.name})` : '';
    const text = `Hello D7 Careers! Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}${fileInfo}. I would like to apply for an open position at District 7 / d7ventures.com.`;

    window.open(`https://wa.me/917736030777?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Hero Banner */}
        <section className="relative w-full bg-[#111111] text-white overflow-hidden">
          <div className="relative h-[48vh] min-h-[360px] w-full flex items-center justify-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/PXL_20211113_080116683.jpg"
              alt="Career Opportunities with the District 7 Team"
              className="absolute inset-0 w-full h-full object-cover opacity-50 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/55" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-3">
              <div className="inline-block border-y border-white/30 py-1.5 px-6 mb-1">
                <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-200 font-light">
                  Career Opportunities
                </span>
              </div>

              <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]">
                We&apos;re Hiring!
              </h1>
            </div>
          </div>
        </section>

        {/* Join Our Team & Apply Form Section (Clean, Static, Minimalist) */}
        <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          {/* Clean Editorial Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-neutral-400 block">
              Opportunities
            </span>

            <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
              Join Our Team
            </h2>

            <div className="w-12 h-px bg-neutral-300 mx-auto" />

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
              If you&apos;re interested in one of our open positions, start by applying here and attaching your resume.
            </p>
          </div>

          {/* Clean Modern Application Card */}
          <div className="max-w-lg mx-auto bg-[#FAF9F6] border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-playfair text-2xl text-neutral-900 font-normal mb-6 text-center">
              Apply Now
            </h3>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-white border border-neutral-200 rounded-full flex items-center justify-center mx-auto text-neutral-900 shadow-xs">
                  <CheckCircle2 className="w-6 h-6 stroke-[1.5] text-neutral-900" />
                </div>
                <div className="space-y-1">
                  <p className="font-playfair text-xl text-neutral-900 font-normal">
                    Thank You
                  </p>
                  <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto">
                    Your application has been opened on WhatsApp. Our management team will contact you soon.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-neutral-700 tracking-wider uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-base sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                  />
                </div>

                {/* Phone Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-neutral-700 tracking-wider uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-base sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                  />
                </div>

                {/* Email* Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-neutral-700 tracking-wider uppercase">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-base sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                  />
                </div>

                {/* Attach Resume */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-neutral-700 tracking-wider uppercase">
                    Attach Resume
                  </label>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />

                  {selectedFile ? (
                    <div className="border border-neutral-300 bg-white rounded-xl p-3.5 flex items-center justify-between">
                      <div className="flex items-center space-x-2.5 overflow-hidden">
                        <FileText className="w-4 h-4 text-neutral-700 shrink-0" />
                        <span className="text-xs font-medium text-neutral-800 truncate">
                          {selectedFile.name}
                        </span>
                        <span className="text-[11px] text-neutral-400 shrink-0">
                          ({(selectedFile.size / 1024).toFixed(0)} KB)
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1 text-neutral-400 hover:text-neutral-700 transition-colors"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border border-dashed border-neutral-300 hover:border-neutral-400 bg-white rounded-xl p-4 text-center cursor-pointer transition-colors group flex items-center justify-center space-x-2.5"
                    >
                      <UploadCloud className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
                      <span className="text-xs text-neutral-600 group-hover:text-neutral-900 font-medium">
                        Choose resume file <span className="text-neutral-400 font-light">(PDF, DOCX)</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* reCAPTCHA Notice */}
                <p className="text-[11px] text-neutral-400 leading-normal pt-1 font-light">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>

                {/* Submit Application Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-neutral-950 text-white hover:bg-neutral-800 py-3.5 px-6 rounded-full text-xs font-medium uppercase tracking-[0.1em] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-neutral-950/10"
                  >
                    <span>Submit Application</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
