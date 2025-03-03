"use client";

import React, { useState, useCallback, useRef, useEffect } from 'react';
import Image from 'next/image';

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title?: string;
  isExternal?: boolean;
}

interface GalleryProps {
  items: MediaItem[];
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

interface ThumbnailProps {
  item: MediaItem;
  onClick: () => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ item, onClick }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  if (error) {
    return (
      <div 
        className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <span className="text-gray-500">Image not available</span>
      </div>
    );
  }

  return (
    <div 
      className="relative cursor-pointer w-full h-48 overflow-hidden rounded-lg"
      onClick={onClick}
    >
      {item.type === 'image' ? (
        <div className="relative w-full h-full">
          <Image
            src={item.thumbnail || item.url}
            alt={item.title || ''}
            fill
            className="object-cover"
            onError={handleError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={60}
          />
        </div>
      ) : (
        <div className="relative w-full h-full">
          {item.thumbnail ? (
            <div className="relative w-full h-full">
              <Image
                src={item.thumbnail}
                alt={item.title || ''}
                fill
                className="object-cover"
                onError={handleError}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={60}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <span className="text-4xl text-white">▶️</span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-4xl">▶️</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Gallery: React.FC<GalleryProps> = ({
  items,
  isOpen,
  onClose,
  currentIndex,
  onIndexChange,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleImageError = () => {
    console.error('Failed to load image:', items[currentIndex].url);
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setImageError(false);
  };

  const handleNext = useCallback(() => {
    setIsLoading(true);
    setImageError(false);
    onIndexChange((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onIndexChange]);

  const handlePrev = useCallback(() => {
    setIsLoading(true);
    setImageError(false);
    onIndexChange((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onIndexChange]);

  // Reset loading state when current item changes
  useEffect(() => {
    setIsLoading(true);
    setImageError(false);
  }, [currentIndex]);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await galleryRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Handle fullscreen change event
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape' && isFullscreen) document.exitFullscreen();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, isFullscreen, handleNext, handlePrev]);

  if (!isOpen) return null;

  const currentItem = items[currentIndex];

  return (
    <div 
      ref={galleryRef}
      className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col ${
        isFullscreen ? 'fullscreen' : ''
      }`}
    >
      <div className="absolute top-4 right-4 z-50 flex gap-4">
        <button
          onClick={toggleFullscreen}
          className="text-white text-2xl hover:text-gray-300"
          title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? '⤓' : '⤢'}
        </button>
        <button
          onClick={onClose}
          className="text-white text-2xl hover:text-gray-300"
          title="Close gallery"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center relative p-4">
        <button
          onClick={handlePrev}
          className="absolute left-4 text-white text-4xl hover:text-gray-300 focus:outline-none z-10"
          title="Previous"
        >
          ‹
        </button>

        <div className={`relative w-full h-full flex items-center justify-center ${
          isFullscreen ? '' : 'max-w-6xl max-h-[80vh]'
        }`}>
          {imageError ? (
            <div className="w-full h-[400px] bg-gray-800 flex items-center justify-center rounded-lg">
              <span className="text-white">Image not available</span>
            </div>
          ) : currentItem.type === 'image' ? (
            <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
              <div className="relative w-full h-full">
                <Image
                  src={currentItem.url}
                  alt={currentItem.title || ''}
                  fill
                  className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  sizes={isFullscreen ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"}
                  priority
                  quality={90}
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                  style={{ maxHeight: '80vh' }}
                />
              </div>
              {currentItem.title && !isLoading && !imageError && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  {currentItem.title}
                </div>
              )}
            </div>
          ) : (
            <div className={`relative w-full ${isFullscreen ? 'h-full' : 'h-0 pb-[56.25%]'}`}>
              {currentItem.isExternal ? (
                <iframe
                  src={currentItem.url}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={currentItem.url}
                  controls
                  className="absolute inset-0 w-full h-full"
                  title={currentItem.title}
                  onError={handleImageError}
                  poster={currentItem.thumbnail}
                />
              )}
            </div>
          )}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 text-white text-4xl hover:text-gray-300 focus:outline-none z-10"
          title="Next"
        >
          ›
        </button>
      </div>

      <div className="p-4 bg-black bg-opacity-50">
        <div className="flex gap-2 overflow-x-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-24 h-24 ${
                index === currentIndex ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => {
                setIsLoading(true);
                setImageError(false);
                onIndexChange(index);
              }}
            >
              <Thumbnail item={item} onClick={() => onIndexChange(index)} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: black;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
};

export { Gallery, Thumbnail }; 