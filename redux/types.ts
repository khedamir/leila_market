import { ProductType } from "./products/types";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type FullProductType = {
  id: number;
  collection: CollectionType;
  product_name: string;
  price: number;
  delivery_info: string;
  sku: string;
  model_parameters: string;
  size_on_the_model: string;
  description: string;
  colors: ColorItem[];
  instructions: InstructionsType;
  category: CategoryType[];
  quantity: number;
  related_products: ProductType[];
  date: string;
  views: number;
  recommendations: ProductType[];
};

export type FullCollectionType = {
  id: number;
  collection_name: string;
  description: string;
  images: {
    id: number;
    image_url: string;
  }[];
  video_url: string;
};

export type CollectionType = {
  id: number;
  collection_name: string;
  image: string;
};

export type CategoryType = {
  id: number;
  category_name: string;
};

export type ColorItem = {
  id: number;
  color_hex: string;
  color_name: string;
  sizes: SizeItem[];
  images: ImageItem[];
};

export type SizeItem = {
  size: {
    id: 1;
    name: string;
  };
  quantity: number;
};

export type ImageItem = {
  id: number;
  image_url: string;
};

export type InstructionsType = {
  details: string;
  care: string;
};

export type OrderType = {
  id: number;
  order_number: string;
  created_at: string;
  status: string;
  amount: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  city: string;
  delivery_method: string;
  street: string;
  house: string;
  apartment_office: string;
  postal_code: string;
  courier_record: string;
  user: number;
  products: ProductType[];
};

export enum OrderStatus {
  Paid = "Оплачено",
  "Being assembled by the seller" = "В сборке у продавца",
  Shipped = "Передано в доставку",
  "Handed over to the courier" = "Передано курьеру ",
  "Awaiting pickup" = "Ожидает в пункте выдачи",
  Received = "Получено",
}
