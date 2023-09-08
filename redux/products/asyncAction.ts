import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchProductsArgs, ProductType, ProductsSlice } from "./types";
import { fetch } from "../axios";

export const fetchProducts = createAsyncThunk<ProductsSlice, FetchProductsArgs>(
  "product/fetchProducts",
  async (params) => {
    const { data } = await fetch.get("/api/product/", {
      params,
    });
    return data;
  }
);
