import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { HomeData, HomeSliceState } from "./types";
import { HYDRATE } from "next-redux-wrapper";
import { fetchHomeData } from "./asyncAction";
import { AppState } from "../store";

const initialData = {
  collections: [],
  all_collections: [],
  categories: [],
  collections_with_products: [],
};

const initialState: HomeSliceState = {
  data: initialData,
  status: Status.LOADING,
};

export const homeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<HomeData>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.pending, (state) => {
      state.status = Status.LOADING;
      state.data = {...initialData};
    });
    builder.addCase(fetchHomeData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchHomeData.rejected, (state) => {
      console.log("Ошибка при получении данных");
      state.status = Status.ERROR;
      state.data = {...initialData};
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { data, status } = action.payload.home;
      if (!data) {
        return state;
      }
      state.data = data;
      state.status = status;
    });
  },
});

export const { setItems } = homeSlice.actions;

export const selectHomeData = (state: AppState) => state.home;

export default homeSlice.reducer;
