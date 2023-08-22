import { SizeItem } from "../types";

export type CartItemType = {
  product: {
    id: number;
    product_name: string;
    image: string;
    sku: string;
    sizes: SizeItem[];
    color_hex: string;
  };
  size: number;
  color: number;
  current: number;
  price: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}
