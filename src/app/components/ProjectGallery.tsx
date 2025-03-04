'use client';

import React, { useState } from 'react';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title?: string;
  isExternal?: boolean;
}

interface ProjectGalleryProps {
  media: MediaItem[];
}

export default function ProjectGallery({ media }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
        {media[selectedIndex].type === 'image' ? (
          <img
            src={media[selectedIndex].url}
            alt={media[selectedIndex].title || 'Project media'}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={media[selectedIndex].url}
            poster={media[selectedIndex].thumbnail}
            controls
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {media.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-video rounded-lg overflow-hidden ${
                selectedIndex === index ? 'ring-2 ring-accent' : ''
              }`}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.title || `Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.thumbnail || '/images/video-thumbnail.jpg'}
                  alt={item.title || `Video thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 