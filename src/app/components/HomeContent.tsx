"use client";

import React from 'react';
import Image from 'next/image';
import Navigation from './Navigation';

const HomeContent: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="texture-background" aria-hidden="true" />
      
      <Navigation currentPath="/" />

      <div className="absolute top-48 inset-x-0 flex justify-center p-8 md:p-12 lg:p-16">
        <div className="w-full max-w-5xl bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-1">
              <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  Hugo F. Idárraga is a third-year PhD student in the Computational Media, Arts, and Cultures program at Duke University. His research interests lie at the intersection of critical machine learning studies, media theory, and adversarial technologies.
                </p>
                <p>
                  Under the guidance of Professor Mark Hansen, Hugo investigates the political dimensions of artificial neural networks in data classification. His current work explores how contemporary deep learning models may reproduce colonial structures rooted in racial ideologies, while also examining the potential of these technologies to foster critical engagement in politics and art.
                </p>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/images/AlgoFace-Hugo.png"
                  alt="Hugo Idárraga - Algorithmic Portrait"
                  width={400}
                  height={480}
                  className="w-full h-auto rounded-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeContent; 