import React, { FC } from "react";
import styles from "./SelectSize.module.scss";
import Popup from "../Popup";
import PopupItem from "../PopupItem";
import { SizeItem } from "@/redux/types";

interface SelectSizeProps {
  title: string;
  items: SizeItem[];
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
      <Popup preview={activeItem ? activeItem : title}>
        {items.map((item, id) => (
          <PopupItem
            key={id}
            onClick={() => setActiveItem(item.name)}
            isActive={activeItem === item.name}
          >
            {item.name}
          </PopupItem>
        ))}
      </Popup>
    </div>
  );
};

export default SelectSize;
