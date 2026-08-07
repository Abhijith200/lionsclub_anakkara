import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ParallaxBanner } from '@/components/common/ParallaxBanner';
import { Timeline } from '@/components/about/Timeline';
import { Values } from '@/components/about/Values';
import { Leadership } from '@/components/about/Leadership';
import { Gallery } from '@/components/gallery/Gallery';
import { VideoGallery } from '@/components/videos/VideoGallery';

import { leadershipData } from '@/data/leadership';
import { galleryData } from '@/data/gallery';
import { videosData } from '@/data/videos';
import { FaBullseye, FaEye, FaHospital, FaBook, FaSeedling, FaUsers, FaChild, FaHands } from 'react-icons/fa';

export const metadata = {
  title: 'About Lions Club Anakkara | Serving with Purpose',
  description: 'Learn about Lions Club Anakkara history, mission, core values, leadership team, and humanitarian community projects in Kerala.',
};

export default function AboutPage() {
  const projectCategories = [
    { title: 'Healthcare', icon: <FaHospital className="text-2xl text-[#0056A6]" />, desc: 'Free eye camps, medical health drives, and blood donation.' },
    { title: 'Education', icon: <FaBook className="text-2xl text-[#0056A6]" />, desc: 'Scholarships, learning kits, and school infrastructure aid.' },
    { title: 'Environment', icon: <FaSeedling className="text-2xl text-[#0056A6]" />, desc: 'Tree sapling plantation, clean water, and green conservation.' },
    { title: 'Community Welfare', icon: <FaUsers className="text-2xl text-[#0056A6]" />, desc: 'Monthly ration support, shelter aid, and senior care.' },
    { title: 'Youth Development', icon: <FaChild className="text-2xl text-[#0056A6]" />, desc: 'Leadership workshops, sports encouragement, and skill development.' },
    { title: 'Humanitarian Assistance', icon: <FaHands className="text-2xl text-[#0056A6]" />, desc: 'Rapid flood relief, emergency aid, and disaster rehabilitation.' }
  ];

  return (
    <div className="space-y-0">
      {/* 1. About Hero */}
      <ParallaxBanner
        title="ABOUT US"
        subtitle="Lions Club Anakkara — Serving with Purpose."
        imageSrc="/images/hero/hero_bg.png"
        height="h-96 sm:h-[420px]"
      />

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0056A6] to-[#003F7D] text-white shadow-xl overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="w-14 h-14 rounded-2xl bg-[#F4B400] text-slate-900 flex items-center justify-center text-2xl mb-6 shadow-md">
                <FaBullseye />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-wider text-[#F4B400]">
                OUR MISSION
              </h3>
              <p className="text-lg text-slate-100 font-light leading-relaxed">
                To serve the community through compassion, volunteerism and meaningful humanitarian action. We empower individuals to volunteer and meet humanitarian needs.
              </p>
            </div>

            {/* Vision Card */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-[#0056A6] text-white shadow-xl overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 rounded-full bg-[#F4B400]/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="w-14 h-14 rounded-2xl bg-[#F4B400] text-slate-900 flex items-center justify-center text-2xl mb-6 shadow-md">
                <FaEye />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-wider text-[#F4B400]">
                OUR VISION
              </h3>
              <p className="text-lg text-slate-100 font-light leading-relaxed">
                To build a stronger, healthier and more inclusive community through service. We aspire to be the global leader in community and humanitarian service.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Club History & Timeline */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge="OUR JOURNEY"
            title="CLUB HISTORY & MILESTONES"
            subtitle="A legacy of dedicated service and community transformation in Anakkara."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Timeline />
            </div>
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="relative h-96 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="/images/activities/medical_camp.png"
                  alt="Lions Club History Photo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-slate-900">
                  <p className="font-extrabold text-[#0056A6]">10+ Years of Unbroken Commitment</p>
                  <p className="text-xs text-slate-600 mt-1">Transforming lives through healthcare camps, education aid, and environmental action.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <SectionHeading
            badge="GUIDING PRINCIPLES"
            title="CORE VALUES"
            subtitle="The fundamental pillars that define every Lions Club action and decision."
          />
          <Values />
        </Container>
      </section>

      {/* 5. Leadership Team */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge="CLUB LEADERSHIP"
            title="MEET OUR LEADERS"
            subtitle="Dedicated officers steering Lions Club Anakkara toward impactful service."
          />
          <Leadership leaders={leadershipData} />
        </Container>
      </section>

      {/* 6. Community Projects */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <SectionHeading
            badge="MAJOR INITIATIVES"
            title="COMMUNITY PROJECTS"
            subtitle="Key focus areas where our volunteers create lasting positive change."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((proj, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#0056A6]/10 flex items-center justify-center mb-4">
                  {proj.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{proj.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{proj.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. About Page Gallery */}
      <section id="gallery" className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge="HISTORICAL & RECENT"
            title="ACTIVITY GALLERY"
            subtitle="Explore photos from past initiatives across all service categories."
          />
          <Gallery items={galleryData} showFilter={true} />
        </Container>
      </section>

      {/* 8. About Page Videos */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <SectionHeading
            badge="VIDEO HIGHLIGHTS"
            title="FEATURED DOCUMENTARIES"
            subtitle="Watch highlights of major club accomplishments and humanitarian drives."
          />
          <VideoGallery videos={videosData} />
        </Container>
      </section>
    </div>
  );
}
