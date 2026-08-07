import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeart } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-[#F4B400]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo/lions_logo.png"
                  alt="Lions Club Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight text-white">
                  LIONS CLUB <span className="text-[#F4B400]">ANAKKARA</span>
                </h3>
                <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase">District 318 · Kerala</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering our local community through dedicated humanitarian programs, healthcare camps, education support, and environmental action.
            </p>
            <div className="inline-block px-3 py-1 bg-[#F4B400]/20 border border-[#F4B400]/40 rounded-full text-[#F4B400] text-xs font-bold uppercase tracking-widest">
              &quot;We Serve&quot;
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-[#F4B400] relative inline-block">
              Quick Links
              <span className="block h-0.5 w-10 bg-[#F4B400] mt-1 rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-[#F4B400] transition-colors flex items-center space-x-2">
                  <span className="text-[#F4B400]">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#F4B400] transition-colors flex items-center space-x-2">
                  <span className="text-[#F4B400]">›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#F4B400] transition-colors flex items-center space-x-2">
                  <span className="text-[#F4B400]">›</span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-[#F4B400] relative inline-block">
              Contact Info
              <span className="block h-0.5 w-10 bg-[#F4B400] mt-1 rounded-full" />
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#F4B400] mt-1 flex-shrink-0" />
                <span>Lions Club Anakkara, Anakkara P.O., Idukki District, Kerala, India - 685512</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[#F4B400] flex-shrink-0" />
                <span>+91 94470 00000 / +91 4868 200000</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#F4B400] flex-shrink-0" />
                <span>info@lionsclubanakkara.org</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-[#F4B400] relative inline-block">
              Follow Us
              <span className="block h-0.5 w-10 bg-[#F4B400] mt-1 rounded-full" />
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Stay updated with our daily social service initiatives and upcoming medical camps.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#0056A6] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© 2026 Lions Club Anakkara. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center space-x-1">
            <span>Built with</span>
            <FaHeart className="text-red-500" />
            <span>for Community Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
