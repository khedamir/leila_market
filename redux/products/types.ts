import { Status } from "../types";

export type ProductType = {
  id: number;
  collection: any; //
  product_name: string;
  price: string;
  size: SizeItem;
  delivery_info: string;
  sku: string;
  model_parameters: string;
  size_on_the_model: string;
  description: string;
  images: ImageItem[];
  instructions: Instructions;
  category: any; //
  quantity: number;
};

export type SizeItem = {
  name: any;
};

export type ImageItem = {
  id: number;
  name: string;
  color: string;
  image: string;
};

export type Instructions = {
  id: number;
  details: string;
  care: string;
};

export interface ProductSliceState {
  items: ProductType[];
  status: Status;
}
