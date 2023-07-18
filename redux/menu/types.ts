import { CategoryType, Status } from "../types";

export type MenuItem = {
  id: number;
  menu_name: string;
  categories: { id: number; name: string }[];
};

export interface MenuSliceState {
  items: MenuItem[];
  status: Status;
}
