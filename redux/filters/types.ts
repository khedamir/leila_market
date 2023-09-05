export interface FiltersSliceState {
  menu: number;
  // collection: number | null;
  category: string;
  size: string;
  color: string;
  min_price: number;
  max_price: number;
  ordering: OrderType; //
  search: string;
  page: number;
}

export enum OrderType {
  default = "default",
  price = "price",
  price_desc = "-price",
  date = "date",
  date_dec = "-date",
  views = "views",
  views_dec = "-views",
}
