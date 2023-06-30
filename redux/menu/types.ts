import { CategoryType, Status } from "../types";

export type MenuItem = {
  id: number;
  name: string;
  categories: CategoryType[];
};

export interface MenuSliceState {
  items: MenuItem[];
  status: Status;
}
