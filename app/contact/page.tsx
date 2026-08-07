import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ParallaxBanner } from '@/components/common/ParallaxBanner';
import { ContactForm } from '@/components/contact/ContactForm';
import { Map } from '@/components/contact/Map';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Lions Club Anakkara | Get In Touch',
  description: 'Reach out to Lions Club Anakkara for community assistance, volunteering opportunities, blood donation requests, or partnership inquiries.',
};

export default function ContactPage() {
  return (
    <div className="space-y-0">
      {/* 1. Contact Hero */}
      <ParallaxBanner
        title="GET IN TOUCH"
        subtitle="We would love to hear from you."
        imageSrc="/images/hero/hero_bg.png"
        height="h-96 sm:h-[400px]"
      />

      {/* 2. Contact Cards & Form Section */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge="CONNECT WITH US"
            title="REACH OUT TO LIONS CLUB ANAKKARA"
            subtitle="Have a question, request for assistance, or want to join as a volunteer? Contact us today."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Info Cards Column */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0056A6]/10 text-[#0056A6] flex items-center justify-center text-xl flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Address</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Lions Club Anakkara<br />
                    Anakkara P.O., Idukki District<br />
                    Kerala, India - 685512
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F4B400]/20 text-slate-900 flex items-center justify-center text-xl flex-shrink-0">
                  <FaPhoneAlt className="text-[#0056A6]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Phone</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    +91 94470 00000<br />
                    +91 4868 200000
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0056A6]/10 text-[#0056A6] flex items-center justify-center text-xl flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-lg">Email</h4>
                  <p className="text-slate-600 text-sm mt-1">
                    info@lionsclubanakkara.org<br />
                    contact@lionsclubanakkara.org
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
                <h4 className="font-extrabold text-slate-900 text-lg mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Page"
                    className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-[#0056A6] hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 shadow"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Page"
                    className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-pink-600 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 shadow"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Channel"
                    className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 shadow"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Google Maps Section */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            badge="VISIT US"
            title="FIND US ON THE MAP"
            subtitle="Locate Lions Club Anakkara service centre."
          />
          <Map />
        </Container>
      </section>
    </div>
  );
}
