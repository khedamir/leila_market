import React, { FC, useState } from "react";
import styles from "./ToggleColor.module.scss";
import { ColorItem } from "@/redux/types";

interface ToggleColorProps {
  colors: ColorItem[];
  activeColor: number;
  setActiveColor: (i: number) => void;
}

const ToggleColor: FC<ToggleColorProps> = ({
  colors,
  activeColor,
  setActiveColor,
}) => {
  return (
    <div className={styles.toggleColor}>
      <div className={styles.colorsList}>
        {colors.map((color) => (
          <div
            key={color.id}
            className={`${styles.colorItem} ${
              activeColor === color.color.id && styles.active
            }`}
          >
            <span
              style={{ backgroundColor: color.color.color_hex }}
              className={styles.color}
              onClick={() => setActiveColor(color.color.id)}
            >
              <span></span>
            </span>
          </div>
        ))}
      </div>
      <span>{colors[activeColor].color.color_name}</span>
    </div>
  );
};

export default ToggleColor;
