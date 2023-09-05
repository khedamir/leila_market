import { OrderType } from "../filters/types";
import { CategoryType, CollectionType, Status } from "../types";

export type FetchProductsArgs = {
  menu?: string;
  // collection?: string;
  category?: string;
  size?: string;
  color?: string;
  min_price?: string;
  max_price?: string;
  ordering?: OrderType;
  search?: string;
  page?: string;
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
