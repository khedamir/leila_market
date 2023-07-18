import { HYDRATE } from "next-redux-wrapper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "../store";
import { Status } from "../types";
import { CatalogDataType, CatalogSliceState } from "./types";
import { fetchCatalogData } from "./asyncAction";

const initialState: CatalogSliceState = {
  data: {
    colors: [],
    sizes: [],
  },
  status: Status.LOADING,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<CatalogDataType>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatalogData.pending, (state) => {
      state.status = Status.LOADING;
      state.data = {
        colors: [],
        sizes: [],
      };
    });
    builder.addCase(fetchCatalogData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCatalogData.rejected, (state) => {
      console.log("Ошибка при получении данных");
      state.status = Status.ERROR;
      state.data = {
        colors: [],
        sizes: [],
      };
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { data, status } = action.payload.catalog;
      if (!data.colors && !data.sizes) {
        return state;
      }
      state.data.colors = data.colors;
      state.data.sizes = data.sizes;
      state.status = status;
    });
  },
});

export const { setItems } = catalogSlice.actions;

export const selectCatalog = (state: AppState) => state.catalog;

export default catalogSlice.reducer;
