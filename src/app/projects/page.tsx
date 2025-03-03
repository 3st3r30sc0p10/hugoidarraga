import React from 'react';
import SectionLayout from '../components/SectionLayout';
import ProjectsList from '../components/ProjectsList';
import type { ProjectData } from '../components/Project';

const projects: ProjectData[] = [
  {
    title: "Amerindian Becoming. The limits of Machine Learning Computation",
    description: "According to some Amerindian myths, if you change the status of your body, a new identity becomes accessible. For Amerindian shamans, feathers, teeth, paints, and animal skins serve as elements of body modification and transformation. Through this altered ontological status, shamans engage in a cosmopolitics of war and diplomacy. Their bodily variations signify a radical transformation of their human status. Machine learning, as a project, aims to swallow up the entire world by quantifying and classifying it. In this universalist project, all the ontologies have the potential to be computed and incorporated into the recursive feedback loop of value extraction. Is the Amerindian becoming computable for this operationalization? Can machine learning compute the ontological variations according to Amerindian perspectivism? Amerindian Becoming is an installation that highlights the limitations of algorithmic classification and the dismissal of other taxonomies and realities in its universal project of control. In the eyes of algorithmic vision, how can you become a Being? How can you actively transform and question your algorithmic human status?",
    date: "2024",
    status: "Completed",
    technologies: [],
    media: [
      {
        type: "image",
        url: "/projects/becoming/becoming-001.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "image",
        url: "/projects/becoming/becoming-002.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "image",
        url: "/projects/becoming/becoming-003.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "video",
        url: "/projects/becoming/becoming-001-compressed.mp4",
        thumbnail: "/projects/becoming/becoming-001-thumbnail.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "video",
        url: "/projects/becoming/becoming-002.mp4",
        thumbnail: "/projects/becoming/becoming-002-thumbnail.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "video",
        url: "/projects/becoming/becoming-003.mp4",
        thumbnail: "/projects/becoming/becoming-003-thumbnail.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      }
    ]
  },
  {
    title: "Amerindian Defiance of Machine Learning Classification",
    description: "The European conquest of America was not only a source of wealth and power but also a gigantic laboratory in which the West proved its racial superiority and cultural exceptionalism. A vast epistemological project began to name and classify all entities of the New World, pinpointing as the ideal the western image of the Human Being. As white, male, autonomous and powerful enough to construct his own self, the modern, Western model of the Human was the measure against which all entities were to be compared. The famous Theodore de Bry's engravings, informed by this model, represented indigenous people during the 16th and 17th centuries as irrational savages lacking souls, living at the verge of the human-animal boundary. How and to what extent, I ask, does this colonial project, along with its hierarchical epistemology and discriminating ontology, survive in current machine learning models? Amerindian philosophy, whose understanding of the world that the colonial project wanted to erase, defy the colonial bias inside machine learning functions, evidencing the narrowness of the conceptualization of actants and matter that it has to presuppose to calculate all the world. Thus, while Europeans had to test their superiority by probing the metaphysical lack of souls in indigenous beings, the latter looked for any material sign that probes in the Europeans' bodies their godness, showing a divergent way to classify the world. Asking what a human is, I connect machine learning classification models to an anti-colonial classification of the world, where humans and non-humans become entities living in different ontologies and where an endless process of becoming establishes material foundations. Renouncing completeness, complexifying the physical border of the body and the world, accepting the permanent flux of matter, its abstractions and identities, speculatively emerges from the Amazon river a world of many worlds that defies the colonial functioning of Artificial Intelligence in its machine learning approximation.",
    date: "2023",
    status: "Completed",
    technologies: [],
    media: [
      {
        type: "image",
        url: "/projects/amerindian/amerindian_002.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "image",
        url: "/projects/amerindian/amerindian_003.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "image",
        url: "/projects/amerindian/amerindian_004.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "image",
        url: "/projects/amerindian/amerindian_005.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "image",
        url: "/projects/amerindian/amerindian_006.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "image",
        url: "/projects/amerindian/amerindian_007.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      },
      {
        type: "video",
        url: "/projects/amerindian/amerindian-01.mp4",
        thumbnail: "/projects/amerindian/amerindian-thumbnail.jpg",
        title: "Amerindian Defiance of Machine Learning Classification"
      }
    ]
  }
];

export default function Projects() {
  return (
    <SectionLayout currentPath="/projects" title="Projects">
      <p className="mb-8">
        A collection of research projects exploring the intersection of critical theory, machine learning, and artistic practice.
      </p>

      <ProjectsList projects={projects} />
    </SectionLayout>
  );
} 