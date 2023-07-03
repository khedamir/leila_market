import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

const selectMenu = (state: AppState) => state.menu;

export const getMenuById = createSelector(
  [selectMenu, (state: AppState, id) => id], // Input selectors
  (menu, id) => menu.items.find((record) => record.id === id) // Output selector
);

export default selectMenu;
