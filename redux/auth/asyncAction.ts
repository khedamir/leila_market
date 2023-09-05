import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginData, TokenType, UserData } from "./types";
import { fetch, localFetch } from "../axios";

export const fetchAuth = createAsyncThunk<TokenType, LoginData>(
  "auth/fetchAuth",
  async (params) => {
    const response = await fetch.post("/auth/jwt/create/", params);
    return response.data;
  }
);

export const fetchAuthMe = createAsyncThunk<UserData>(
  "auth/fetchAuthMe",
  async () => {
    const { data } = await localFetch.get("/auth/users/me");
    return data;
  }
);
