import React, { useState } from "react";
import styles from "./Filters.module.scss";
import FilterSelect from "../FilterSelect";
import { useSelector } from "react-redux";
import selectFilters from "@/redux/filters/selectMenu";
import { useAppDispatch } from "@/redux/store";
import { changeColorValue, changeSizeValue } from "@/redux/filters/slice";
import FilterPrice from "../FilterPrice";
import OrderSelect from "../OrderSelect";
import { selectCatalog } from "@/redux/catalog/slice";

const Filters = () => {
  const { size, color } = useSelector(selectFilters);
  const { data } = useSelector(selectCatalog);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      <FilterSelect
        title="Размер одежды"
        items={data.sizes}
        activeItems={size}
        setActiveItem={(s: string) => dispatch(changeSizeValue(s))}
      />
      <FilterSelect
        title="Цвет"
        items={data.colors}
        activeItems={color}
        setActiveItem={(c: string) => dispatch(changeColorValue(c))}
      />
      <FilterPrice />
      <div className={styles.order}>
        <OrderSelect />
      </div>
    </div>
  );
};

export default Filters;
