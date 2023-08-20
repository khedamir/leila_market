import { OrderItems } from "@/components/OrderSelect/OrderItem";
import RadioForm from "@/components/RadioForm";
import selectFilters from "@/redux/filters/selectMenu";
import { setOrderValue } from "@/redux/filters/slice";
import { OrderType } from "@/redux/filters/types";
import { useAppDispatch } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const { ordering } = useSelector(selectFilters);
  const dispatch = useAppDispatch();
  return (
    <div>
      <RadioForm
        items={OrderItems}
        activeItemValue={ordering}
        changeActiveItemValue={(value: string) =>
          dispatch(setOrderValue(value as OrderType))
        }
      />
    </div>
  );
};

export default Order;
