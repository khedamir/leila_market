import React, { useState } from "react";
import styles from "./Quantity.module.scss";
import PlusIcon from "../../public/images/plus.svg";
import MinusIcon from "../../public/images/minus.svg";

const Quantity = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const changeQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
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
      <input value={quantity} type="number" />
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
