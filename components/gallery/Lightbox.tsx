'use client';

import React from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onPrev, onNext }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors focus:outline-none"
      >
        <FaTimes className="text-xl" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous Image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
      >
        <FaChevronLeft className="text-2xl" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next Image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
      >
        <FaChevronRight className="text-2xl" />
      </button>

      {/* Main Image container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-4 text-center text-white space-y-1">
          <span className="px-3 py-1 bg-[#F4B400] text-slate-900 text-xs font-bold uppercase rounded-full">
            {item.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold mt-2">{item.title}</h3>
          <p className="text-xs text-slate-400 font-medium">{item.date}</p>
        </div>
      </div>
    </div>
  );
};
