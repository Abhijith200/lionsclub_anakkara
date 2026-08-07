import React from 'react';
import { EventItem } from '@/types';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface EventCardProps {
  event: EventItem;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Date Badge */}
      <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0056A6] to-[#003F7D] text-white flex flex-col items-center justify-center shadow-lg border-2 border-[#F4B400]">
        <span className="text-2xl font-black leading-none">{event.day}</span>
        <span className="text-xs font-bold uppercase tracking-wider text-[#F4B400] mt-1">{event.month}</span>
      </div>

      {/* Details */}
      <div className="flex-grow space-y-2">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
          <span className="flex items-center space-x-1 text-[#0056A6]">
            <FaMapMarkerAlt />
            <span>{event.location}</span>
          </span>
          {event.time && (
            <span className="flex items-center space-x-1 text-slate-400">
              <FaClock />
              <span>{event.time}</span>
            </span>
          )}
        </div>
        <h3 className="text-xl font-extrabold text-slate-900 hover:text-[#0056A6] transition-colors">
          {event.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
};
