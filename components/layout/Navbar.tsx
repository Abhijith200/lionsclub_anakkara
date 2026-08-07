'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/50'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#F4B400] rounded-lg p-1">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo/lions_logo.png"
                alt="Lions Club Anakkara Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold text-lg sm:text-xl tracking-tight transition-colors ${
                isScrolled ? 'text-[#0056A6]' : 'text-white'
              }`}>
                LIONS CLUB <span className="text-[#F4B400]">ANAKKARA</span>
              </span>
              <span className={`text-xs tracking-widest uppercase font-medium ${
                isScrolled ? 'text-slate-500' : 'text-slate-200'
              }`}>
                District 318 · We Serve
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-base font-semibold transition-all relative py-1 ${
                    isScrolled
                      ? isActive
                        ? 'text-[#0056A6]'
                        : 'text-slate-700 hover:text-[#0056A6]'
                      : isActive
                      ? 'text-[#F4B400]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${
                      isScrolled ? 'bg-[#0056A6]' : 'bg-[#F4B400]'
                    }`} />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md transform hover:-translate-y-0.5 hover:shadow-lg flex items-center space-x-2 ${
                isScrolled
                  ? 'bg-[#0056A6] text-white hover:bg-[#003F7D]'
                  : 'bg-[#F4B400] text-slate-900 hover:bg-[#D89F00]'
              }`}
            >
              <FaPhoneAlt className="text-xs" />
              <span>Get In Touch</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
            className={`md:hidden p-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B400] ${
              isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 text-white transition-all animate-fadeIn px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#0056A6] text-white'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center bg-[#F4B400] text-slate-900 font-bold py-3 rounded-xl shadow-lg hover:bg-[#D89F00]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
