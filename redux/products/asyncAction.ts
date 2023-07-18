import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchProductsArgs, ProductType } from "./types";

export const fetchProducts = createAsyncThunk<ProductType[], FetchProductsArgs>(
  "product/fetchProducts",
  async (params) => {
    const { data } = await axios.get(
      "https://storefurniture.pythonanywhere.com/api/product/",
      {
        params,
      }
    );
    return data;
  }
);
