'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ParallaxBannerProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  height?: string;
}

export const ParallaxBanner: React.FC<ParallaxBannerProps> = ({
  imageSrc = '/images/hero/hero_bg.png',
  title = 'TOGETHER WE SERVE.',
  subtitle = 'TOGETHER WE MAKE A DIFFERENCE.',
  height = 'h-80 sm:h-96'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['-15%', '15%']
  );

  return (
    <div ref={containerRef} className={`relative ${height} w-full overflow-hidden flex items-center justify-center`}>
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <Image
          src={imageSrc}
          alt="Lions Club Parallax Banner"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0056A6]/80 via-slate-900/80 to-[#0056A6]/80" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white drop-shadow-lg leading-tight">
          &quot;{title} <br className="hidden sm:block" />
          <span className="text-[#F4B400]">{subtitle}</span>&quot;
        </h3>
        <div className="w-24 h-1 bg-[#F4B400] mx-auto rounded-full" />
      </div>
    </div>
  );
};
