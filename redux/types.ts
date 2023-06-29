export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type CollectionType = {
  id: number;
  name: string;
  description: string;
  images: { id: number; image: string }[];
  video_url: string;
};

export type CategoryType = {
  id: number;
  name: string;
};
