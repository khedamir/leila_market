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
        {items.map((item) => (
          <PopupItem
            key={item.size.id}
            onClick={() => setActiveItem(item.size.name)}
            isActive={activeItem === item.size.name}
          >
            {item.size.name}
          </PopupItem>
        ))}
      </Popup>
    </div>
  );
};

export default SelectSize;
