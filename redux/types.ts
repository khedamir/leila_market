import { ProductType } from "./products/types";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type CollectionType = {
  id: number;
  collection_name: string;
  image: string;
};

export type CategoryType = {
  id: number;
  category_name: string;
};

export type FullProductType = {
  id: number;
  collection: CollectionType;
  product_name: string;
  price: string;
  size: string[];
  delivery_info: string;
  sku: string;
  model_parameters: string;
  size_on_the_model: string;
  description: string;
  colors: ColorItem[];
  instructions: Instructions;
  category: CategoryType[];
  quantity: number;
  related_products: ProductType[];
  date: string;
  views: number;
  recommendations: ProductType[];
};

export type ColorItem = {
  id: number;
  color_name: string;
  color: string;
  images: ImageItem[];
};

export type ImageItem = {
  id: number;
  image: string;
};

export type Instructions = {
  details: string;
  care: string;
};
