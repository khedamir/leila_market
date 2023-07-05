import React, { FC } from "react";
import Arrow from "../../public/images/arrow.svg";
import styles from "./BreadCrumbs.module.scss";
import Link from "next/link";

interface BreadCrumbsProps {
  value1: string;
  onClickValue1: () => void;
  value2: string;
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({
  value1,
  value2,
  onClickValue1,
}) => {
  return (
    <div className={styles.breadCrumbs}>
      <p>
        <Link href={"/"}>Главная</Link>
      </p>
      <span>
        <Arrow />
      </span>
      <p onClick={onClickValue1}>{value1}</p>
      {value2 && (
        <>
          <span>
            <Arrow />
          </span>
          <p>{value2}</p>
        </>
      )}
    </div>
  );
};

export default BreadCrumbs;
