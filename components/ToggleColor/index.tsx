import React, { useState } from "react";
import styles from "./ToggleColor.module.scss";

const colors = [
  {
    id: 1,
    name: "Черный",
    color: "#0F0F0F",
  },
  {
    id: 2,
    name: "Коричневый",
    color: "#988066",
  },
];

const ToggleColor = () => {
  const [activeColor, setActiveColor] = useState(0);
  return (
    <div className={styles.toggleColor}>
      <div className={styles.colorsList}>
        {colors.map((color, id) => (
          <div
            key={color.id}
            className={`${styles.colorItem} ${
              activeColor === id && styles.active
            }`}
          >
            <span
              style={{ backgroundColor: color.color }}
              className={styles.color}
              onClick={() => setActiveColor(id)}
            >
              <span></span>
            </span>
          </div>
        ))}
      </div>
      <span>{colors[activeColor].name}</span>
    </div>
  );
};

export default ToggleColor;
