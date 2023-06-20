import { HYDRATE } from "next-redux-wrapper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "../store";
import { fetchMenu } from "./asyncAction";
import { MenuItem, MenuSliceState, Status } from "./types";

const initialState: MenuSliceState = {
  items: [],
  status: Status.LOADING,
};

export const menuSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<MenuItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenu.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchMenu.rejected, (state) => {
      console.log("Ошибка при получении элементов меню");
      state.status = Status.ERROR;
      state.items = [];
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { items, status } = action.payload.menu;
      if (!items) {
        return state;
      }
      state.items = items;
      state.status = status;
    });
  },
});

export const { setItems } = menuSlice.actions;

export const selectMenu = (state: AppState) => state.menu;

export default menuSlice.reducer;
