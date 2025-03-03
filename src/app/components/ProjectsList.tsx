"use client";

import React from 'react';
import Project from './Project';
import type { ProjectData } from '../types/media';

interface ProjectsListProps {
  projects: ProjectData[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList; 