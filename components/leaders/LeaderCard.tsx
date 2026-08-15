'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LeaderEntry } from '@/data/leaders';

interface LeaderCardProps {
  leader: LeaderEntry;
  index?: number;
  size?: 'normal' | 'compact';
}

export const LeaderCard: React.FC<LeaderCardProps> = ({ leader, index = 0, size = 'normal' }) => {
  const isCompact = size === 'compact';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col text-center"
    >
      {/* Photo */}
      <div className={`relative ${isCompact ? 'h-52' : 'h-72'} w-full overflow-hidden bg-slate-100`}>
        <Image
          src={leader.image}
          alt={`${leader.position} - ${leader.name}`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

        {/* Position badge at bottom of image */}
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4B400] text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow-lg">
            {leader.position}
          </span>
        </div>
      </div>

      {/* Gold top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F4B400] to-[#D89F00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl z-10" />

      {/* Card Details */}
      <div className={`${isCompact ? 'p-4' : 'p-6'} flex-grow flex flex-col items-center`}>
        <h3 className={`font-black text-slate-900 group-hover:text-[#0056A6] transition-colors duration-300 ${isCompact ? 'text-lg' : 'text-xl'}`}>
          {leader.name}
        </h3>
        <p className={`mt-1 text-slate-500 font-medium ${isCompact ? 'text-xs' : 'text-sm'}`}>
          Lions Club Anakkara
        </p>
      </div>
    </motion.div>
  );
};
