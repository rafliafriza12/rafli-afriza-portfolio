export interface IRepositories {
  title: string;
  url: string;
}
export interface IProject {
  id: string;
  slug: string;
  title: string;
  imgUrl: string;
  description: string;
  repositories: IRepositories[];
  liveDemoUrl?: string;
  keyFeatures: string[];
  technologies: string[];
}

export type TProjectCardProps = Pick<
  IProject,
  "slug" | "title" | "description" | "imgUrl"
>;
