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
  color: {
    id: number;
    color_hex: string;
    color_name: string;
    images: ImageItem[];
  };
  size: SizeItem[];
};

export type SizeItem = {
  id: 1;
  name: string;
  quantity: number;
};

export type ImageItem = {
  id: number;
  image_url: string;
};

export type Instructions = {
  details: string;
  care: string;
};
