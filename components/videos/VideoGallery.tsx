'use client';

import React, { useState } from 'react';
import { VideoItem } from '@/types';
import { VideoCard } from './VideoCard';
import { VideoModal } from './VideoModal';

interface VideoGalleryProps {
  videos: VideoItem[];
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onPlay={setSelectedVideo} />
        ))}
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};
