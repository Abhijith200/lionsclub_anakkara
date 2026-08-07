'use client';

import React from 'react';
import { VideoItem } from '@/types';
import { FaTimes } from 'react-icons/fa';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Video Player"
          className="absolute top-4 right-4 z-50 text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-800 p-2.5 rounded-full transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="relative w-full aspect-video bg-black">
          {video.videoType === 'youtube' ? (
            <iframe
              src={`${video.videoUrl}?autoplay=1`}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video src={video.videoUrl} controls autoPlay className="w-full h-full object-contain" />
          )}
        </div>

        <div className="p-6 text-white space-y-2">
          <span className="text-xs text-[#F4B400] font-bold uppercase tracking-wider">{video.date}</span>
          <h3 className="text-xl sm:text-2xl font-bold">{video.title}</h3>
          <p className="text-slate-300 text-sm">{video.description}</p>
        </div>
      </div>
    </div>
  );
};
