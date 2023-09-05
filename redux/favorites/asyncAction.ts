import { createAsyncThunk } from "@reduxjs/toolkit";
import { FavoritesType } from "./types";
import { localFetch } from "../axios";

export const fetchFavorites = createAsyncThunk<FavoritesType[]>(
  "favorites/fetchFavorites",
  async () => {
    const { data } = await localFetch.get("/profile/favorite-products/");
    return data;
  }
);
