import React, { useState } from "react";
import FilterIcon from "../../public/images/filters.svg";
import styles from "./MobileFilters.module.scss";
import Button from "../Button";
import CloseIcon from "../../public/images/close-icon.svg";

const MobileFilters = () => {
  const category = "Верхняя одежда";
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles.filters}>
      <header className={styles.filtersHeader}>
        <h4>{category}</h4>
        <div onClick={() => setModalActive(true)} className={styles.filterIcon}>
          <FilterIcon />
        </div>
      </header>

      <div
        className={`${styles.modalWrapper}  ${modalActive && styles.active}`}
      >
        <div className={styles.modal}>
          <header className={styles.modalHeader}>
            <h4>Фильтры</h4>
            <div
              className={styles.closeButton}
              onClick={() => setModalActive(false)}
            >
              <CloseIcon />
            </div>
          </header>
          <div className={styles.modalFilters}>
            <div className={styles.sort}>
              <p className={styles.sortTitle}>Сортировка</p>
              <div className={styles.sortItems}>
                <div>
                  <input type="radio" id="huey" />
                  <label htmlFor="huey">По умолчанию</label>
                </div>
                <div>
                  <input type="radio" id="dewey" />
                  <label htmlFor="dewey">По возрастанию цены</label>
                </div>
                <div>
                  <input type="radio" id="louie" />
                  <label htmlFor="louie">По убыванию цены</label>
                </div>
              </div>
            </div>
          </div>
          <Button>Показать</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;
