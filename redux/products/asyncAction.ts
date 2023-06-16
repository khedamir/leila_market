import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductItem } from "./types";

export const fetchProducts = createAsyncThunk<ProductItem[]>(
  "product/fetchProduct",
  async () => {
    const { data } = await axios.get(
      `https://storefurniture.pythonanywhere.com/api/product/`
    );
    return data;
  }
);
