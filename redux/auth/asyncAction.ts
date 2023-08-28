import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginData, UserData } from "./types";
import instance from "../axios";

export const fetchAuth = createAsyncThunk<
  { access: string; refresh: string },
  LoginData
>("auth/fetchAuth", async (params) => {
  const { data } = await axios.post(
    "http://localhost:8000/auth/jwt/create/",
    params
  );
  return data;
});

export const fetchAuthMe = createAsyncThunk<UserData>(
  "auth/fetchAuthMe",
  async () => {
    const { data } = await instance.get("/auth/users/me");
    return data;
  }
);
