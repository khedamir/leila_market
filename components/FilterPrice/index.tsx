import React, { useState } from "react";
import styles from "./FilterPrice.module.scss";
import Popup from "../Popup";
import PopupItem from "../PopupItem";
import Input from "../Index";
import Button from "../Button";
import { useSelector } from "react-redux";
import selectFilters from "@/redux/filters/selectMenu";
import { useAppDispatch } from "@/redux/store";
import { setPriceValues } from "@/redux/filters/slice";

const FilterPrice = () => {
  const { min_price, max_price } = useSelector(selectFilters);
  const dispatch = useAppDispatch();
  const [min, setMin] = useState<number>(min_price);
  const [max, setMax] = useState<number>(max_price);

  const setValues = () => {
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
  };

  const changeMinValue = (v: number) => {
    if (v < max || max === 0) {
      setMin(v);
    }
  };

  const clean = () => {
    setMin(0);
    setMax(0);

    dispatch(
      setPriceValues({
        min_price: 0,
        max_price: 0,
      })
    );
  };

  return (
    <div className={styles.filterPrice}>
      <Popup preview="Цена">
        <PopupItem onClick={() => {}} isActive={false}>
          <div className={styles.wrapper}>
            <span className={styles.inputs}>
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
            </span>

            <Button
              disabled={!(min && max) || min === min_price && max === max_price}
              onClick={setValues}
            >
              Применить
            </Button>
            {min && max ? (
              <p className={styles.clean} onClick={clean}>
                Очистить
              </p>
            ) : (
              ""
            )}
          </div>
        </PopupItem>
      </Popup>
    </div>
  );
};

export default FilterPrice;
