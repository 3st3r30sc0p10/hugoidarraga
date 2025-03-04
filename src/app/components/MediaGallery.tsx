import React from 'react';

interface MediaItem {
  type: string;
  url: string;
  title?: string;
}

interface MediaGalleryProps {
  media: MediaItem[];
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  return (
    <div className="space-y-4">
      {media.map((item, index) => (
        <div key={index} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={item.url}
            alt={item.title || 'Project media'}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
} 