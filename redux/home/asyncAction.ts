import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HomeData } from "./types";

export const fetchHomeData = createAsyncThunk<HomeData>(
  "home/fetchProduct",
  async () => {
    const { data } = await axios.get(
      `https://storefurniture.pythonanywhere.com/api/home/`
    );
    return data;
  }
);
