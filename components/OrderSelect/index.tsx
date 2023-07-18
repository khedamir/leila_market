import { OrderType } from "@/redux/filters/types";
import React from "react";
import Popup from "../Popup";
import PopupItem from "../PopupItem";
import { useSelector } from "react-redux";
import selectFilters from "@/redux/filters/selectMenu";
import { useAppDispatch } from "@/redux/store";
import { setOrderValue } from "@/redux/filters/slice";
import styles from "./OrderSelect.module.scss";

const OrderItems = [
  { name: "По умолчанию", value: OrderType.default },
  { name: "По возрастанию цены", value: OrderType.price },
  { name: "По убыванию цены", value: OrderType.price_desc },
  //   { name: "", value: OrderType.date_dec },
  { name: "По популярности", value: OrderType.views },
  { name: "По новизне", value: OrderType.date },
  //   { name: "", value: OrderType.views_dec },
];

const OrderSelect = () => {
  const { ordering } = useSelector(selectFilters);
  const dispatch = useAppDispatch();
  const preview = OrderItems.find((i) => i.value === ordering)?.name;
  return (
    <div className={styles.orderSelect}>
      <Popup preview={preview ? preview : ""}>
        {OrderItems.map((item) => (
          <PopupItem
            key={item.value}
            isActive={preview === item.name}
            onClick={() => dispatch(setOrderValue(item.value))}
          >
            {item.name}
          </PopupItem>
        ))}
      </Popup>
    </div>
  );
};

export default OrderSelect;
