import React from 'react';
import SectionLayout from '../components/SectionLayout';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Teaching {
  role: string;
  course: string;
  institution: string;
  period: string;
  description: string;
}

interface ProfessionalExperience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Publication {
  title: string;
  venue: string;
  year: string;
  authors: string;
}

interface Exhibitions {
  title: string;
  venue: string;
  year: string;
  description: string;
}

interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
}

interface Conference {
  title: string;
  event: string;
  location: string;
  date: string;
  year: string;
}

interface Workshop {
  title: string;
  event: string;
  institution: string;
  location: string;
  date: string;
  year: string;
}

interface Service {
  organization: string;
  period: string;
}

interface TechnicalSkill {
  category: string;
  skills: string[];
}

interface Affiliation {
  organization: string;
}

const education: Education[] = [
  {
    degree: "Ph.D. in Computational Media, Arts, and Cultures",
    institution: "Duke University",
    period: "2021 - Present",
    description: "Research focus on critical machine learning studies and media theory."
  },
  {
    degree: "MA in Digital Humanities ",
    institution: "Universidad de Los Andes",
    period: "2019 - 2021",
    description: "Thesis title: Classification and Algorithmic Counter-Identification. Paths of Surveillance, Control, and Evasion"
  },
  {
    degree: "MA in Communication",
    institution: "Pontificia Universidad Javeriana",
    period: "2006 - 2009",
    description: "Thesis title: Sensorium and Internet: An Approach to the Technological Phenomenon from the Work of Walter Benjamin."
  },
  {
    degree: "BA in Philosophy",
    institution: "Universidad Nacional de Colombia ",
    period: "2001 - 2006",
    description: "Thesis title: Development of Marcuse's Thinking on Aesthetic Issues."
  }
];

const teaching: Teaching[] = [
  {
    role: "Teaching Assistant",
    course: "Introduction to Physical Computing",
    institution: "Duke University, Department of Art, Art History & Visual Studies",
    period: "Spring 2025",
    description: "Led discussion sections and workshops on ethical implications of AI systems, supervised student projects, and provided guidance on technical implementations."
  }, 
  {
    role: "Teaching Assistant",
    course: "Special Topics In Arts",
    institution: "Duke University, Department of Art, Art History & Visual Studies",
    period: "Spring 2024",
    description: "Led discussion sections and workshops on ethical implications of AI systems, supervised student projects, and provided guidance on technical implementations."
  },
  {
    role: "Teaching Assistant",
    course: "Generative Art",
    institution: "Duke University, Department of Art, Art History & Visual Studies",
    period: "Spring 2023",
    description: "Led discussion sections and workshops on ethical implications of AI systems, supervised student projects, and provided guidance on technical implementations."
  }, 
  {
    role: "Teaching Assistant",
    course: "Colombia: Space, Time and Difference",
    institution: "Universidad de Los Andes",
    period: "2019 - 2021",
    description: "Led discussion sections and workshops on ethical implications of AI systems, supervised student projects, and provided guidance on technical implementations."
  },                
  {
    role: "Instructor",
    course: "Semiotics of Consumption",
    institution: "Fundación Universidad Central",
    period: "2017 - 2020",
    description: "Designed and delivered lectures on fundamental ML concepts, created assignments focusing on practical applications and ethical considerations."
  },
  {
    role: "Instructor",
    course: "Advertising and Consumption",
    institution: "Fundación Universidad Central",
    period: "2011 - 2015",
    description: "Designed and delivered lectures on fundamental ML concepts, created assignments focusing on practical applications and ethical considerations."
  },
  {
    role: "Instructor",
    course: "Image and Power",
    institution: "Fundación Universidad Central",
    period: "2009",
    description: "Designed and delivered lectures on fundamental ML concepts, created assignments focusing on practical applications and ethical considerations."
  }
];
const professionalExperience: ProfessionalExperience[] = [
  {
    role: "Graduate Assistantship in Data Visualization",
    company: "Franklyn Humanities Institute,Duke University",
    period: "2025 - Present",
    description: "Designed and delivered lectures on fundamental ML concepts, created assignments focusing on practical applications and ethical considerations."
  },
  {
    role: "Digital Assistant",
    company: "Duke University",
    period: "2022 - 2023",
    description: "Designed and delivered lectures on fundamental ML concepts, created assignments focusing on practical applications and ethical considerations."
  },
  {
    role: "Digital Assistant",
    company: "S1 Lab, Duke University",
    period: "Fall 2022",
    description: "Designed and delivered lectures on fundamental ML concepts, created assignments focusing on practical applications and ethical considerations."
  },
  {
    role: "Research Assistant",
    company: "Universidad de Los Andes",
    period: "2021 - 2022",
    description: "Designed and delivered lectures on fundamental ML concepts, created assignments focusing on practical applications and ethical considerations."
  }

];

