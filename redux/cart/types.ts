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
  size: string;
  color: string;
  current: number;
  price: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}
