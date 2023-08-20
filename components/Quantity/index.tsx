import React, { FC } from "react";
import styles from "./Quantity.module.scss";
import PlusIcon from "../../public/images/plus.svg";
import MinusIcon from "../../public/images/minus.svg";

interface QuantityProps {
  maxCurrent: number | undefined;
  current: number;
  onClickPlus: () => void;
  onClickMinus: () => void;
}

const Quantity: FC<QuantityProps> = ({
  maxCurrent,
  current,
  onClickMinus,
  onClickPlus,
}) => {
  return (
    <div className={styles.quantity}>
      <button
        disabled={current === 1}
        className={styles.button}
        onClick={onClickMinus}
      >
        <MinusIcon />
      </button>
      <input value={current} min={1} max={maxCurrent} readOnly type="number" />
      <button
        disabled={current === maxCurrent}
        className={`${styles.button}`}
        onClick={onClickPlus}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default Quantity;