const publications: Publication[] = [
  {
    title: "Algorithmic Vision and the Dialectic of Visibility",
    venue: "Possibles, 734 - 37",
    year: "2022",
    authors: "Idárraga, Hugo Felipe, and Paloma González Dias."
  },
  {
    title: "Discrimination and Coloniality in the Algorithmic Vision. Artistic approaches for a critical review of people's classification",
    venue: "Revista 180",
    year: "2021",
    authors: "Idárraga, Hugo F."
  },
  {
    title: "Classification and Control: Close Links Analyzed from Artistic Practices at the Heart of Artificial Intelligence",
    venue: "Artnodes",
    year: "2020",
    authors: "Idárraga, Hugo F."
  }
];

const exhibitions: Exhibitions[] = [
  {
    title: "Algorithmic Vision and the Dialectic of Visibility",
    venue: "Possibles, 734 - 37",
    year: "2025",
    description: "Exhibition at Possibles, 734 - 37"
  },
  {
    title: "Will I Grammar with You?",
    venue: "Rubenstein Arts Center, Durham, NC",
    year: "2024",
    description: "Exhibition at Possibles, 734 - 37"
  },
  {
    title: "Playing At the Planck Length",
    venue: "Rubenstein Arts Center, Durham, NC",
    year: "2023",
    description: "Exhibition at Possibles, 734 - 37"
  }
];

const conferences: Conference[] = [
  {
    title: "Artificial Neural Networks and Colonial Classifications. How Race is Calculated?",
    event: "Art, Art History and Visual Studies Graduate Symposium",
    location: "Duke University",
    date: "February 28",
    year: "2025"
  },
  {
    title: "What Is a Queer Classification in Machine Learning?",
    event: "Queer MIT Graduate Symposium",
    location: "Boston, MA",
    date: "May 18-19",
    year: "2024"
  },
  {
    title: "Amerindian philosophy and the defy of machine learning actants classification",
    event: "Universal Ambitions of Computing Workshop",
    location: "Honolulu, HI",
    date: "November 10-16",
    year: "2023"
  },
  {
    title: "Radical Rationalism: Alien Hacking Practices in Machine Learning",
    event: "Society for Literature, Science and the Arts Conference (SLSA)",
    location: "Tucson, AZ",
    date: "October 26-29",
    year: "2023"
  },
  {
    title: "Artificial Neural Networks' Visual Counter-Culture",
    event: "Association for the Study of the Arts (ASAP)",
    location: "Seattle, WA",
    date: "October 4-7",
    year: "2023"
  },
  {
    title: "Sylvia Wynter, 'sociogenic replicator code' and machine learning",
    event: "The Caribbean Philosophical Association",
    location: "Online",
    date: "June 22-24",
    year: "2023"
  },
  {
    title: "Algorithmic Vision and the Dialectic of Visibility",
    event: "ISEA - International Symposium on Electronic Art",
    location: "Barcelona, Spain",
    date: "June 10-16",
    year: "2022"
  },
  {
    title: "Criticisms to classification and control in the artistic practices with artificial intelligence",
    event: "Histories of Artificial Intelligence Summer School",
    location: "University of Cambridge - Online",
    date: "July 12-16",
    year: "2021"
  },
  {
    title: "Adversarial Strategies from Latin America",
    event: "Music in the digital age. Surveillance, technology, resistance, economy and politics",
    location: "Universidad de Los Andes",
    date: "May 25",
    year: "2021"
  },
  {
    title: "Adversarial Examples and Resistance to Classification in Algorithmic Surveillance and Control Systems",
    event: "Digital Humanities Symposium, Michigan State University",
    location: "Online",
    date: "March 13-15",
    year: "2021"
  },
  {
    title: "Classification and surveillance and control systems based on Artificial Intelligence models",
    event: "HD Marathon – Digital Humanities' Colombian Network",
    location: "Bogotá, CO",
    date: "November 14-18",
    year: "2020"
  }
];

