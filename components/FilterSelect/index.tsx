import React, { FC } from "react";
import styles from "./FilterSelect.module.scss";
import Popup from "../Popup";
import PopupItem from "../PopupItem";

interface FilterSelectProps {
  title: string;
  items: any;
  activeItems: string;
  setActiveItem: (i: string) => void;
}

const FilterSelect: FC<FilterSelectProps> = ({
  title,
  items,
  activeItems,
  setActiveItem,
}) => {
  console.log(items[0]);
  return (
    <Popup preview={title}>
      {items.map((item: any) => (
        <PopupItem
          key={item.id}
          onClick={() =>
            setActiveItem(item.color_name ? item.color_name : item.name)
          }
          isActive={
            activeItems === item.name || activeItems === item.color_name
          }
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
