export type ProductItem = {
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
  quantity: 2;
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

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ProductSliceState {
  items: ProductItem[];
  status: Status;
}