const workshops: Workshop[] = [
  {
    title: "ComfyUI: An Introduction to Generative AI Production for Humanist and Artists",
    event: "",
    institution: "Duke University",
    location: "Durham, NC",
    date: "October 22",
    year: "2024"
  },
  {
    title: "What It Is to Be Human in the Age of Algorithms?",
    event: "The Googlization of Knowledge: Information, Ethics, and Technology",
    institution: "Duke University",
    location: "Durham, NC",
    date: "October 8",
    year: "2024"
  },
  {
    title: "We Have You Identified. What World Does AI Perceive, and How Does It Classify It?",
    event: "Digital Culture Week",
    institution: "",
    location: "Bogotá, CO",
    date: "October 15",
    year: "2020"
  }
];

const awards: Award[] = [
  {
    title: "Co-Lab Innovation Grant",
    organization: "Co-Lab, Duke University",
    year: "2024",
    description: "Grant supporting innovative research and development projects."
  },
  {
    title: "Graduate Assistantship in Data Visualization",
    organization: "Mellon Humanities Unbounded Initiative, Entanglement Project",
    year: "2024",
    description: "Assistantship focused on data visualization for humanities research."
  },
  {
    title: "Critical Archives Summer Research Fellowship",
    organization: "John Hope Franklin Humanities Institute",
    year: "2024",
    description: "Fellowship supporting research in critical archives and digital humanities."
  },
  {
    title: "Summer Research Fellowship",
    organization: "The Graduate School, Duke University",
    year: "2024",
    description: "Fellowship supporting summer research activities."
  },
  {
    title: "Global Student Research Fund",
    organization: "Duke Global",
    year: "2023",
    description: "Grant supporting international research initiatives."
  },
  {
    title: "NSF Travel Grant",
    organization: "National Science Foundation",
    year: "2023",
    description: "Grant supporting conference travel and research presentation."
  },
  {
    title: "Co-Lab Innovation Grant",
    organization: "Co-Lab, Duke University",
    year: "2023",
    description: "Grant supporting innovative research and development projects."
  },
  {
    title: "Summer Research Grant",
    organization: "John Hope Franklin Humanities Institute",
    year: "2023",
    description: "Grant supporting summer research in humanities."
  },
  {
    title: "Summer Research Fellowship",
    organization: "The Graduate School, Duke University",
    year: "2023",
    description: "Fellowship supporting summer research activities."
  },
  {
    title: "James B. Duke Fellowship",
    organization: "Duke University",
    year: "2022",
    description: "Prestigious fellowship awarded to outstanding graduate students."
  },
  {
    title: "Cum Laude Degree",
    organization: "Universidad de Los Andes",
    year: "2021",
    description: "Graduated with honors distinction."
  },
  {
    title: "Meritorious Thesis Award",
    organization: "Universidad de Los Andes",
    year: "2021",
    description: "Award for exceptional master's thesis work."
  },
  {
    title: "Francisco Pizano de Brigard Scholarship",
    organization: "Universidad de Los Andes",
    year: "2019",
    description: "Merit-based scholarship supporting graduate studies."
  }
];

