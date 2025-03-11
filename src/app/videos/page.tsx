'use client';

import React, { useState } from 'react';
import SectionLayout from '../components/SectionLayout';
import { projectVideos } from '../data/videos';

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-16">
        {projectVideos.map((project) => (
          <div key={project.projectId} className="space-y-8">
            {/* Centered Project Title */}
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <div className="text-xs text-gray-600">
                <span>{project.date}</span>
              </div>
            </div>
            
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Video Thumbnails */}
              <div className="grid grid-cols-1 gap-6">
                {project.videos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video.id)}
                    className="w-full relative group"
                  >
                    <div className="relative aspect-[16/4.5] bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-base font-medium">Play Video</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Column - Project Description */}
              <div className="prose prose-sm">
                <div className="text-gray-700 leading-relaxed text-sm">
                  {project.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-8 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-video">
              <video
                src={projectVideos.flatMap(p => p.videos).find(v => v.id === selectedVideo)?.url}
                poster={projectVideos.flatMap(p => p.videos).find(v => v.id === selectedVideo)?.thumbnail}
                controls
                className="w-full h-full object-contain"
                autoPlay
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 