import React, { FC, useState } from "react";
import styles from "./ProductDetails.module.scss";
import { InstructionsType } from "@/redux/types";
import Arrow from "@/public/images/arrow.svg";
import DetailsItem from "../DetailsItem";
import Measurements from "./Measurements";

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
    <div className={styles.details}>
      <DetailsItem
        value="measurements"
        title="Обмеры изделия"
        activeItem={activeItem}
        changeActiveItem={changeActiveItem}
      >
        <Measurements />
      </DetailsItem>
      <DetailsItem
        value="instructions"
        title="Состав и уход"
        activeItem={activeItem}
        changeActiveItem={changeActiveItem}
      >
        <>
          <p>{instructions.details}</p>
          <p>{instructions.care}</p>
        </>
      </DetailsItem>
    </div>
  );
};

export default ProductDetails;
