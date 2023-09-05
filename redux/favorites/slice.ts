import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "../store";
import { fetchFavorites } from "./asyncAction";
import { FavoritesType, FavoritesSliceState } from "./types";
import { Status } from "../types";

const initialState: FavoritesSliceState = {
  items: [],
  status: Status.LOADING,
};

export const favoritesSlice = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<FavoritesType[]>) {
      state.items = action.payload;
    },
    addItem(state, action: PayloadAction<FavoritesType>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (!item) {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchFavorites.rejected, (state) => {
      console.log("Ошибка при получении товаров");
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = favoritesSlice.actions;

export const selectFavorites = (state: AppState) => state.favorites;
export const selectorIsFavorited = (state: AppState, id: number) =>
  state.favorites.items.find((i) => i.id === id);

export const { addItem, removeItem } = favoritesSlice.actions;

export default favoritesSlice.reducer;
