'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LeaderEntry } from '@/data/leaders';
import { FaQuoteLeft } from 'react-icons/fa';

interface FeaturedLeaderProps {
  leader: LeaderEntry;
}

export const FeaturedLeader: React.FC<FeaturedLeaderProps> = ({ leader }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl"
    >
      {/* Top gold accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#F4B400] via-[#D89F00] to-[#F4B400]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Column */}
        <div className="relative h-96 sm:h-[480px] lg:h-auto min-h-[400px] overflow-hidden group">
          <Image
            src={leader.image}
            alt={`President - ${leader.name}`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/10" />

          {/* Position badge floating */}
          <div className="absolute bottom-6 left-6">
            <span className="inline-block px-5 py-2 rounded-full bg-[#F4B400] text-slate-900 font-black text-sm uppercase tracking-wider shadow-xl">
              {leader.position}
            </span>
          </div>
        </div>

        {/* Content Column */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          {/* Badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-[#0056A6]/10 text-[#0056A6] border border-[#0056A6]/20 text-xs font-bold uppercase tracking-widest mb-6">
            Club President · Lions Club Anakkara
          </span>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-2">
            {leader.name}
          </h2>

          {/* Gold rule */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#F4B400] to-[#D89F00] rounded-full mb-6" />

          {/* Message */}
          {leader.message && (
            <div className="relative">
              <FaQuoteLeft className="text-4xl text-[#F4B400]/30 absolute -top-2 -left-2" />
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light pl-6 italic">
                {leader.message}
              </p>
            </div>
          )}

          {/* Decorative bottom accent */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0056A6] to-[#003F7D] flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-black text-xs">LC</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Lions Club Anakkara</p>
                <p className="text-xs text-slate-500">District 318 · Kerala, India · We Serve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
