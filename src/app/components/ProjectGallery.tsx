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
  onSelect: (index: number) => void;
  selectedIndex: number;
}

function ProjectGallery({ media, onSelect, selectedIndex }: ProjectGalleryProps) {
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
          <div className="relative w-full h-full">
            <video
              src={media[selectedIndex].url}
              poster={media[selectedIndex].thumbnail}
              controls
              className="w-full h-full object-cover"
            />
            {media[selectedIndex].title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                {media[selectedIndex].title}
              </div>
            )}
          </div>
        )}
      </div>
      {media.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`relative aspect-video rounded-lg overflow-hidden group ${
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
                <div className="relative w-full h-full">
                  <img
                    src={item.thumbnail || '/images/video-thumbnail.jpg'}
                    alt={item.title || `Video thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm">Play Video</span>
                  </div>
                </div>
              )}
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 text-xs truncate">
                  {item.title}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectGallery; 