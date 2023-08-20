import React, { FC } from "react";
import styles from "./RadioForm.module.scss";

interface RadioFormProps {
  items: {
    name: string;
    value: string;
  }[];
  activeItemValue: string;
  changeActiveItemValue: (id: string) => void;
}

const RadioForm: FC<RadioFormProps> = ({
  items,
  activeItemValue,
  changeActiveItemValue,
}) => {
  return (
    <div className={styles.checkboxForm}>
      {items.map((item) => (
        <div key={item.value} className={styles.item}>
          <input
            checked={activeItemValue === item.value}
            type="radio"
            id={`radio${item.value}`}
            onChange={() => changeActiveItemValue(item.value)}
          />
          <label htmlFor={`radio${item.value}`}>{item.name}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioForm;
