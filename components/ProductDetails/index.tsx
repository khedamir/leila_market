import React, { FC, useState } from "react";
import styles from "./ProductDetails.module.scss";
import { InstructionsType } from "@/redux/types";
import Arrow from "@/public/images/arrow.svg";

interface ProductDetailsProps {
  instructions: InstructionsType;
}

const ProductDetails: FC<ProductDetailsProps> = ({ instructions }) => {
  const [activeItem, setActiveItem] = useState("");

  const changeActiveItem = (item: string) => {
    if (activeItem === item) {
      setActiveItem("");
      return;
    }
    setActiveItem(item);
  };
  return (
    <ul className={styles.details}>
      <li
        className={`${styles.detailsItem} ${
          activeItem === "measurements" && styles.active
        }`}
        onClick={() => changeActiveItem("measurements")}
      >
        <div className={styles.preview}>
          <p>Обмеры изделия</p>
          <Arrow />
        </div>
        <div className={styles.description}>Обмеры</div>
      </li>
      <li
        className={`${styles.detailsItem} ${
          activeItem === "instructions" && styles.active
        }`}
        onClick={() => changeActiveItem("instructions")}
      >
        <div className={styles.preview}>
          <p>Состав и уход</p>
          <Arrow />
        </div>
        <div className={styles.description}>
          <p>{instructions.details}</p>
          <p>{instructions.care}</p>
        </div>
      </li>
    </ul>
  );
};

export default ProductDetails;
