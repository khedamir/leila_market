import { createAsyncThunk } from "@reduxjs/toolkit";
import { HomeData } from "./types";
import { fetch } from "../axios";

export const fetchHomeData = createAsyncThunk<HomeData>(
  "home/fetchProduct",
  async () => {
    const { data } = await fetch.get(`/api/home/`);
    return data;
  }
);
