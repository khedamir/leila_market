import { OrderType } from "@/redux/filters/types";

export const OrderItems = [
  { name: "По умолчанию", value: OrderType.default },
  { name: "По возрастанию цены", value: OrderType.price },
  { name: "По убыванию цены", value: OrderType.price_desc },
  //   { name: "", value: OrderType.date_dec },
  { name: "По популярности", value: OrderType.views },
  { name: "По новизне", value: OrderType.date },
  //   { name: "", value: OrderType.views_dec },
];
