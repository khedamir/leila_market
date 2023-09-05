import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MenuItem } from "./types";
import { fetch } from "../axios";

export const fetchMenu = createAsyncThunk<MenuItem[]>(
  "menu/fetchMenu",
  async () => {
    const { data } = await fetch.get(`/api/menu/`);
    return data;
  }
);
