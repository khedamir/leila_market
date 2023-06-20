import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const menuItem = "Женщинам";
  const categories = ["Новинки", "Скоро в продаже", "Одежда для сна"];
  return (
    <div className={styles.sidebar}>
      <h3>{menuItem}</h3>
      <ul>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
