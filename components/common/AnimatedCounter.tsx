'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/Container';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  { value: 10, suffix: '+', label: 'Years', sublabel: 'of Service' },
  { value: 100, suffix: '+', label: 'Projects', sublabel: 'Completed' },
  { value: 500, suffix: '+', label: 'Volunteers', sublabel: 'Engaged' },
  { value: 20, suffix: '+', label: 'Programs', sublabel: 'Conducted' }
];

export const AnimatedCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    const timers = stats.map((stat, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentCount = Math.floor(stat.value * Math.min(progress, 1));

        setCounts((prev) => {
          const next = [...prev];
          next[index] = currentCount;
          return next;
        });

        if (currentStep >= steps) {
          clearInterval(timers[index]);
        }
      }, stepTime);
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-slate-900 text-white">
      {/* Background Parallax Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hero/hero_bg.png"
          alt="Impact Statistics Background"
          fill
          className="object-cover"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F4B400]/40 transition-colors">
              <div className="text-4xl sm:text-6xl font-black text-[#F4B400] mb-2 tracking-tight">
                {counts[idx]}
                {stat.suffix}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider">{stat.label}</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
