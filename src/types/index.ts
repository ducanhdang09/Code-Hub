export enum EDisplayType {
  NORMAL,
  LARGE,
}

export interface IData {
  id: number;
  image: string;
  title: string;
  description: string;
  content?: string[];
  videoUrl?: string;
}
