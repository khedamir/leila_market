import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersSliceState } from "./types";
import { HYDRATE } from "next-redux-wrapper";

const initialState: FiltersSliceState = {
  menu: 1,
  // collection: null,
  category: null,
  // size: [],
  // color: [],
  min_price: 0,
  max_price: 0,
  // sort: {}, //
  // search: "",
  page: 1,
};

export const filtersSlice = createSlice({
  name: "Filters",
  initialState,
  reducers: {
    // setMenuValue(state, action: PayloadAction<number>) {
    //   state.menu = action.payload;
    // },
    // setCollectionValue(state, action: PayloadAction<number>) {
    //   state.collection = action.payload;
    // },
    setCategoryValue(state, action: PayloadAction<number | null>) {
      state.category = action.payload;
    },
    // changeSizeValue(state, action: PayloadAction<string>) {
    //   if (state.size.includes(action.payload)) {
    //     state.size = state.size.filter((i) => i !== action.payload);
    //   } else {
    //     state.size = [...state.size, action.payload];
    //   }
    // },
    // changeColorsValue(state, action: PayloadAction<string>) {
    //   if (state.color.includes(action.payload)) {
    //     state.color = state.color.filter((i) => i !== action.payload);
    //   } else {
    //     state.color = [...state.color, action.payload];
    //   }
    // },
    setPriceValue(
      state,
      action: PayloadAction<{ min_price: number; max_price: number }>
    ) {
      state.min_price = action.payload.min_price;
      state.max_price = action.payload.max_price;
    },
    // setSearchValue(state, action: PayloadAction<string>) {
    //   state.search = action.payload;
    // },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setFilters(state, action: PayloadAction<FiltersSliceState>) {
      state.menu = action.payload.menu;
      // state.collection = Number(action.payload.collection);
      state.category = Number(action.payload.category);
      // state.size = action.payload.size;
      // state.color = action.payload.color;
      state.min_price = Number(action.payload.min_price);
      state.max_price = Number(action.payload.max_price);
      state.page = Number(action.payload.page);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE as any, (state, action) => {
      const { category, min_price, max_price, page, menu } =
        action.payload.filters;

      if (menu) {
        state.menu = menu;
      }

      if (category) {
        state.category = category;
      }

      if (min_price) {
        state.min_price = min_price;
      }

      if (max_price) {
        state.max_price = max_price;
      }

      if (page) {
        state.page = page;
      }
    });
  },
});

export const { setCurrentPage, setFilters, setCategoryValue, setPriceValue } =
  filtersSlice.actions;

export default filtersSlice.reducer;
