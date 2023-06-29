import { ProductType } from "../products/types";
import { CategoryType, CollectionType, Status } from "../types";

export type HomeData = {
  collections: CollectionType[];
  all_collections: CollectionType[];
  categories: HomeCategoryType[];
  collections_with_products: HomeCollectionType[];
};

export type HomeCategoryType = {
  category: CategoryType;
  products: ProductType[];
};

export type HomeCollectionType = {
  collection: CollectionType;
  products: ProductType[];
};

export interface HomeSliceState {
  data: HomeData;
  status: Status;
}
