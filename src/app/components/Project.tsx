"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Gallery, Thumbnail } from './Gallery';
import type { ProjectData } from '../types/media';

interface ProjectProps {
  project: ProjectData;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Function to handle image loading errors
  const handleImageError = () => {
    console.error('Failed to load image');
    setImageError(true);
  };

  return (
    <div className="border-l-4 border-accent pl-4 py-4">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      
      {/* Preview thumbnail */}
      {project.media.length > 0 && (
        <div className="mb-4 relative">
          {imageError ? (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">Image not available</span>
            </div>
          ) : (
            <div 
              className="cursor-pointer"
              onClick={() => setIsGalleryOpen(true)}
            >
              <Thumbnail
                item={project.media[0]}
                onClick={() => setIsGalleryOpen(true)}
              />
              {project.media.length > 1 && (
                <p className="text-sm text-gray-500 mt-1">
                  Click to view gallery ({project.media.length} items)
                </p>
              )}
            </div>
          )}
        </div>
      )}

      <div className="mb-2">
        <p className="text-gray-600">{project.description}</p>
        <p className="text-sm text-accent">{project.date}</p>
      </div>

      {project.technologies && (
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {project.status && (
        <div className="mt-2">
          <span className={`px-2 py-1 rounded-full text-sm ${
            project.status === 'Completed' ? 'bg-green-100 text-green-800' :
            project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {project.status}
          </span>
        </div>
      )}

      {!imageError && (
        <Gallery
          items={project.media}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          currentIndex={currentMediaIndex}
          onIndexChange={setCurrentMediaIndex}
        />
      )}
    </div>
  );
};

export default Project; 