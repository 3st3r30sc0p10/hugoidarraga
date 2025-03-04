import SectionLayout from '../components/SectionLayout';

interface MediaItem {
  type: string;
  url: string;
  title?: string;
}

interface MediaGalleryProps {
  media: MediaItem[];
}

function MediaGallery({ media }: MediaGalleryProps) {
  return (
    <div className="space-y-4">
      {media.map((item, index) => (
        <div key={index} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={item.url}
            alt={item.title || 'Project media'}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

const projects = [
  {
    id: 'test-1',
    title: 'Test Project 1',
    description: 'This is a test project.',
    date: '2024',
    status: 'Completed',
    media: [
      {
        type: 'image',
        url: '/projects/test/test-001.jpg',
        title: 'Test Image'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Test Project 2',
    description: 'This is another test project.',
    date: '2024',
    status: 'Completed',
    media: [
      {
        type: 'image',
        url: '/projects/test/test-002.jpg',
        title: 'Test Image'
      }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <SectionLayout title="Projects">
      <div className="space-y-16">
        {projects.map((project) => (
          <div key={project.id} className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{project.date}</span>
                <span>•</span>
                <span>{project.status}</span>
              </div>
            </div>
            <p className="text-gray-700">{project.description}</p>
            <MediaGallery media={project.media} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
} 