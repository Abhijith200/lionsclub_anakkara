import React from 'react';
import { FaHandHoldingHeart, FaUsers, FaHeart, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';

export const Values: React.FC = () => {
  const values = [
    {
      title: 'SERVICE',
      description: 'Putting community needs first through selfless dedication and proactive volunteer initiatives.',
      icon: <FaHandHoldingHeart className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />
    },
    {
      title: 'LEADERSHIP',
      description: 'Inspiring community progress, organizing impactful projects, and guiding youth toward civic responsibility.',
      icon: <FaUsers className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />
    },
    {
      title: 'COMPASSION',
      description: 'Reaching out with empathy and care to support the vulnerable, sick, elderly, and underprivileged.',
      icon: <FaHeart className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />
    },
    {
      title: 'INTEGRITY',
      description: 'Upholding highest moral standards, transparency, and accountability in every club activity and fund management.',
      icon: <FaShieldAlt className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />
    },
    {
      title: 'TEAMWORK',
      description: 'Fostering unity among members, local citizens, and organizations to achieve greater community impact.',
      icon: <FaHandsHelping className="text-3xl text-[#0056A6] group-hover:text-[#F4B400] transition-colors" />
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {values.map((v, i) => (
        <div
          key={i}
          className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col justify-between"
        >
          <div>
            <div className="w-16 h-16 rounded-2xl bg-[#0056A6]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0056A6] transition-colors">
              {v.icon}
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-2 tracking-wide group-hover:text-[#0056A6] transition-colors">
              {v.title}
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              {v.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
