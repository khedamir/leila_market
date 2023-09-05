import { Status } from "../types";

export type TokenType = {
  access: string;
  refresh: string;
};

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
