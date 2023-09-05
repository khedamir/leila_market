import { createAsyncThunk } from "@reduxjs/toolkit";
import { CatalogDataType } from "./types";
import { fetch } from "../axios";

export const fetchCatalogData = createAsyncThunk<CatalogDataType>(
  "catalog/fetchCatalogData",
  async () => {
    const { data } = await fetch.get("/api/colors&sizes/");
    return data;
  }
);
