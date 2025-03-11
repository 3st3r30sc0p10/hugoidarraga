interface Video {
  id: string;
  url: string;
  thumbnail: string;
  date: string;
  projectId: string;
  sequence: number; // For ordering videos within a project
}

interface ProjectVideos {
  projectId: string;
  title: string;
  description: string;
  date: string;
  videos: Video[];
}

export const projectVideos: ProjectVideos[] = [
    //Identity adn Computation
      {
        projectId: 'identity-computation',
        title: 'Identity and Computation: Using Art to Question the Limitations of Machine Learning',
        description: 'Duke University Ph.D. student in Computational Media, Arts & Cultures Hugo Idarraga Franco discusses his thesis, which challenges the idea of some machine learning practitioners that the computability of the world is doable. His hypothesis is that machine learning indeed has limitations for classifying the world, which he tests through an interactive art installation. Art installation footage courtesy of Yasaman Baghban.',
        date: '2024',
        videos: [
          {
            id: 'identity-computation-1',
            url: '/videos/identity-computation/identity-computation-001.mp4',
            thumbnail: '/videos/identity-computation/identity-computation-001-thumbnail.jpg',
            date: '2025',
            projectId: 'identity-computation',
            sequence: 1
          }
        ]
      },
//Fugitive Traces
  {
    projectId: 'fugitive-traces',
    title: 'Fugitive Traces: Algorithmic Tracking and the Poetics of Bird Movements',
    description: 'Flying within the space of ambiguity—neither fully of the earth nor the sky—birds project images of freedom for those devoid of wings and of escape for those under the gaze of their masters. In their movements, birds exhibit an embodied leeway, a fluidity that defies fixed categorization and resists continuous pattern recognition. As the poet Saint-John Perse observed, for birds, “alternation is its law, ambiguity its realm.” Shelving them in natural history museums or capturing them in watercolor prints from hand-engraved plates, all attempts to contain birds within taxonomical cages—or to unpack their signs—ultimately fail, as they persistently evade such constraints. In every effort to assign meaning to their colors, shapes, songs, and flight patterns, new perceptual difficulties and epistemological challenges emerge, for birds invite us to continually renew our percepts and perceptions, overflowing and disrupting the order of signification. Like enslaved individuals fleeing plantations, disguised by the color of the night, or the cunning of Indigenous peoples circumventing oppression, camouflaged in the woods, birds embrace the virtuality of the fugitive—the ontological incompleteness of the Other—eluding all attempts at clarity and transparency. Tracking birds movements in ornithology has functioned analogously to practices imposed on racialized populations. The appropriation of the "birds-eye view" was a dream embodied in new technologies of vision that dominate and order everything under their gaze. Inextricably entangled with race, the surveillance, control, and classification of birds extended the technological methods applied to Indigenous and Black peoples, structuring the world according to the logic imposed by the color line. Paying attention to differences is a political decision, and tracking birds through artificial neural networks serves as a bridge that allows us to learn, through the writing traced by their movements, the limits of machine calculations. Like an ensemble of traces encoding meaning, the algorithmic tracking of birds writing—drawn in their aerial acrobatics, postures, and shapes—becomes an opportunity to contemplate strategies of fugitivity, counter-classification, and camouflage, as well as the racial inferences embedded in dense neural network computations.',
    date: '2025',
    videos: [
      {
        id: 'fugitive-traces-1',
        url: '/videos/fugitive-traces/fugitive-traces-001.mp4',
        thumbnail: '/videos/fugitive-traces/fugitive-traces-001-thumbnail.jpg',
        date: '2025',
        projectId: 'fugitive-traces',
        sequence: 1
      }
    ]
  },
  
  // Amerindian Becoming Project Videos
  {
    projectId: 'becoming',
    title: 'Amerindian Becoming. The Limits of Machine Learning Computation',
    description: 'According to some Amerindian myths, if you change the status of your body, a new identity becomes accessible. For Amerindian shamans, feathers, teeth, paints, and animal skins serve as elements of body modification and transformation. Through this altered ontological status, shamans engage in a cosmopolitics of war and diplomacy. Their bodily variations signify a radical transformation of their human status. Machine learning, as a project, aims to swallow up the entire world by quantifying and classifying it. In this universalist project, all the ontologies have the potential to be computed and incorporated int the recursive feedback loop of value extraction. Is the Amerindian becoming computable for this operationalization? Can machine learning compute the ontological variations according to Amerindian perspectivism? Amerindian Becoming is an installation that highlights the limitations of algorithmic classification and the dismissal of other taxonomies and realities in its universal project of control. In the eyes of algorithmic vision, how can you become a Being?  How can you actively transform and question your algorithmic human status?',
    date: '2024',
    videos: [
      {
        id: 'becoming-1',
        url: '/videos/becoming/becoming-001-compressed.mp4',
        thumbnail: '/videos/becoming/becoming-001-thumbnail.jpg',
        date: '2024',
        projectId: 'becoming',
        sequence: 1
      },
      {
        id: 'becoming-2',
        url: '/videos/becoming/becoming-002.mp4',
        thumbnail: '/videos/becoming/becoming-002-thumbnail.jpg',
        date: '2024',
        projectId: 'becoming',
        sequence: 2
      },
      {
        id: 'becoming-3',
        url: '/videos/becoming/becoming-003.mp4',
        thumbnail: '/videos/becoming/becoming-003-thumbnail.jpg',
        date: '2024',
        projectId: 'becoming',
        sequence: 3
      }
    ]
  },
// Amerindian Defiance Project Videos
{
  projectId: 'amerindian',
  title: 'Amerindian Defiance of Machine Learning Classification',
  description: 'The European conquest of America was not only a source of wealth and power but also a gigantic laboratory in which the West proved its racial superiority and cultural exceptionalism. A vast epistemological project began to name and classify all entities of the New World, pinpointing as the ideal the western image of the Human Being. As white, male, autonomous and powerful enough to construct his own self, the modern, Western model of the Human was the measure against which all entities were to be compared. The famous Theodore de Brys engravings, informed by this model, represented indigenous people during the 16th and 17th centuries as irrational savages lacking souls, living at the verge of the human-animal boundary. How and to what extent, I ask, does this colonial project, along with its hierarchical epistemology and discriminating ontology, survive in current machine learning models? Amerindian philosophy, whose understanding of the world that the colonial project wanted to erase, defy the colonial bias inside machine learning functions, evidencing the narrowness of the conceptualization of actants and matter that it has to presuppose to calculate all the world. Thus, while Europeans had to test their superiority by probing the metaphysical lack of souls in indigenous beings, the latter looked for any material sign that probes in the Europeans bodies their godness, showing a divergent way to classify the world. Asking what a human is, I connect machine learning classification models to an anti-colonial classification of the world, where humans and non-humans become entities living in different ontologies and where an endless process of becoming establishes material foundations. Renouncing completeness, complexifying the physical border of the body and the world, accepting the permanent flux of matter, its abstractions and identities, speculatively emerges from the Amazon river a world of many worlds that defies the colonial functioning of Artificial Intelligence in its machine learning approximation.',
  date: '2023',
  videos: [
    {
      id: 'amerindian-1',
      url: '/videos/amerindian/amerindian-01.mp4',
      thumbnail: '/videos/amerindian/amerindian-thumbnail.jpg',
      date: '2023',
      projectId: 'amerindian',
      sequence: 1
    }
    ]
  },
  // Entheo-Rithmic Inspection Project Videos
  {
    projectId: 'entheo',
    title: 'Entheo-Rithmic Inspection',
    description: 'In this visual research project entitled Entheo-Rhythmic Inspection, from 2020, a video constructed from a set of images designed by Nguyen et al., I have allowed myself to reflect on the limits of surveillance and control by preventing the identification and classification of the objects that supposedly appear therein in light of the perception of the algorithmic model. The more than 5000 images composing the Nguyen et. al. dataset were analyzed by the identification and classification model called COCO-SSD (Common Objects in Context), which is a large-scale object detection, segmentation and captioning dataset, by means of the RunwayML application, running on a local server. The images that were effectively labeled by the model were isolated and grouped with the objective of visually contrasting them with photos of those same objects, recognizable by human vision, housed in the COCO-SSD training dataset. Each of the resulting video clips from the recognized image categories were then merged together to create the final video. Finally, some of the images grouped into categories were used in the Playform platform to train a GAN algorithm to create new images. The images created with GAN were again sent to the COCO-SSD model to check whether, even with the modifications introduced by the algorithm, the object recognition model still recognized the same object category in the image, whether it changed its category or whether it did not recognize anything at all. The exercise made it possible to demonstrate that transferability of the AE, as well as the thesis of Tom White according to which different ANNs can share the same form of data processing and therefore the same classification system. Still from the video with the new images generated by Playform. With this exercise the viewer can evidence the abyss that in this case separates the visual perception of ANNs from human visual perception, contrasting the reality created by each of these perceptual models, delving into the limits and errors of algorithmic vision, and imagining alternative narratives to the tasks of identification and classification that these systems fulfill with the aim of monitoring and controlling.',
    date: '2020',
    videos: [
      {
        id: 'entheo-1',
        url: '/videos/entheo/entheo-001.mp4',
        thumbnail: '/videos/entheo/entheo-001-thumbnail.jpg',
        date: '2020',
        projectId: 'entheo',
        sequence: 1
      },
      {
        id: 'entheo-2',
        url: '/videos/entheo/entheo-002.mp4',
        thumbnail: '/videos/entheo/entheo-002-thumbnail.jpg',
        date: '2020',
        projectId: 'entheo',
        sequence: 2
      }
      ,
      {
        id: 'entheo-3',
        url: '/videos/entheo/entheo-003.mp4',
        thumbnail: '/videos/entheo/entheo-003-thumbnail.jpg',
        date: '2020',
        projectId: 'entheo',
        sequence: 3
      }
      ,
      {
        id: 'entheo-4',
        url: '/videos/entheo/entheo-004.mp4',
        thumbnail: '/videos/entheo/entheo-004-thumbnail.jpg',
        date: '2020',
        projectId: 'entheo',
        sequence: 4
      }
    ]
  },
  // The Analytical Language of Artificial Intelligence
  {
    projectId: 'analytic',
    title: 'The Analytical Language of Artificial Intelligence ',
    description: 'Based on the categories of the COCO-SSD object recognition model, the user interface presents three other sections of images in the form of a grid that invite reflection on the arbitrariness that emerges in the classification of objects, but also on the prejudices that these systems reproduce. Thus, it is possible to see the reality and the worlds that are ignored by the algorithmic model, the diverse ways in which people make sense of the classification categories, as well as the interests and points of view that encourage and sponsor the development of these models, most of the time implemented in surveillance and social control systems.',
    date: '2020',
    videos: [
      {
        id: 'analytic-1',
        url: '/videos/analytic/analytic-001.mp4',
        thumbnail: '/videos/analytic/analytic-001-thumbnail.jpg',
        date: '2020',
        projectId: 'analytic',
        sequence: 1
      }
    ]
  }
]; 