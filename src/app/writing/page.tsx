import React from 'react';
import SectionLayout from '../components/SectionLayout';

interface Article {
  title: string;
  description: string;
  date: string;
  category: {
    name: string;
    url: string;
  };
}

const articles: Article[] = [
  {
    title: "Algorithmic Vision and the Dialectic of Visibility",
    description: "This article proposes to analyze the definition of the human being through the 'eyes' of machine learning models dedicated to the recognition and classification of people. For this, the image of a dialectic of surveillance and social control is offered based on the constant visibility of those affected and the invisibility of those who benefit from this system. The algorithmic vision emerges here as a privileged place to exercise this power, but at the same time as the place of vulnerability, from where it is possible to transform this dialectic and the power relations that it determines. The article then proposes a reflection on the different countersurveillance strategies that take advantage of creativity and aesthetic experience to think about other power relations, that is, about other possibilities to think about what a human being is today.",
    date: "2022",
    category: {
      name: "ISEA2022",
      url: "https://isea2022.isea-international.org/wp-content/uploads/2023/02/ISEA2022-BCN-Proceedings.pdf"
    }
  },
  {
    title: "Discrimination and Coloniality in the Algorithmic Vision. Artistic Approaches for a Critical Review of People's Classification",
    description: "In the light of artistic proposals with digital media and, specifically, with artificial intelligence, this article proposes two perspectives that will critically analyze the discrimination of people in machine learning models; in particular, in those classification models designed to carry out surveillance and social control tasks. On the one hand, it will be proposed that, according to a philosophical version of objectivism, different algorithmic models attempt to 'objectively' classify people based on their bodily features, linking them with psychological and behavioural profiles. The dubious relationship that will be questioned here is that between visible features and invisible characteristics of people, forged by a colonial gaze that is currently reproduced in the operation of algorithmic vision. On the other hand, it will be affirmed that this discrimination is materialized in the same design of the classification models. To do this, in the first place, the importance of statistics for the operation of machine learning will be addressed from the perspective of its historical relationships with police practices; and, secondly, the way in which that colonial gaze is reproduced in the data sets and in the names of the categories under which the images are labelled and classified, thus determining the algorithmically perceived reality by these classification models.",
    date: "2021",
    category: {
      name: "Revista 180",
      url: "https://revista180.udp.cl/index.php/revista180/article/view/1000"
    }
  },
  {
    title: "Identificación, clasificación y control: estrechos vínculos analizados desde las prácticas artísticas en el corazón de la inteligencia artificial",
    description: "La inteligencia artificial (IA) está antecedida de una historia que se remonta a antiguos esfuerzos por crear seres con movimiento e inteligencia artificiales. El objetivo de este artículo es destacarcómo en esta historia, que incluye los desarrollos actuales en el campo del machine learning (ML) y de las redes neuronales profundas (RNP), las tareas de vigilancia y control por medio de la identificación y clasificación de personas, cosas o eventos del mundo, han sido medulares tanto en los mitos o las teorías sobre autómatas, homúnculos, androides, robots o cíborgs, así como en los diferentes intentos por materializarlos. Se afirmará, además, que los deseos y esfuerzos por imaginar y crear estos seres no son ni inocentes ni circunstanciales; más bien, provienen en gran medida de una visión patriarcal del mundo en la que todo lo existente debe ser sometido a una vigilancia que asegure un control sobre lo real. Para ello se recurrirá",
    date: "July 2020",
    category: {
      name: "Artnodes",
      url: "https://www.raco.cat/index.php/Artnodes/article/view/373984"
    }
  }
];

export default function Writing() {
  return (
    <SectionLayout title="Writing">
      <p className="mb-8">
        A collection of essays and articles exploring the intersection of technology, society, and critical theory.
      </p>
      
      <div className="grid grid-cols-1 gap-8">
        {articles.map((article, index) => (
          <article key={index} className="border-b border-gray-200 pb-8 last:border-0">
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <a 
                href={article.category.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-dark transition-colors duration-300"
              >
                {article.category.name}
              </a>
            </div>
            <p className="text-gray-700">{article.description}</p>
          </article>
        ))}
      </div>
    </SectionLayout>
  );
} 