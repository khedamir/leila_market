import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import productReducer from "./products/slice";

const store = () =>
  configureStore({
    reducer: {
      products: productReducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(store);
