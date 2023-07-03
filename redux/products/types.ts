import { CategoryType, CollectionType, Status } from "../types";

export type FetchProductsArgs = {
  menu?: number;
  // collection?: string;
  category?: number;
  // size?: string;
  // color?: string;
  min_price?: number;
  max_price?: number;
  // sort?: any; //
  // search?: string;
  page?: number;
};

export type ProductType = {
  id: number;
  collection: CollectionType;
  product_name: string;
  price: string;
  size: SizeItem[];
  delivery_info: string;
  sku: string;
  model_parameters: string;
  size_on_the_model: string;
  description: string;
  images: ImageItem[];
  instructions: Instructions;
  category: CategoryType[];
  quantity: number;
  // related_products: [];
  date: string;
  views: number;
  // recommendations: [];
};

export type SizeItem = {
  name: string;
};

export type ImageItem = {
  id: number;
  name: string;
  color: string;
  image: string;
};

export type Instructions = {
  details: string;
  care: string;
};

export interface ProductSliceState {
  items: ProductType[];
  status: Status;
}
