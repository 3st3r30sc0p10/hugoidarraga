import React from 'react';
import SectionLayout from '../components/SectionLayout';

export default function About() {
  return (
    <SectionLayout title="">
      <section className="mb-12">
        <p className="mb-4">
          Hugo F. Idárraga is a third-year PhD student in the Computational Media, Arts, and Cultures program at Duke University. His research interests lie at the intersection of critical machine learning studies, media theory, and adversarial technologies.
        </p>
        <p>
        Hugo investigates the critical dimensions of artificial neural networks in data classification. His current work explores how data classification functions in contemporary deep learning models, while also examining the potential of these technologies to foster artistic and aesthetic engagements with algorithmic systems.
        </p>
      </section>
    </SectionLayout>
  );
} 