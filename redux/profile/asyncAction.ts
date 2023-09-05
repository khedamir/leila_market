import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileData } from "./types";
import { localFetch } from "../axios";

export const fetchProfileData = createAsyncThunk<ProfileData>(
  "profile/fetchProfileData",
  async () => {
    const { data } = await localFetch.get("/profile");
    return data;
  }
);
