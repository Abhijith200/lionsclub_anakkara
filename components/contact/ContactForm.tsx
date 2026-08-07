'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/common/Button';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Trigger joyful celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0056A6] to-[#F4B400]" />

      {submitted ? (
        <div className="py-12 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
            <FaCheckCircle />
          </div>
          <h3 className="text-2xl font-black text-slate-900">Thank You for Reaching Out!</h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            Your message has been successfully received by Lions Club Anakkara. Our team will get back to you as soon as possible.
          </p>
          <Button
            onClick={() => {
              setSubmitted(false);
              setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
            }}
            variant="outline"
            className="mt-4"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? 'border-red-500 focus:ring-red-200 bg-red-50/50'
                    : 'border-slate-300 focus:border-[#0056A6] focus:ring-[#0056A6]/20'
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                  <FaExclamationCircle />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-200 bg-red-50/50'
                    : 'border-slate-300 focus:border-[#0056A6] focus:ring-[#0056A6]/20'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                  <FaExclamationCircle />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0056A6] focus:ring-2 focus:ring-[#0056A6]/20 transition-all"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Volunteer Inquiry / Blood Donation"
                className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.subject
                    ? 'border-red-500 focus:ring-red-200 bg-red-50/50'
                    : 'border-slate-300 focus:border-[#0056A6] focus:ring-[#0056A6]/20'
                }`}
              />
              {errors.subject && (
                <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                  <FaExclamationCircle />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you or how would you like to contribute?"
              className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.message
                  ? 'border-red-500 focus:ring-red-200 bg-red-50/50'
                  : 'border-slate-300 focus:border-[#0056A6] focus:ring-[#0056A6]/20'
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1 flex items-center space-x-1">
                <FaExclamationCircle />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="gold"
            size="lg"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <span>Sending Message...</span>
            ) : (
              <>
                <FaPaperPlane className="text-sm" />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};
