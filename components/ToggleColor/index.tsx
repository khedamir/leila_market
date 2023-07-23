import React, { FC, useState } from "react";
import styles from "./ToggleColor.module.scss";
import { ColorItem } from "@/redux/types";

interface ToggleColorProps {
  colors: ColorItem[];
  activeColor: string;
  setActiveColor: (i: string) => void;
}

const ToggleColor: FC<ToggleColorProps> = ({
  colors,
  activeColor,
  setActiveColor,
}) => {
  return (
    <div className={styles.toggleColor}>
      <div className={styles.colorsList}>
        {colors.map((color, id) => (
          <div
            key={color.id}
            className={`${styles.colorItem} ${
              activeColor === color.color_name && styles.active
            }`}
          >
            <span
              style={{ backgroundColor: color.color }}
              className={styles.color}
              onClick={() => setActiveColor(color.color_name)}
            >
              <span></span>
            </span>
          </div>
        ))}
      </div>
      <span>{activeColor}</span>
    </div>
  );
};

export default ToggleColor;
