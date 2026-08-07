import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ParallaxHero } from '@/components/hero/ParallaxHero';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { ServiceCard } from '@/components/activities/ServiceCard';
import { ActivityCard } from '@/components/activities/ActivityCard';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { Gallery } from '@/components/gallery/Gallery';
import { VideoGallery } from '@/components/videos/VideoGallery';
import { ParallaxBanner } from '@/components/common/ParallaxBanner';
import { EventCard } from '@/components/events/EventCard';

import { servicesData } from '@/data/services';
import { activitiesData } from '@/data/activities';
import { galleryData } from '@/data/gallery';
import { videosData } from '@/data/videos';
import { eventsData } from '@/data/events';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <ParallaxHero />

      {/* 2. Welcome / Introduction Section */}
      <section id="welcome" className="py-20 sm:py-28 bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative h-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <Image
                src="/images/hero/hero_bg.png"
                alt="Lions Club Anakkara Volunteers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-slate-900 shadow-xl">
                <p className="font-extrabold text-[#0056A6] text-sm uppercase tracking-wider">Chartered Organization</p>
                <p className="text-xs text-slate-600 mt-0.5">Dedicated to District 318 Humanitarian Causes</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#0056A6]/10 text-[#0056A6] text-xs font-bold uppercase tracking-widest border border-[#0056A6]/20">
                WHO WE ARE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Lions Club <span className="text-[#0056A6]">Anakkara</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We are committed to serving our community through humanitarian activities, social initiatives and volunteer-driven programs. Founded on the principle of unconditional service, our club brings together compassionate leaders to uplift lives across Anakkara and beyond.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Organizing free medical, eye & cardiology checkup camps',
                  'Providing educational aid & scholarships to rural students',
                  'Environmental tree plantation drives & clean water access'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-700 font-medium text-sm sm:text-base">
                    <FaCheckCircle className="text-[#F4B400] text-lg flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/about" variant="primary" size="lg">
                  <span>Learn More</span>
                  <FaArrowRight className="ml-2 text-xs" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Service / Impact Section */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge="OUR CORE IMPACT"
            title="SERVING OUR COMMUNITY"
            subtitle="Making a meaningful difference through action."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Statistics Section (Animated Counters + Parallax) */}
      <AnimatedCounter />

      {/* 5. Latest Activities */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <SectionHeading
            badge="RECENT INITIATIVES"
            title="LATEST ACTIVITIES"
            subtitle="Explore our most recent service camps, community drives, and social welfare programs."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activitiesData.slice(0, 3).map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/about#gallery" variant="outline" size="md">
              View All Activities & Gallery
            </Button>
          </div>
        </Container>
      </section>

      {/* 6. Daily Image Gallery */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge="PHOTO GALLERY"
            title="MOMENTS OF SERVICE"
            subtitle="Visual highlights from our field activities, medical camps, and social gatherings."
          />
          <Gallery items={galleryData} showFilter={true} />
        </Container>
      </section>

      {/* 7. Video Gallery */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <SectionHeading
            badge="VIDEO DOCUMENTARIES"
            title="WATCH OUR JOURNEY"
            subtitle="Watch stories of impact, volunteer interviews, and community transformations."
          />
          <VideoGallery videos={videosData} />
        </Container>
      </section>

      {/* 8. Parallax Story Banner */}
      <ParallaxBanner
        title="TOGETHER WE SERVE."
        subtitle="TOGETHER WE MAKE A DIFFERENCE."
        imageSrc="/images/hero/hero_bg.png"
      />

      {/* 9. Upcoming Events */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container>
          <SectionHeading
            badge="MARK YOUR CALENDAR"
            title="UPCOMING EVENTS"
            subtitle="Join us at our upcoming service programs, medical drives, and community events."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </section>

      {/* 10. Call-To-Action */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-[#0056A6] via-[#003F7D] to-slate-900 text-white text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F4B400_1px,transparent_1px)] [background-size:16px_16px]" />
        <Container className="relative z-10 space-y-6 max-w-4xl">
          <span className="px-4 py-1.5 rounded-full bg-[#F4B400]/20 border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-widest">
            BECOME A PARTNER IN SERVICE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Want to know more about our work?
          </h2>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-light">
            Join us in making a difference. Whether you want to volunteer, donate, or request assistance for a cause, we are here for you.
          </p>
          <div className="pt-4">
            <Button href="/contact" variant="gold" size="lg">
              Contact Lions Club Anakkara
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
