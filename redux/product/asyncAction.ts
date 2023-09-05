import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchProductsArgs, ProductType } from "../products/types";
import { fetch } from "../axios";

export default createAsyncThunk<ProductType[], FetchProductsArgs>(
  "product/fetchProduct",
  async (params) => {
    const { data } = await fetch.get("/api/product/", {
      params,
    });
    return data.results;
  }
);
