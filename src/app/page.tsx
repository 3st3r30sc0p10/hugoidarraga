import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Hugo Idarraga</h1>
        <p className="text-lg text-gray-600">
          Digital Humanities | Minimal Computing | Web Development
        </p>
      </header>

      <nav className="mb-12">
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="#work" className="hover:underline">Work</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="about" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="mb-4">
          I focus on minimal computing approaches in digital humanities, creating sustainable 
          and accessible digital solutions. My work emphasizes simplicity, durability, and 
          minimal use of computing resources.
        </p>
        <p>
          Through careful consideration of technical choices and their implications, 
          I strive to make digital humanities projects more accessible and sustainable.
        </p>
      </section>

      <section id="work" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Selected Work</h2>
        <ul className="space-y-6">
          <li>
            <article>
              <h3 className="text-xl font-semibold mb-2">Minimal Computing Framework</h3>
              <p className="text-gray-600 mb-2">
                A lightweight framework for creating sustainable digital humanities projects
                with minimal resource requirements.
              </p>
              <a href="https://github.com/3st3r30sc0p10/hugoidarraga" 
                 className="inline-block hover:underline"
                 target="_blank"
                 rel="noopener noreferrer">
                View Project →
              </a>
            </article>
          </li>
          <li>
            <article>
              <h3 className="text-xl font-semibold mb-2">Digital Archive Platform</h3>
              <p className="text-gray-600 mb-2">
                A sustainable approach to digital archiving, focusing on long-term 
                preservation and accessibility.
              </p>
              <a href="#" className="inline-block hover:underline">
                Learn More →
              </a>
            </article>
          </li>
        </ul>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-4">
          I'm interested in collaborating on projects that emphasize minimal computing 
          and sustainable digital humanities practices.
        </p>
        <ul className="space-y-2">
          <li>
            <a href="https://github.com/3st3r30sc0p10/hugoidarraga"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:your.email@example.com"
               className="hover:underline">
              Email
            </a>
          </li>
        </ul>
      </section>

      <footer className="text-sm text-gray-600">
        <p>
          Built with minimal computing principles. 
          <a href="https://github.com/3st3r30sc0p10/hugoidarraga" 
             target="_blank"
             rel="noopener noreferrer"
             className="ml-1 hover:underline">
            View Source
          </a>
        </p>
      </footer>
    </main>
  );
}