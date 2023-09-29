import React, { FC } from "react";
import styles from "./FilterSelect.module.scss";
import Popup from "../Popup";
import PopupItem from "../PopupItem";

interface FilterSelectProps {
  title: string;
  items: any;
  activeItem: string;
  setActiveItem: (i: string) => void;
}

const FilterSelect: FC<FilterSelectProps> = ({
  title,
  items,
  activeItem,
  setActiveItem,
}) => {
  const changeActiveItem = (name: string) => {
    if (activeItem === name) {
      setActiveItem("");
      return;
    }
    setActiveItem(name);
  };
  return (
    <Popup preview={title}>
      {items.map((item: any) => (
        <PopupItem
          key={item.id}
          onClick={() =>
            changeActiveItem(item.color_name ? item.color_name : item.name)
          }
          isActive={activeItem === item.name || activeItem === item.color_name}
        >
          <span className={styles.item}>
            {item.color_name && (
              <span
                className={styles.color}
                style={{ backgroundColor: item.color_hex }}
              ></span>
            )}
            {item.color_name || item.name}
          </span>
        </PopupItem>
      ))}
    </Popup>
  );
};

export default FilterSelect;
