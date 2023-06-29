import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "./types";

export const fetchProducts = createAsyncThunk<ProductType[]>(
  "product/fetchProduct",
  async () => {
    const { data } = await axios.get(
      `https://storefurniture.pythonanywhere.com/api/product/`
    );
    return data;
  }
);
