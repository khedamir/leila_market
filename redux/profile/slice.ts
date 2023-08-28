import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { fetchProfileData } from "./asyncAction";
import { Status } from "../types";
import { ProfileSliceState } from "./types";

const initialState: ProfileSliceState = {
  profile: null,
  status: Status.LOADING,
};

export const profileDataSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    cleanProfileData: (state) => {
      state.profile = null;
      state.status = Status.LOADING;
    },
    setData: (state, action) => {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.status = Status.LOADING;
      state.profile = null;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.profile = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state) => {
      console.log("Ошибка при получении данных профиля");
      state.status = Status.ERROR;
      state.profile = null;
    });
    builder.addCase(HYDRATE as any, (state, action) => {
      const { profile, status } = action.payload.profile;
      if (!profile) {
        return state;
      }
      state.profile = profile;
      state.status = status;
    });
  },
});

export const selectProfile = (state: AppState) => state.profile;
export const { cleanProfileData, setData } = profileDataSlice.actions;
export default profileDataSlice.reducer;
