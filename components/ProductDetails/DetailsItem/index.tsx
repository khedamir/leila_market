import React, { FC, ReactNode } from "react";
import styles from "./DetailsItem.module.scss";
import Arrow from "@/public/images/arrow.svg";

interface DetailsItemProps {
  value: string;
  title: string;
  activeItem: string;
  changeActiveItem: (i: string) => void;
  children: ReactNode;
}

const DetailsItem: FC<DetailsItemProps> = ({
  value,
  title,
  activeItem,
  changeActiveItem,
  children,
}) => {
  return (
    <div
      className={`${styles.detailsItem} ${
        activeItem === value && styles.active
      }`}
      onClick={() => changeActiveItem(value)}
    >
      <div className={styles.preview}>
        <p>{title}</p>
        <Arrow />
      </div>
      <div className={styles.description}>{children}</div>
    </div>
  );
};

export default DetailsItem;
