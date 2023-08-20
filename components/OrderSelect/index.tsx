import { OrderType } from "@/redux/filters/types";
import React from "react";
import Popup from "../Popup";
import PopupItem from "../PopupItem";
import { useSelector } from "react-redux";
import selectFilters from "@/redux/filters/selectMenu";
import { useAppDispatch } from "@/redux/store";
import { setOrderValue } from "@/redux/filters/slice";
import styles from "./OrderSelect.module.scss";
import { OrderItems } from "./OrderItem";

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
