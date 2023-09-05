import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import productReducer from "./products/slice";
import menuReducer from "./menu/slice";
import homeReducer from "./home/slice";
import filtersReducer from "./filters/slice";
import catalogReducer from "./catalog/slice";
import cartReducer from "./cart/slice";
import authReducer from "./auth/slice";
import profileReducer from "./profile/slice";
import favoritesReducer from "./favorites/slice";
import { useDispatch } from "react-redux";

const store = () =>
  configureStore({
    reducer: {
      home: homeReducer,
      products: productReducer,
      catalog: catalogReducer,
      menu: menuReducer,
      filters: filtersReducer,
      cart: cartReducer,
      auth: authReducer,
      profile: profileReducer,
      favorites: favoritesReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const wrapper = createWrapper<AppStore>(store);
