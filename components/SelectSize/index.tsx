import React, { FC } from "react";
import styles from "./SelectSize.module.scss";
import Popup from "../Popup";
import PopupItem from "../PopupItem";
import { SizeItem } from "@/redux/types";

interface SelectSizeProps {
  title: string;
  items: SizeItem[];
  activeItem: number | undefined;
  setActiveItem: (item: number) => void;
}

const SelectSize: FC<SelectSizeProps> = ({
  title,
  items,
  activeItem,
  setActiveItem,
}) => {
  const activeItemObj = items.find((item) => item.size.id === activeItem);
  const preview = activeItemObj ? activeItemObj.size.name : title;
  return (
    <div className={styles.selectSize}>
      <Popup preview={activeItem ? preview : title}>
        {items.map((item) => (
          <PopupItem
            key={item.size.id}
            onClick={() => setActiveItem(item.size.id)}
            isActive={activeItem === item.size.id}
          >
            {item.size.name}
          </PopupItem>
        ))}
      </Popup>
    </div>
  );
};

export default SelectSize;
