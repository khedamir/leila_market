import { HYDRATE } from "next-redux-wrapper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "../store";
import { ProductSliceState } from "./types";

const initialState: ProductSliceState = {
  color: 1,
  size: 1,
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setColor(state, action: PayloadAction<number>) {
      state.color = action.payload;
    },
    setSize(state, action: PayloadAction<number>) {
      state.size = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE as any, (state, action) => {
      const { color, size } = action.payload.products;
      if (color) {
        state.color = color;
      }

      if (size) {
        state.size = size;
      }
    });
  },
});

export const { setColor, setSize } = productSlice.actions;

export const selectProducts = (state: AppState) => state.products;

export default productSlice.reducer;
