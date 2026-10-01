'use client';

import { useState } from 'react';
import { Mail, MessageCircle, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WHATSAPP_PHONE, WHATSAPP_URL, SUPPORT_EMAIL } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter your message.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
              Support & Inquiries
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] text-balance">
              Get in Touch.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed text-balance">
              Have a question, found a bug, or want to share feedback? We want to hear from you.
            </p>
          </div>
        </section>

        {/* TWO COLUMN CONTACT LAYOUT */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT COLUMN: CONTACT OPTIONS */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                    Direct Contact Channels
                  </h2>
                  <p className="text-sm text-zinc-500 mt-1">
                    Reach out directly through email or WhatsApp.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Email Support Button - Opens mailto (no raw email shown as text) */}
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=Modulor%20Inquiry`}
                    className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-xl hover:border-blue-600 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-bold text-zinc-900 text-sm block">Email Support</span>
                        <span className="text-xs text-zinc-500">Send an email message</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                      Open mailto →
                    </span>
                  </a>

                  {/* WhatsApp Button - 0114116265 - Opens WhatsApp chat */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-xl hover:border-emerald-600 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-bold text-zinc-900 text-sm block">WhatsApp</span>
                        <span className="text-xs text-zinc-600 font-medium tabular-nums">
                          {WHATSAPP_PHONE}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 group-hover:translate-x-0.5 transition-transform">
                      Open WhatsApp →
                    </span>
                  </a>
                </div>

                {/* Response time note */}
                <div className="pt-4 border-t border-zinc-200/80 flex items-start gap-3 text-xs text-zinc-600">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <span className="font-bold text-zinc-900">Response time: </span>
                    We reply within 24 hours, Monday to Friday.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-extrabold text-zinc-900 mb-1">Send us a message</h2>
                <p className="text-sm text-zinc-500 mb-6">
                  Fill out the form below and we will get back to you promptly.
                </p>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3 animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-zinc-900 text-base">Message Sent!</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto">
                      Thank you for reaching out, {formData.name}. We&apos;ve received your message
                      and will respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: 'General Question',
                          message: '',
                        });
                      }}
                      className="mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700 underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Brian Mwangi"
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@domain.co.ke"
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                      >
                        <option value="General Question">General Question</option>
                        <option value="Bug Report">Bug Report</option>
                        <option value="Feature Request">Feature Request</option>
                        <option value="Billing">Billing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what you're thinking, how you run your business, or how we can assist..."
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {/* Below form small note */}
                <p className="mt-6 pt-4 border-t border-zinc-100 text-xs text-zinc-500 italic">
                  We&apos;re a small team building something we care about. Every message gets read.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
