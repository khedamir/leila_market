export type MenuItem = {
  id: number;
  name: string;
  show_menu: boolean;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface MenuSliceState {
  items: MenuItem[];
  status: Status;
}
