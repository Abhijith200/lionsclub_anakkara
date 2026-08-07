'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { FaChevronDown, FaHeart } from 'react-icons/fa';

export const ParallaxHero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBackground = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['0%', '25%']
  );

  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.7],
    shouldReduceMotion ? [1, 1] : [1, 0]
  );

  return (
    <section ref={ref} className="relative h-screen min-h-[650px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src="/images/hero/hero_bg.png"
          alt="Lions Club Anakkara Community Service Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/80" />
      </motion.div>

      {/* Hero Foreground Content */}
      <motion.div
        style={{ opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6 pt-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F4B400]/20 border border-[#F4B400]/40 backdrop-blur-sm text-[#F4B400] text-xs sm:text-sm font-bold uppercase tracking-widest"
        >
          <FaHeart className="text-[#F4B400] text-xs" />
          <span>LIONS CLUB ANAKKARA</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase leading-none drop-shadow-2xl"
        >
          WE <span className="text-[#F4B400]">SERVE</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg sm:text-2xl font-light max-w-3xl mx-auto text-slate-200 leading-relaxed"
        >
          Serving the community with compassion, leadership and dedication.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Button href="#welcome" variant="gold" size="lg">
            Explore Our Work
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
            Contact Us
          </Button>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.a
        href="#welcome"
        aria-label="Scroll to Welcome Section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-2 text-white/80 hover:text-[#F4B400] transition-colors group cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-[#F4B400]"
        >
          <FaChevronDown className="text-sm" />
        </motion.div>
      </motion.a>
    </section>
  );
};
