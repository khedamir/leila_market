import React from "react";
import Arrow from "../../public/images/arrow.svg";
import styles from "./BreadCrumbs.module.scss";
import Link from "next/link";

const BreadCrumbs = () => {
  const menuItem = "Женщинам";
  const category = "Платья";
  return (
    <div className={styles.breadCrumbs}>
      <p>
        <Link href={"/"}>Главная</Link>
      </p>
      <span>
        <Arrow />
      </span>
      <p>{menuItem}</p>
      {category && (
        <>
          <span>
            <Arrow />
          </span>
          <p>{category}</p>
        </>
      )}
    </div>
  );
};

export default BreadCrumbs;
