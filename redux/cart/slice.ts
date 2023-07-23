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
          obj.id === action.payload.id &&
          obj.size === action.payload.size &&
          obj.color === action.payload.color
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice += action.payload.price;
    },
    minusItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.size === action.payload.size &&
          obj.color === action.payload.color
      );

      if (findItem) {
        findItem.count--;
        state.totalPrice -= action.payload.price;
      }
    },
    removeItem(state, action: PayloadAction<CartItemType>) {
      state.items = state.items.filter(
        (obj) =>
          !(
            obj.id === action.payload.id &&
            obj.size === action.payload.size &&
            obj.color === action.payload.color
          )
      );
      state.totalPrice -= action.payload.price * action.payload.count;
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem, setCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
