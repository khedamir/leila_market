import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersSliceState, OrderType } from "./types";
import { HYDRATE } from "next-redux-wrapper";

const initialState: FiltersSliceState = {
  menu: 1,
  // collection: null,
  category: "",
  size: "",
  color: "",
  min_price: 0,
  max_price: 0,
  ordering: OrderType.default,
  search: "",
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
    setCategoryValue(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    // changeSizeValue(state, action: PayloadAction<string>) {
    //   if (state.size.includes(action.payload)) {
    //     state.size = state.size.filter((i) => i !== action.payload);
    //   } else {
    //     state.size = [...state.size, action.payload];
    //   }
    // },
    changeSizeValue(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
    // changeColorValue(state, action: PayloadAction<string>) {
    //   if (state.color.includes(action.payload)) {
    //     state.color = state.color.filter((i) => i !== action.payload);
    //   } else {
    //     state.color = [...state.color, action.payload];
    //   }
    // },
    changeColorValue(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setPriceValues(
      state,
      action: PayloadAction<{ min_price: number; max_price: number }>
    ) {
      state.min_price = action.payload.min_price;
      state.max_price = action.payload.max_price;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setOrderValue(state, action: PayloadAction<OrderType>) {
      state.ordering = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setFilters(state, action: PayloadAction<FiltersSliceState>) {
      state.menu = action.payload.menu;
      // state.collection = Number(action.payload.collection);
      state.category = action.payload.category;
      state.size = action.payload.size;
      state.color = action.payload.color;
      state.min_price = Number(action.payload.min_price);
      state.max_price = Number(action.payload.max_price);
      state.page = Number(action.payload.page);
      state.ordering = action.payload.ordering;
      state.search = action.payload.search;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE as any, (state, action) => {
      const {
        category,
        min_price,
        max_price,
        page,
        menu,
        ordering,
        size,
        search,
        color,
      } = action.payload.filters;

      if (menu) {
        state.menu = menu;
      }
      if (size) {
        state.size = size;
      }
      if (size) {
        state.color = color;
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
      if (search) {
        state.search = search;
      }
      if (ordering) {
        state.ordering = ordering;
      }
    });
  },
});

export const {
  setCurrentPage,
  setFilters,
  setCategoryValue,
  setPriceValues,
  changeSizeValue,
  changeColorValue,
  setOrderValue,
  setSearchValue,
} = filtersSlice.actions;

export default filtersSlice.reducer;
