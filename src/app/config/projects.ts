type Project = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: string;
  media: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
    title?: string;
    isExternal?: boolean;
  }[];
}

const projects: Project[] = [
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

export default projects; 