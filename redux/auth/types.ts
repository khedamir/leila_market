import { Status } from "../types";

export type LoginData = {
  username: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  username: string;
  phone: string;
};

export interface AuthSliceState {
  user: UserData | null;
  status: Status;
}
