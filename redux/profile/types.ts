import { Status } from "../types";

export type ProfileData = {
  id: number;
  first_name: string;
  last_name: string;
  clothing_size: number;
  gender: "Мужской" | "Женский";
  birthday: Date;

  city: string;
  street: string;
  house: string;
  apartment_office: string;
  postal_code: string;
};

export interface ProfileSliceState {
  profile: ProfileData | null;
  status: Status;
}
