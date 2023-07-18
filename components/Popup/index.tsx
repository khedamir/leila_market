import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Popup.module.scss";
import Arrow from "../../public/images/popup-arrow.svg";
import Mark from "../../public/images/mark.svg";

interface PopupProps {
  preview: string;
  children: ReactNode;
  countSelectItems?: number;
}

const Popup: FC<PopupProps> = ({ preview, children, countSelectItems }) => {
  const [selectShow, setSelectShow] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current?.contains(event.target as Node)) {
        setSelectShow(true);
        return;
      }
      if (!previewRef.current?.contains(event.target as Node)) {
        setSelectShow(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles.filter} ${selectShow && styles.active}`}>
      <div
        ref={previewRef}
        onClick={() => setSelectShow(!selectShow)}
        className={styles.preview}
      >
        <span>{preview}</span>
        {countSelectItems && countSelectItems > 0 ? (
          <span className={styles.countSelect}>{countSelectItems}</span>
        ) : (
          ""
        )}
        <span className={styles.arrow}>
          <Arrow />
        </span>
      </div>
      <div
        ref={selectRef}
        className={`${styles.select} ${selectShow && styles.active}`}
      >
        <ul className={styles.selectItems}>{children}</ul>
      </div>
    </div>
  );
};

export default Popup;
