import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { LeadersHero } from '@/components/leaders/LeadersHero';
import { FeaturedLeader } from '@/components/leaders/FeaturedLeader';
import { LeaderCard } from '@/components/leaders/LeaderCard';
import { LeadershipTimeline } from '@/components/leaders/LeadershipTimeline';
import { LeadershipMessage } from '@/components/leaders/LeadershipMessage';

import { currentLeaders, executiveCommittee, previousPresidents } from '@/data/leaders';
import { FaArrowLeft, FaUsers, FaHandshake, FaHeart } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Leaders | Lions Club Anakkara',
  description:
    'Meet the dedicated leaders and executive team behind Lions Club Anakkara — driving service, compassion and community impact across Kerala.',
};

export default function LeadersPage() {
  const featuredPresident = currentLeaders.find((l) => l.featured);
  const otherLeaders = currentLeaders.filter((l) => !l.featured);

  const stats = [
    { icon: <FaUsers className="text-2xl" />, value: '50+', label: 'Active Members' },
    { icon: <FaHeart className="text-2xl" />, value: '10+', label: 'Years of Service' },
    { icon: <FaHandshake className="text-2xl" />, value: '200+', label: 'Projects Completed' },
  ];

  return (
    <div className="space-y-0">
      {/* ── 1. HERO ── */}
      <LeadersHero />

      {/* ── 2. MEET OUR LEADERS (intro) ── */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 order-2 lg:order-1">
              <Image
                src="/images/activities/medical_camp.png"
                alt="Lions Club Anakkara leaders in action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              {/* Floating stats strip */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950/80 to-transparent">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-white">
                      <p className="text-[#F4B400] font-black text-xl">{stat.value}</p>
                      <p className="text-xs text-slate-300 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#0056A6]/10 text-[#0056A6] border border-[#0056A6]/20 mb-4">
                Our Team
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase mb-4">
                MEET OUR
                <br />
                <span className="text-[#0056A6]">LEADERS</span>
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-[#F4B400] to-[#D89F00] rounded-full mb-6" />
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                Behind every successful service initiative is a team of dedicated people committed to
                serving the community. Our leadership team brings together experience, compassion, and
                an unwavering dedication to the Lions Club motto —{' '}
                <span className="font-semibold text-[#0056A6]">We Serve</span>.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Each officer plays a vital role in steering Lions Club Anakkara through impactful
                service projects spanning healthcare, education, environment and humanitarian relief.
              </p>

              {/* Decorative Lion's values */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {['Leadership', 'Service', 'Community'].map((v) => (
                  <div key={v} className="text-center py-3 px-2 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <p className="text-xs font-bold text-[#0056A6] uppercase tracking-wider">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. OUR PRESIDENT (featured) ── */}
      {featuredPresident && (
        <section className="py-20 sm:py-28 bg-[#F8FAFC]">
          <Container>
            <SectionHeading
              badge="Featured"
              title="OUR PRESIDENT"
              subtitle="Guiding Lions Club Anakkara with vision, dedication and a commitment to service."
            />
            <FeaturedLeader leader={featuredPresident} />
          </Container>
        </section>
      )}

      {/* ── 4. CURRENT LEADERSHIP ── */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <SectionHeading
            badge="2025–26 Board"
            title="CURRENT LEADERSHIP"
            subtitle="The dedicated team leading Lions Club Anakkara through service and community initiatives."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherLeaders.map((leader, idx) => (
              <LeaderCard key={leader.id} leader={leader} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. EXECUTIVE COMMITTEE ── */}
      {executiveCommittee.length > 0 && (
        <section className="py-20 sm:py-28 bg-[#F8FAFC]">
          <Container>
            <SectionHeading
              badge="Committee"
              title="EXECUTIVE COMMITTEE"
              subtitle="Dedicated committee members who drive the operational excellence of Lions Club Anakkara."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {executiveCommittee.map((member, idx) => (
                <LeaderCard key={member.id} leader={member} index={idx} size="compact" />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 6. LEADERSHIP MESSAGE ── */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <LeadershipMessage />
        </Container>
      </section>

      {/* ── 7. PREVIOUS PRESIDENTS / TIMELINE ── */}
      {previousPresidents.length > 0 && (
        <section className="py-20 sm:py-28 bg-[#F8FAFC]">
          <Container>
            <SectionHeading
              badge="Our History"
              title="OUR LEADERSHIP JOURNEY"
              subtitle="A proud legacy of presidents who have shaped the spirit of service at Lions Club Anakkara."
            />
            <div className="max-w-3xl mx-auto">
              <LeadershipTimeline presidents={previousPresidents} />
            </div>
          </Container>
        </section>
      )}

      {/* ── 8. CALL TO ACTION ── */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-[#0056A6] text-white text-center py-16 sm:py-20 px-6 sm:px-12">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F4B400]/5 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#0056A6]/30 blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10">
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#F4B400]/20 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-widest mb-8">
                We Serve
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
                TOGETHER,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] to-[#D89F00]">
                  WE SERVE
                </span>
              </h2>

              <div className="w-20 h-1 bg-[#F4B400] mx-auto rounded-full mb-6" />

              <p className="text-slate-300 text-lg sm:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Inspired by leadership.{' '}
                <span className="text-white font-semibold">Driven by service.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/about" variant="gold" size="lg">
                  <FaArrowLeft className="mr-2 text-sm" />
                  Back to About
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white hover:text-slate-900">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
