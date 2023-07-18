import React, { FC } from "react";
import styles from "./SelectSize.module.scss";
import Popup from "../Popup";
import PopupItem from "../PopupItem";

interface SelectSizeProps {
  title: string;
  items: string[];
  activeItem: string | undefined;
  setActiveItem: (item: string) => void;
}

const SelectSize: FC<SelectSizeProps> = ({
  title,
  items,
  activeItem,
  setActiveItem,
}) => {
  return (
    <div className={styles.selectSize}>
      <Popup preview={title}>
        {items.map((item, id) => (
          <PopupItem
            key={id}
            onClick={() => setActiveItem(item)}
            isActive={activeItem === item}
          >
            {item}
          </PopupItem>
        ))}
      </Popup>
    </div>
  );
};

export default SelectSize;
