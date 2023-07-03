import { AppState } from "../store";

const selectFilters = (state: AppState) => state.filters;

export default selectFilters;
