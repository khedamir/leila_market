import React, { FC, useState } from "react";
import styles from "./FilterSelect.module.scss";
import Popup from "../Popup";
import PopupItem from "../PopupItem";

interface FilterSelectProps {
  title: string;
  items: { id: number; name: string; color?: string }[];
  activeItems: number[];
  setActiveItems: (id: number) => void;
}

const FilterSelect: FC<FilterSelectProps> = ({
  title,
  items,
  activeItems,
  setActiveItems,
}) => {
  // const handleActiveItems = (id: number) => {
  //   if (activeItems.find((i) => i === id)) {
  //     const newItems = [...activeItems].filter((i) => i !== id);
  //     setActiveItems([...newItems]);
  //     return;
  //   }
  //   const newItems = [...activeItems, id];
  //   setActiveItems(newItems);
  // };

  return (
    <Popup preview={title} countSelectItems={activeItems.length}>
      {items.map((item) => (
        <PopupItem
          key={item.id}
          onClick={() => setActiveItems(item.id)}
          isActive={activeItems.includes(item.id)}
        >
          <span className={styles.item}>
            {item.color && (
              <span
                className={styles.color}
                style={{ backgroundColor: item.color }}
              ></span>
            )}
            {item.name}
          </span>
        </PopupItem>
      ))}
    </Popup>
  );
};

export default FilterSelect;
