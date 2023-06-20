import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import productReducer from "./products/slice";
import menuReducer from "./menu/slice";

const store = () =>
  configureStore({
    reducer: {
      products: productReducer,
      menu: menuReducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(store);
