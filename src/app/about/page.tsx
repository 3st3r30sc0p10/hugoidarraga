import React from 'react';
import SectionLayout from '../components/SectionLayout';

export default function About() {
  return (
    <SectionLayout currentPath="/about" title="About Me">
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Research Interests</h2>
        <p className="mb-4">
        I am a third-year PhD student in the Computational Media, Arts, and Cultures program at Duke University, with a multidisciplinary academic background in philosophy (BA), communication (MA), and digital humanities (MA). My research lies at the intersection of critical machine learning studies, media theory, and adversarial technologies, focusing on the political dimensions of artificial neural networks in data classification. Under the guidance of Professor Mark Hansen, I investigate how contemporary deep learning models may reproduce colonial structures rooted in racial ideologies, while also exploring their potential to foster critical engagement in politics and art. My work draws on critical theory, visual studies, and Global South onto-epistemologies, aiming to provide a nuanced understanding of the political and artistic implications of neural networks technologies.
        </p>
      </section>
    </SectionLayout>
  );
} 