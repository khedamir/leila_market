import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchProductsArgs, ProductType } from "./types";
import { fetch } from "../axios";

export const fetchProducts = createAsyncThunk<ProductType[], FetchProductsArgs>(
  "product/fetchProducts",
  async (params) => {
    const { data } = await fetch.get("/api/product/", {
      params,
    });
    console.log(params, data);
    return data;
  }
);
