import { FiltersSliceState, OrderType } from "@/redux/filters/types";
import { FetchProductsArgs } from "@/redux/products/types";

export function getNewQueryObject(items: FiltersSliceState) {
  const queryParams: FetchProductsArgs = {};

  if (items.category !== "") {
    queryParams.category = items.category;
  }
  if (items.min_price > 0) {
    queryParams.min_price = String(items.min_price);
  }
  if (items.max_price > 0) {
    queryParams.max_price = String(items.max_price);
  }
  // if (items.page !== null && items.page !== 1) {
  //   queryParams.page = String(items.page);
  // }
  if (items.size) {
    queryParams.size = items.size;
  }
  if (items.color) {
    queryParams.color = items.color;
  }
  if (items.search.length) {
    queryParams.search = items.search;
  }
  if (items.ordering !== OrderType.default) {
    queryParams.ordering = items.ordering;
  }

  return queryParams;
}
