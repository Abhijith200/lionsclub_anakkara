'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LeaderEntry } from '@/data/leaders';
import { FaTrophy } from 'react-icons/fa';

interface LeadershipTimelineProps {
  presidents: LeaderEntry[];
}

export const LeadershipTimeline: React.FC<LeadershipTimelineProps> = ({ presidents }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0056A6] via-[#F4B400] to-[#0056A6]/20 rounded-full" />

      <div className="space-y-6">
        {presidents.map((president, idx) => (
          <motion.div
            key={president.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: idx * 0.07, ease: 'easeOut' }}
            className="relative pl-16 sm:pl-20 group"
          >
            {/* Timeline node */}
            <div className="absolute left-3 sm:left-5 top-4 w-6 h-6 rounded-full bg-white border-4 border-[#0056A6] group-hover:border-[#F4B400] group-hover:scale-125 transition-all duration-300 shadow-md flex items-center justify-center z-10">
              <div className="w-2 h-2 rounded-full bg-[#0056A6] group-hover:bg-[#F4B400] transition-colors" />
            </div>

            {/* Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex-grow">
                  {/* Year badge */}
                  <span className="inline-block px-3 py-1 bg-[#F4B400] text-slate-900 text-xs font-black rounded-full mb-2">
                    {president.year}
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#0056A6] transition-colors">
                    {president.name}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium mt-0.5">{president.position}</p>
                </div>

                {/* Year number (large decorative) */}
                <span className="text-4xl font-black text-slate-100 group-hover:text-[#0056A6]/10 transition-colors select-none hidden sm:block">
                  {president.year?.split('–')[0]}
                </span>
              </div>

              {/* Achievement */}
              {president.achievement && (
                <div className="mt-3 flex items-start space-x-2 text-sm text-slate-600">
                  <FaTrophy className="text-[#F4B400] mt-0.5 flex-shrink-0 text-xs" />
                  <span className="leading-relaxed font-light">{president.achievement}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
