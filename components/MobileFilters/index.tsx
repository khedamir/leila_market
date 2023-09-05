import React, { useMemo, useState } from "react";
import FilterIcon from "../../public/images/filters.svg";
import BackIcon from "../../public/images/back-arrow.svg";
import styles from "./MobileFilters.module.scss";
import Button from "../Button";
import CloseIcon from "../../public/images/close-icon.svg";
import Mark from "../../public/images/mark.svg";
import Order from "./Order";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "@/redux/store";
import { getMenuById } from "@/redux/menu/selectMenu";
import selectFilters from "@/redux/filters/selectMenu";
import { selectCatalog } from "@/redux/catalog/slice";
import {
  changeColorValue,
  changeSizeValue,
  setPriceValues,
} from "@/redux/filters/slice";
import Input from "../Index";

type FilterType = {
  value: string;
  name: string;
};

const filtersList: FilterType[] = [
  { value: "sizes", name: "Размер одежды" },
  { value: "colors", name: "Цвет" },
  { value: "price", name: "Цена" },
];

const MobileFilters = () => {
  const [modalActive, setModalActive] = useState(false);
  const [openFilter, setOpenFilter] = useState<FilterType>();
  const dispatch = useAppDispatch();

  const { category, menu, size, color, min_price, max_price } =
    useSelector(selectFilters);

  const { data } = useSelector(selectCatalog);

  const activeMenu = useSelector((state: AppState) => getMenuById(state, menu));

  const categoryName = useMemo(() => {
    return activeMenu?.categories.find((item) => item.name === category)?.name;
  }, [activeMenu?.categories, category]);

  const [min, setMin] = useState<number>(min_price);
  const [max, setMax] = useState<number>(max_price);

  const setValues = () => {
    if (min && max) {
      const newMin = min < 980 ? 980 : min;
      const newMax = max < newMin ? newMin + 1 : max;

      setMin(newMin);
      setMax(newMax);

      dispatch(
        setPriceValues({
          min_price: newMin,
          max_price: newMax,
        })
      );
    }

    if (!(min && max)) {
      dispatch(
        setPriceValues({
          min_price: max,
          max_price: min,
        })
      );
    }
  };

  const changeMinValue = (v: number) => {
    if (v < max || max === 0) {
      setMin(v);
    }
  };

  return (
    <div className={`${styles.filters} ${openFilter && styles.openFilter}`}>
      <header className={styles.filtersHeader}>
        <h4>{categoryName}</h4>
        <div onClick={() => setModalActive(true)} className={styles.filterIcon}>
          <FilterIcon />
        </div>
      </header>

      <div
        className={`${styles.modalWrapper}  ${modalActive && styles.active}`}
      >
        <div className={styles.modal}>
          <header className={styles.modalHeader}>
            <div
              onClick={() => setOpenFilter(undefined)}
              className={styles.backIcon}
            >
              <BackIcon />
            </div>
            <h4>{openFilter ? openFilter.name : "Фильтры"}</h4>
            <div
              className={styles.closeButton}
              onClick={() => setModalActive(false)}
            >
              <CloseIcon />
            </div>
          </header>
          <div className={styles.modalFilters}>
            <div className={styles.sort}>
              <p className={styles.sortTitle}>Сортировка</p>
              <Order />
            </div>
            <div className={styles.filtersList}>
              <ul className={styles.titles}>
                {filtersList.map((filter) => (
                  <li key={filter.value} onClick={() => setOpenFilter(filter)}>
                    <span>{filter.name}</span>
                    <span className={styles.arrow}>
                      <BackIcon />
                    </span>
                  </li>
                ))}
              </ul>
              <ul className={styles.filterDescription}>
                {openFilter?.name === "Размер одежды" ? (
                  data.sizes.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => dispatch(changeSizeValue(item.name))}
                    >
                      <span>{item.name}</span>
                      {size === item.name && (
                        <span>
                          <Mark />
                        </span>
                      )}
                    </li>
                  ))
                ) : openFilter?.name === "Цвет" ? (
                  data.colors.map((item) => (
                    <li
                      key={item.id}
                      onClick={() =>
                        dispatch(changeColorValue(item.color_name))
                      }
                    >
                      <span className={styles.name}>
                        <span
                          className={styles.colorPreview}
                          style={{ backgroundColor: item.color_hex }}
                        ></span>
                        {item.color_name}
                      </span>
                      {color === item.color_name && (
                        <span>
                          <Mark />
                        </span>
                      )}
                    </li>
                  ))
                ) : openFilter?.name === "Цена" ? (
                  <li className={styles.priceFilter}>
                    <Input
                      max={max - 1}
                      value={min > 0 ? min : ""}
                      onChange={(e) => changeMinValue(Number(e.target.value))}
                      placeholder="от"
                      type="number"
                    />
                    -
                    <Input
                      min={min + 1}
                      value={max > 0 ? max : ""}
                      onChange={(e) => setMax(Number(e.target.value))}
                      placeholder="до"
                      type="number"
                    />
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
          <Button onClick={setValues}>Показать</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;
