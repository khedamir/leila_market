import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const selectMenu = (state: AppState) => state.menu;

export const getMenuById = createSelector(
  [selectMenu, (state: AppState, id) => id],
  (menu, id) => menu.items.find((record) => record.id === id) || menu.items[0]
);

export default selectMenu;
