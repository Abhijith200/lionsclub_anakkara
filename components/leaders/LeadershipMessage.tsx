'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export const LeadershipMessage: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-3xl"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003F7D] via-[#0056A6] to-[#1E6CBD]" />

      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#F4B400]/10 blur-2xl translate-y-1/2 -translate-x-1/4" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #F4B400 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 sm:py-20 px-6 sm:px-12 lg:px-20 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-[#F4B400]/20 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-widest mb-8"
        >
          Leadership Philosophy
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4"
        >
          A MESSAGE FROM{' '}
          <span className="text-[#F4B400]">OUR LEADERSHIP</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-20 h-1 bg-[#F4B400] mx-auto rounded-full mb-10"
        />

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="relative max-w-3xl mx-auto"
        >
          <FaQuoteLeft className="absolute -top-4 -left-4 sm:-left-8 text-5xl sm:text-7xl text-[#F4B400]/20" />
          <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-light leading-relaxed italic">
            Service is at the heart of everything we do.
          </blockquote>
          <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Through teamwork, compassion and dedication, we strive to create
            a positive impact in the community we serve. Every initiative we
            undertake is a testament to the spirit of Lions — empowering
            individuals, transforming communities.
          </p>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex items-center justify-center space-x-4"
        >
          <div className="w-16 h-0.5 bg-[#F4B400]/40 rounded-full" />
          <div className="w-3 h-3 rounded-full bg-[#F4B400]/60" />
          <div className="w-16 h-0.5 bg-[#F4B400]/40 rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 text-sm text-slate-400 uppercase tracking-widest font-semibold"
        >
          Lions Club Anakkara · We Serve
        </motion.p>
      </div>
    </motion.section>
  );
};
