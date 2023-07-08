import React, { useState } from "react";
import styles from "./Filters.module.scss";
import FilterSelect from "../FilterSelect";
import { useSelector } from "react-redux";
import selectFilters from "@/redux/filters/selectMenu";
import { useAppDispatch } from "@/redux/store";
import { changeColorsValue, changeSizesValue } from "@/redux/filters/slice";

const sizeItems = [
  { id: 1, name: "X" },
  { id: 2, name: "XS" },
  { id: 3, name: "XXL" },
  { id: 4, name: "M" },
];

const colorItems = [
  { id: 1, color: "#fff", name: "Красный" },
  { id: 2, color: "#000", name: "Желтый" },
  { id: 3, color: "#002", name: "Синий" },
  { id: 4, color: "#900", name: "Черный" },
];

const Filters = () => {
  const { sizes, colors } = useSelector(selectFilters);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      <FilterSelect
        title="Размер одежды"
        items={sizeItems}
        activeItems={sizes}
        setActiveItems={(id: number) => dispatch(changeSizesValue(id))}
      />
      <FilterSelect
        title="Цвет"
        items={colorItems}
        activeItems={colors}
        setActiveItems={(id: number) => dispatch(changeColorsValue(id))}
      />
    </div>
  );
};

export default Filters;
