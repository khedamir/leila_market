import { AppState } from "../store";

export const cartSelector = (state: AppState) => state.cart;

export const cartItemCountByIdSelector = (state: AppState, id: string) => {
  return state.cart.items
    .filter((obj) => obj.id === id)
    .reduce((sum, item) => {
      return item.count + sum;
    }, 0);
};

export const cartFullItemsCount = (state: AppState) => {
  return state.cart.items.reduce((sum, item) => item.count + sum, 0);
};
