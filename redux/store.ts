import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import productReducer from "./products/slice";
import menuReducer from "./menu/slice";
import homeReducer from "./home/slice";

const store = () =>
  configureStore({
    reducer: {
      home: homeReducer,
      products: productReducer,
      menu: menuReducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(store);
