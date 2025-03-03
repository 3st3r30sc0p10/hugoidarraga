"use client";

import React from 'react';
import Navigation from './Navigation';

interface NavigationWrapperProps {
  currentPath: string;
}

const NavigationWrapper: React.FC<NavigationWrapperProps> = ({ currentPath }) => {
  return <Navigation currentPath={currentPath} />;
};

export default NavigationWrapper; 