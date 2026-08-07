'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Activity } from '@/types';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaTimes } from 'react-icons/fa';

interface ActivityCardProps {
  activity: Activity;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden group">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#0056A6] text-white shadow">
              {activity.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-center text-xs font-medium text-slate-500 mb-3 space-x-4">
              <span className="flex items-center space-x-1 text-[#F4B400] font-semibold">
                <FaCalendarAlt className="text-xs" />
                <span>{activity.date}</span>
              </span>
              {activity.location && (
                <span className="flex items-center space-x-1 text-slate-400">
                  <FaMapMarkerAlt className="text-xs" />
                  <span className="truncate max-w-[120px]">{activity.location}</span>
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-[#0056A6] transition-colors leading-snug line-clamp-2">
              {activity.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
              {activity.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#0056A6] hover:text-[#003F7D] transition-colors group cursor-pointer"
          >
            <span>View Details</span>
            <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Activity Details Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900 transition-colors"
            >
              <FaTimes className="text-lg" />
            </button>
            <div className="relative h-64 w-full">
              <Image src={activity.image} alt={activity.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-[#F4B400] text-slate-900 mb-2 inline-block">
                  {activity.category}
                </span>
                <h3 className="text-2xl font-extrabold">{activity.title}</h3>
              </div>
            </div>
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center text-sm font-semibold text-slate-500 space-x-4 border-b pb-3">
                <span className="flex items-center space-x-1 text-[#0056A6]">
                  <FaCalendarAlt />
                  <span>{activity.date}</span>
                </span>
                {activity.location && (
                  <span className="flex items-center space-x-1 text-slate-600">
                    <FaMapMarkerAlt />
                    <span>{activity.location}</span>
                  </span>
                )}
              </div>
              <p className="text-slate-700 leading-relaxed">
                {activity.longDescription || activity.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
