import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MenuItem } from "./types";

export const fetchMenu = createAsyncThunk<MenuItem[]>(
  "menu/fetchMenu",
  async () => {
    const { data } = await axios.get(
      `https://storefurniture.pythonanywhere.com/api/menu/`
    );
    return data;
  }
);
