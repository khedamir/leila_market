import { HYDRATE } from "next-redux-wrapper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "../store";
import { fetchProducts } from "./asyncAction";
import { ProductType, ProductSliceState } from "./types";
import { Status } from "../types";

const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ProductType[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      console.log("Ошибка при получении товаров");
      state.status = Status.ERROR;
      state.items = [];
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { items, status } = action.payload.products;
      if (!items) {
        return state;
      }
      state.items = items;
      state.status = status;
    });
  },
});

export const { setItems } = productSlice.actions;

export const selectProducts = (state: AppState) => state.products;

export default productSlice.reducer;
