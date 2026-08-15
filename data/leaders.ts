export interface LeaderEntry {
  id: number;
  name: string;
  position: string;
  image: string;
  year?: string;
  message?: string;
  achievement?: string;
  featured?: boolean;
}

export const currentLeaders: LeaderEntry[] = [
  {
    id: 1,
    name: '[Leader Name]',
    position: 'President',
    image: '/images/leaders/president.jpg',
    message:
      "It is a profound honour to lead Lions Club Anakkara. Our mission has always been to serve with compassion, integrity, and an unwavering commitment to community betterment. Together, we will continue to inspire one another and create lasting, meaningful impact across every corner of Anakkara.",
    featured: true,
  },
  {
    id: 2,
    name: '[Leader Name]',
    position: 'Immediate Past President',
    image: '/images/leaders/immediate-past-president.jpg',
  },
  {
    id: 3,
    name: '[Leader Name]',
    position: 'First Vice President',
    image: '/images/leaders/first-vice-president.jpg',
  },
  {
    id: 4,
    name: '[Leader Name]',
    position: 'Second Vice President',
    image: '/images/leaders/second-vice-president.jpg',
  },
  {
    id: 5,
    name: '[Leader Name]',
    position: 'Secretary',
    image: '/images/leaders/secretary.jpg',
  },
  {
    id: 6,
    name: '[Leader Name]',
    position: 'Treasurer',
    image: '/images/leaders/treasurer.jpg',
  },
];

export const executiveCommittee: LeaderEntry[] = [
  { id: 101, name: '[Member Name]', position: 'Director', image: '/images/leaders/member-placeholder.jpg' },
  { id: 102, name: '[Member Name]', position: 'Director', image: '/images/leaders/member-placeholder.jpg' },
  { id: 103, name: '[Member Name]', position: 'Director', image: '/images/leaders/member-placeholder.jpg' },
  { id: 104, name: '[Member Name]', position: 'Director', image: '/images/leaders/member-placeholder.jpg' },
  { id: 105, name: '[Member Name]', position: 'Membership Chairman', image: '/images/leaders/member-placeholder.jpg' },
  { id: 106, name: '[Member Name]', position: 'Service Chairman', image: '/images/leaders/member-placeholder.jpg' },
  { id: 107, name: '[Member Name]', position: 'Public Relations Officer', image: '/images/leaders/member-placeholder.jpg' },
  { id: 108, name: '[Member Name]', position: 'Youth Chairman', image: '/images/leaders/member-placeholder.jpg' },
];

export const previousPresidents: LeaderEntry[] = [
  {
    id: 201,
    name: '[Leader Name]',
    position: 'President',
    year: '2025–26',
    achievement: 'Led flagship eye camp serving 500+ patients.',
    image: '/images/leaders/member-placeholder.jpg',
  },
  {
    id: 202,
    name: '[Leader Name]',
    position: 'President',
    year: '2024–25',
    achievement: 'Launched Lions Community Centre inauguration.',
    image: '/images/leaders/member-placeholder.jpg',
  },
  {
    id: 203,
    name: '[Leader Name]',
    position: 'President',
    year: '2023–24',
    achievement: 'Coordinated major flood relief across 6 panchayath wards.',
    image: '/images/leaders/member-placeholder.jpg',
  },
  {
    id: 204,
    name: '[Leader Name]',
    position: 'President',
    year: '2022–23',
    achievement: 'Initiated 500-tree plantation Green Mission.',
    image: '/images/leaders/member-placeholder.jpg',
  },
  {
    id: 205,
    name: '[Leader Name]',
    position: 'President',
    year: '2021–22',
    achievement: 'Distributed emergency aid to 1,000+ families during pandemic.',
    image: '/images/leaders/member-placeholder.jpg',
  },
  {
    id: 206,
    name: '[Leader Name]',
    position: 'President',
    year: '2020–21',
    achievement: 'Conducted SightFirst vision camps for rural communities.',
    image: '/images/leaders/member-placeholder.jpg',
  },
];