const services: Service[] = [
  {
    organization: "Critical Making Working Group, John Hope Franklin Humanities Institute",
    period: "2024 - 2025"
  },
  {
    organization: "Critical Machine Learning Working Group, John Hope Franklin Humanities Institute",
    period: "2023 - 2024"
  },
  {
    organization: "S-1 Speculative Sensation Lab, Duke University",
    period: "2022 - Present"
  }
];

const technicalSkills: TechnicalSkill[] = [
  {
    category: "Programming Languages",
    skills: ["HTML/CSS", "JavaScript", "Python"]
  },
  {
    category: "AI & Creative Tools",
    skills: ["TensorFlow", "ComfyUI", "Adobe Creative Suite"]
  },
  {
    category: "Hardware & Electronics",
    skills: ["Physical Computing", "Raspberry Pi", "Basic Microelectronics"]
  }
];

const affiliations: Affiliation[] = [
  {
    organization: "Society for Literature, Science and the Arts"
  },
  {
    organization: "Association for the Study of the Arts"
  },
  {
    organization: "Caribbean Philosophical Association"
  },
  {
    organization: "S-1 Speculative Sensation Lab, Duke University"
  }
];

export default function CV() {
  return (
    <SectionLayout currentPath="/cv" title="Curriculum Vitae">
      <p className="mb-8">
        Academic and professional experience in computational media, critical theory, and artificial intelligence.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-accent mb-2">{edu.period}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-8">
          {professionalExperience.map((exp, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-accent mb-2">{exp.period}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Teaching</h2>
        <div className="space-y-6">
          {teaching.map((teach, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h3 className="text-xl font-semibold">{teach.course}</h3>
              <p className="text-gray-600">{teach.role} • {teach.institution}</p>
              <p className="text-sm text-accent mb-2">{teach.period}</p>
              <p className="text-gray-700">{teach.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Selected Publications</h2>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold">{pub.title}</h3>
              <p className="text-gray-600">{pub.venue}, {pub.year}</p>
              <p className="text-sm text-gray-700">{pub.authors}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Exhibitions</h2>
        <div className="space-y-4">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold">{exhibition.title}</h3>
              <p className="text-gray-600">{exhibition.venue}</p>
              <p className="text-sm text-accent mb-2">{exhibition.year}</p>
              <p className="text-gray-700">{exhibition.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Conference Activities</h2>
        <div className="space-y-4">
          {conferences.map((conf, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold">{conf.title}</h3>
              <p className="text-gray-600">{conf.event}</p>
              <p className="text-gray-600">{conf.location}</p>
              <p className="text-sm text-accent mb-2">{conf.date}, {conf.year}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Invited Workshops and Master Classes</h2>
        <div className="space-y-4">
          {workshops.map((workshop, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold">{workshop.title}</h3>
              {workshop.event && <p className="text-gray-600">{workshop.event}</p>}
              <p className="text-gray-600">
                {[workshop.institution, workshop.location].filter(Boolean).join(", ")}
              </p>
              <p className="text-sm text-accent mb-2">{workshop.date}, {workshop.year}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Fellowships, Grants and Awards</h2>
        <div className="space-y-4">
          {awards.map((award, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold">{award.title}</h3>
              <p className="text-gray-600">{award.organization}</p>
              <p className="text-sm text-accent mb-2">{award.year}</p>
              <p className="text-gray-700">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Societies, Working Groups and Related Services</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold">{service.organization}</h3>
              <p className="text-sm text-accent mb-2">{service.period}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Professional Affiliations</h2>
        <div className="space-y-4">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <p className="text-lg text-gray-700">{affiliation.organization}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Technical Competences</h2>
        <div className="space-y-6">
          {technicalSkills.map((skillGroup, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold mb-2">{skillGroup.category}</h3>
              <p className="text-gray-700">{skillGroup.skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
    </SectionLayout>
  );
} 