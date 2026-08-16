import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leader } from '@/types';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

interface LeadershipProps {
  leaders: Leader[];
  showViewAll?: boolean;
}

export const Leadership: React.FC<LeadershipProps> = ({ leaders, showViewAll = true }) => {
  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col text-center"
          >
            {/* Photo */}
            <div className="relative h-72 w-full overflow-hidden bg-slate-100">
              <Image
                src={leader.photo}
                alt={leader.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 px-4">
                <span className="px-4 py-1 rounded-full bg-[#F4B400] text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow">
                  {leader.role}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#0056A6] transition-colors">
                  {leader.name}
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              {/* Contact info placeholders */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-500">
                {leader.email && (
                  <div className="flex items-center justify-center space-x-2 text-slate-600 hover:text-[#0056A6]">
                    <FaEnvelope className="text-[#0056A6]" />
                    <span>{leader.email}</span>
                  </div>
                )}
                {leader.phone && (
                  <div className="flex items-center justify-center space-x-2 text-slate-600">
                    <FaPhoneAlt className="text-[#F4B400]" />
                    <span>{leader.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showViewAll && (
        <div className="flex justify-center pt-2">
          <Link
            href="/about/leaders"
            className="inline-flex items-center justify-center px-10 py-3.5 border-2 border-slate-900 text-red-500 hover:text-white hover:bg-slate-900 font-semibold text-sm sm:text-base transition-all duration-300 rounded shadow-sm"
          >
            View all
          </Link>
        </div>
      )}
    </div>
  );
};

