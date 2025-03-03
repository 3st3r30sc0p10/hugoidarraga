export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title?: string;
  isExternal?: boolean;
}

export interface ProjectData {
  title: string;
  description: string;
  date: string;
  media: MediaItem[];
  technologies?: string[];
  status?: 'In Progress' | 'Completed' | 'Active';
} 