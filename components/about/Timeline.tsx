import React from 'react';

export const Timeline: React.FC = () => {
  const milestones = [
    {
      year: '2016',
      title: 'Club Establishment',
      description: 'Lions Club Anakkara was officially chartered under District 318 with 25 founding members dedicated to local welfare.'
    },
    {
      year: '2018',
      title: 'First Mega Vision & Eye Camp',
      description: 'Launched our signature SightFirst initiative, conducting free eye screenings and sponsoring 50+ free cataract surgeries.'
    },
    {
      year: '2020',
      title: 'Disaster Relief & Pandemic Support',
      description: 'Distributed emergency food kits, sanitization supplies, and essential medical aid to over 1,000 families across 6 Panchayath wards.'
    },
    {
      year: '2023',
      title: 'Inauguration of Lions Community Centre',
      description: 'Established a dedicated community service headquarters in Anakkara for regular healthcare drives, youth workshops, and blood donation.'
    },
    {
      year: '2026',
      title: 'Decade of Excellence & Green Mission',
      description: 'Celebrating 10 years of service by planting 500 trees and sponsoring scholarships for 150 underprivileged students.'
    }
  ];

  return (
    <div className="relative border-l-2 border-[#0056A6]/30 ml-4 sm:ml-8 space-y-8 my-4">
      {milestones.map((m, idx) => (
        <div key={idx} className="relative pl-8 group">
          {/* Milestone Circle */}
          <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white border-4 border-[#0056A6] group-hover:border-[#F4B400] group-hover:scale-125 transition-all duration-300 flex items-center justify-center shadow-md">
            <div className="w-2 h-2 rounded-full bg-[#0056A6] group-hover:bg-[#F4B400]" />
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <span className="inline-block px-3 py-1 bg-[#F4B400] text-slate-900 text-xs font-black rounded-full mb-2">
              {m.year}
            </span>
            <h4 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{m.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
