'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Your Name
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              About
            </Link>
            <Link href="/#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              Projects
            </Link>
            <Link href="/#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              Skills
            </Link>
            <Link href="/#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#about" className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              About
            </Link>
            <Link href="/#projects" className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              Projects
            </Link>
            <Link href="/#skills" className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              Skills
            </Link>
            <Link href="/#contact" className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}