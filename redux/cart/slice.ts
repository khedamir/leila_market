import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType, CartSliceState } from "./types";

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<CartSliceState>) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find(
        (obj) =>
          obj.product.id === action.payload.product.id &&
          obj.size === action.payload.size &&
          obj.color === action.payload.color
      );

      if (findItem) {
        const quantity = findItem.product.sizes.find(
          (i) => i.size.id === findItem.size
        )?.quantity as number;

        findItem.current < quantity && findItem.current++;
        state.totalPrice += action.payload.price;
      } else {
        state.items.push({ ...action.payload, current: 1 });
        state.totalPrice += action.payload.price * action.payload.current;
      }
    },
    minusItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find(
        (obj) =>
          obj.product.id === action.payload.product.id &&
          obj.size === action.payload.size &&
          obj.color === action.payload.color
      );

      if (findItem) {
        findItem.current--;
        state.totalPrice -= action.payload.price;
      }
    },
    changeSize(
      state,
      action: PayloadAction<{ item: CartItemType; size: number }>
    ) {
      const findItem = state.items.find(
        (obj) =>
          obj.product.id === action.payload.item.product.id &&
          obj.size === action.payload.size &&
          obj.color === action.payload.item.color
      );

      if (findItem) {
        state.items = state.items.filter(
          (obj) =>
            !(
              obj.product.id === action.payload.item.product.id &&
              obj.size === action.payload.item.size &&
              obj.color === action.payload.item.color
            )
        );
      } else {
        const sameItem = state.items.find(
          (obj) =>
            obj.product.id === action.payload.item.product.id &&
            obj.size === action.payload.item.size &&
            obj.color === action.payload.item.color
        );
        if (sameItem) {
          sameItem.size = action.payload.size;
          sameItem.current = 1;
        }
      }
    },
    removeItem(state, action: PayloadAction<CartItemType>) {
      state.items = state.items.filter(
        (obj) =>
          !(
            obj.product.id === action.payload.product.id &&
            obj.size === action.payload.size &&
            obj.color === action.payload.color
          )
      );
      state.totalPrice -= action.payload.price * action.payload.current;
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItems,
  minusItem,
  setCartItems,
  changeSize,
} = cartSlice.actions;

export default cartSlice.reducer;
