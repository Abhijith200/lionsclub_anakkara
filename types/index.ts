export interface Activity {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  date: string;
  category: string;
  location?: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  date: string;
  category: 'Healthcare' | 'Education' | 'Environment' | 'Community' | 'Events';
}

export interface VideoItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  videoType: 'youtube' | 'local';
  thumbnail: string;
  date: string;
}

export interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  day: string;
  month: string;
  location: string;
  time?: string;
}

export interface Leader {
  id: number;
  name: string;
  role: string;
  photo: string;
  bio?: string;
  email?: string;
  phone?: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  category: string;
}

export interface ValueItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}
