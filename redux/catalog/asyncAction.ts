import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CatalogDataType } from "./types";

export const fetchCatalogData = createAsyncThunk<CatalogDataType>(
  "catalog/fetchCatalogData",
  async () => {
    const { data } = await axios.get(
      "https://storefurniture.pythonanywhere.com/api/colors&sizes/"
    );
    return data;
  }
);