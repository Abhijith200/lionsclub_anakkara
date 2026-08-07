import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3 ${
          light 
            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' 
            : 'bg-[#0056A6]/10 text-[#0056A6] border border-[#0056A6]/20'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
        <span className="block h-1.5 w-20 bg-[#F4B400] mt-3 rounded-full mx-auto" style={{ marginLeft: centered ? 'auto' : '0' }} />
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl ${
          centered ? 'mx-auto' : ''
        } ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
