import React, { FC } from "react";
import styles from "./FilterSelect.module.scss";
import Popup from "../Popup";
import PopupItem from "../PopupItem";

interface FilterSelectProps {
  title: string;
  items: any;
  activeItems: string[];
  setActiveItem: (i: string) => void;
}

const FilterSelect: FC<FilterSelectProps> = ({
  title,
  items,
  activeItems,
  setActiveItem,
}) => {
  return (
    <Popup preview={title} countSelectItems={activeItems.length}>
      {items.map((item: any) => (
        <PopupItem
          key={item.id}
          onClick={() =>
            setActiveItem(item.color ? item.color_name : String(item.id))
          }
          isActive={activeItems.includes(
            item.color ? item.color_name : String(item.id)
          )}
        >
          <span className={styles.item}>
            {item.color && (
              <span
                className={styles.color}
                style={{ backgroundColor: item.color }}
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
