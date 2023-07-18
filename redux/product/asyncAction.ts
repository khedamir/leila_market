import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchProductsArgs, ProductType } from "../products/types";

export default createAsyncThunk<ProductType[], FetchProductsArgs>(
  "product/fetchProduct",
  async (params) => {
    const { data } = await axios.get(
      "https://storefurniture.pythonanywhere.com/api/product/",
      {
        params,
      }
    );
    return data.results;
  }
);
