import { Status } from "../types";

export type CatalogDataType = {
  colors: ColorItem[];
  sizes: SizeItem[];
};

export type ColorItem = {
  id: number;
  color_hex: string;
  color_name: string;
};

export type SizeItem = {
  id: number;
  name: string;
};

export interface CatalogSliceState {
  data: CatalogDataType;
  status: Status;
}
