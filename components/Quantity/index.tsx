import React, { useState } from "react";
import styles from "./Quantity.module.scss";
import PlusIcon from "../../public/images/plus.svg";
import MinusIcon from "../../public/images/minus.svg";

const Quantity = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const changeQuantity = (i: string) => {
    if (Number(i) >= 1) {
      setQuantity(Number(i));
    }
  };
  return (
    <div className={styles.quantity}>
      <button
        disabled={quantity === 1}
        className={styles.button}
        onClick={() => setQuantity(quantity - 1)}
      >
        <MinusIcon />
      </button>
      <input
        value={quantity}
        min={1}
        onChange={(e) => changeQuantity(e.target.value)}
        type="number"
      />
      <button
        className={`${styles.button}`}
        onClick={() => setQuantity(quantity + 1)}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default Quantity;
