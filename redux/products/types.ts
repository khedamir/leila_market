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
  image: string;
  collection_name: string;
  product_name: string;
  price: string;
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
