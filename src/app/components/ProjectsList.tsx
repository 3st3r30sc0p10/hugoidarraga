"use client";

import React from 'react';
import Project, { ProjectData } from './Project';

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