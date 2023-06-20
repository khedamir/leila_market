import React, { FC } from "react";
import Mark from "../../public/images/mark.svg";
import styles from "./PopupItem.module.scss";

interface PopupItemProps {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

const PopupItem: FC<PopupItemProps> = ({ isActive, children, onClick }) => {
  return (
    <li className={`${styles.popupItem} ${isActive && styles.active}`} onClick={onClick}>
      <span>{children}</span>
      {isActive && <Mark />}
    </li>
  );
};

export default PopupItem;
