import { Status } from "../types";

export type FavoritesType = {
  id: number;
  image: string;
  collection_name: string;
  product_name: string;
  price: string;
};

export interface FavoritesSliceState {
  items: FavoritesType[];
  status: Status;
}
