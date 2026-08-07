import { VideoItem } from '@/types';

export const videosData: VideoItem[] = [
  {
    id: 1,
    title: 'Lions Club Anakkara — 10 Years of Service Journey',
    description: 'A tribute video showcasing a decade of continuous community service, eye camps, and humanitarian relief in Anakkara.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Clean sample embed url
    videoType: 'youtube',
    thumbnail: '/images/hero/hero_bg.png',
    date: 'August 2026'
  },
  {
    id: 2,
    title: 'Highlights: Mega Health & Eye Screening Camp',
    description: 'Documentary coverage of our healthcare initiative benefiting over 400 families in Anakkara Panchayath.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    thumbnail: '/images/activities/medical_camp.png',
    date: 'July 2026'
  },
  {
    id: 3,
    title: 'Green Earth Initiative — Tree Plantation Drive',
    description: 'Watch how our volunteers and local school students joined hands to plant 500 saplings.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoType: 'youtube',
    thumbnail: '/images/activities/tree_plantation.png',
    date: 'June 2026'
  }
];
