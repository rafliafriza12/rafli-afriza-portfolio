export interface AppLayoutProps {
  children: React.ReactNode;
}

export interface Service {
  category: string;
  package: string;
  type: string;
  linkOrder: string;
  description: string;
}

export interface ServiceCardProps {
  cards: Service[];
}

export interface PlaylistType {
  cover: string;
  title: string;
  artist: string;
  songTitle: string;
  src: string;
}

export interface IShortTechstack {
  technology: string;
}
