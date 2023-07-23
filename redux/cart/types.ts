export type CartItemType = {
  id: number;
  size: string;
  color: string;
  count: number;
  price: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}
