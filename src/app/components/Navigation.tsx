'use client';

import Link from 'next/link';

interface NavigationProps {
  currentPath: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  return (
    <div className="nav-container">
      <nav>
        <h1 className="text-2xl sm:text-3xl text-dark font-bold">
          <Link href="/" className="hover:text-accent transition-colors duration-300">
            hugo idárraga
          </Link>
        </h1>
        
        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8 text-base md:text-lg">
          <Link 
            href="/about"
            className={`${currentPath === '/about' ? 'text-accent' : 'text-dark'} hover:text-accent transition-colors duration-300`}
          >
            about
          </Link>
          <span className="text-accent opacity-70" aria-hidden="true">⌘</span>
          
          <Link 
            href="/writing"
            className={`${currentPath === '/writing' ? 'text-accent' : 'text-dark'} hover:text-accent transition-colors duration-300`}
          >
            writing
          </Link>
          <span className="text-accent opacity-70" aria-hidden="true">⎋</span>
          
          <Link 
            href="/projects"
            className={`${currentPath === '/projects' ? 'text-accent' : 'text-dark'} hover:text-accent transition-colors duration-300`}
          >
            projects
          </Link>
          <span className="text-accent opacity-70" aria-hidden="true">⌥</span>
          
          <Link 
            href="/cv"
            className={`${currentPath === '/cv' ? 'text-accent' : 'text-dark'} hover:text-accent transition-colors duration-300`}
          >
            cv
          </Link>
          <span className="text-accent opacity-70" aria-hidden="true">⎇</span>
          
          <Link 
            href="/contact"
            className={`${currentPath === '/contact' ? 'text-accent' : 'text-dark'} hover:text-accent transition-colors duration-300`}
          >
            contact
          </Link>
        </div>
      </nav>
    </div>
  );
} 