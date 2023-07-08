export interface FiltersSliceState {
  menu: number;
  // collection: number | null;
  category: number | null;
  sizes: number[];
  colors: number[];
  min_price: number;
  max_price: number;
  // sort: any; //
  // search: string;
  page: number;
}
