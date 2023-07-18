import React, { FC } from "react";
import styles from "./FavoritesIcon.module.scss";
import Favorites from "../../public/images/favorites.svg";

interface FavoritesIconProps {
  active?: boolean;
}

const FavoritesIcon: FC<FavoritesIconProps> = ({ active }) => {
  return (
    <span className={`${styles.favorites} ${active && styles.active}`}>
      <Favorites />
    </span>
  );
};

export default FavoritesIcon;
