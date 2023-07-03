import React, { useState } from "react";
import styles from "./FilterSelect.module.scss";
import Popup from "../Popup";
import PopupItem from "../PopupItem";

const FilterSelect = () => {
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const items: string[] = ["a", "b", "c", "d"];

  const handleActiveItems = (item: string) => {
    if (activeItems.find((i) => i === item)) {
      const newItems = [...activeItems].filter((i) => i !== item);
      setActiveItems([...newItems]);
      return;
    }
    setActiveItems((prev) => [...prev, item]);
  };

  const title = "Размер одежды";
  return (
    <Popup preview={title} countSelectItems={activeItems.length}>
      {items.map((item, id) => (
        <PopupItem
          key={id}
          onClick={() => handleActiveItems(item)}
          isActive={activeItems.includes(item)}
        >
          {item}
        </PopupItem>
      ))}
    </Popup>
  );
};

export default FilterSelect;
