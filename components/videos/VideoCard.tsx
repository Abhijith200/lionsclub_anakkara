'use client';

import React from 'react';
import Image from 'next/image';
import { VideoItem } from '@/types';
import { FaPlay, FaCalendarAlt } from 'react-icons/fa';

interface VideoCardProps {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  return (
    <div
      onClick={() => onPlay(video)}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full"
    >
      {/* Thumbnail */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors" />

        {/* Animated Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#F4B400] text-slate-900 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
            <FaPlay className="text-xl ml-1" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center text-xs font-semibold text-slate-500 mb-2 space-x-2">
            <FaCalendarAlt className="text-[#0056A6]" />
            <span>{video.date}</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0056A6] transition-colors leading-snug">
            {video.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#0056A6] uppercase tracking-wider">
          <span>Watch Video</span>
        </div>
      </div>
    </div>
  );
};
