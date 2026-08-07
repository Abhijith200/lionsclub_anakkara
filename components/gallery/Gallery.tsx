'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types';
import { Lightbox } from './Lightbox';
import { FaSearchPlus } from 'react-icons/fa';

interface GalleryProps {
  items: GalleryItem[];
  showFilter?: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ items, showFilter = true }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ['All', 'Healthcare', 'Education', 'Environment', 'Community', 'Events'];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      {showFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#0056A6] text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(idx)}
            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <span className="w-10 h-10 rounded-full bg-[#F4B400] text-slate-900 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <FaSearchPlus className="text-sm" />
                </span>
              </div>
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-[#0056A6] text-white mb-2 inline-block">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                <p className="text-slate-300 text-xs mt-1">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedIndex !== null ? filteredItems[selectedIndex] : null}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};
