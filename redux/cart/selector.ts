import { AppState } from "../store";

export const cartSelector = (state: AppState) => state.cart;

export const cartItemCountByIdSelector = (state: AppState, id: number) => {
  return state.cart.items
    .filter((obj) => obj.product.id === id)
    .reduce((sum, item) => {
      return item.current + sum;
    }, 0);
};

export const cartFullItemsCount = (state: AppState) => {
  return state.cart.items.reduce((sum, item) => item.current + sum, 0);
};
