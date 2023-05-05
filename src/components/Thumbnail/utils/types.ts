import { StaticImageData } from "next/image";

export type Category =
  | "continue-watching"
  | "romantic-comedy"
  | "high-spirits"
  | "releases"
  | "my-list"
  | "watch-again";

export type IContinueWatching = {
  porcentage: number;
};

export interface IThumbnail {
  name: string;
  id: string;
  imageSrc: string | StaticImageData;
  continueWatching: IContinueWatching;
  categories: Category[];
}
