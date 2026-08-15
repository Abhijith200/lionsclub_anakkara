'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

export const LeadersHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['-20%', '20%']
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[70vh] min-h-[480px] sm:min-h-[560px] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
      >
        <Image
          src="/images/leaders/leaders-hero.jpg"
          alt="Lions Club Anakkara Leaders"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Multi-layer overlay for premium depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003F7D]/90 via-slate-900/75 to-[#0056A6]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4B400] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4B400]/50 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          aria-label="Breadcrumb"
          className="flex items-center justify-center space-x-1.5 text-xs sm:text-sm font-semibold text-slate-300 mb-8"
        >
          <Link
            href="/"
            className="hover:text-[#F4B400] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B400] rounded"
          >
            Home
          </Link>
          <FaChevronRight className="text-[10px] text-[#F4B400]/70" />
          <Link
            href="/about"
            className="hover:text-[#F4B400] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4B400] rounded"
          >
            About
          </Link>
          <FaChevronRight className="text-[10px] text-[#F4B400]/70" />
          <span className="text-[#F4B400] font-bold">Leaders</span>
        </motion.nav>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full bg-[#F4B400]/20 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-widest mb-6"
        >
          Lions Club Anakkara · District 318
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-2xl leading-none mb-6"
        >
          OUR{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] to-[#D89F00]">
            LEADERS
          </span>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-24 h-1 bg-gradient-to-r from-[#F4B400] to-[#D89F00] mx-auto rounded-full mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Leadership that inspires service,{' '}
          <br className="hidden sm:block" />
          dedication and community impact.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#F4B400]/80 to-transparent rounded-full"
        />
      </motion.div>
    </div>
  );
};
