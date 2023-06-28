import BreadCrumbs from "@/components/BreadCrumbs";
import React, { useState } from "react";
import styles from "./Product.module.scss";
import Image from "next/image";
import FilterSelect from "@/components/FilterSelect";
import Button from "@/components/Button";

const images = [
  "https://dolinamod.ru/image/cache/catalog/2021_evening/DM-993-01-776x1165.jpg",
  "https://olga-grinyuk.ru/upload/resize_cache/iblock/8ba/762_1100_0/92ae79ae_aa1a_11e9_bacf_0cc47a525ded_dd9a02d7_7fb3_11ea_bad5_0cc47a525ded.jpg",
  "https://dolinamod.ru/image/cache/catalog/2021_evening/DM-993-01-776x1165.jpg",
  "https://dolinamod.ru/image/cache/catalog/2021_evening/DM-993-01-776x1165.jpg",
  "https://dolinamod.ru/image/cache/catalog/2021_evening/DM-993-01-776x1165.jpg",
];

const Product = () => {
  const [activeImg, setActiveImg] = useState(0);
  return (
    <div className={styles.product}>
      <BreadCrumbs />
      <div className={styles.productCard}>
        <div className={styles.productImages}>
          <div className={styles.imageListItems}>
            {images.map((img, i) => (
              <div
                className={`${styles.imageListItem} ${
                  i === activeImg && styles.active
                }`}
                key={i}
                onClick={() => setActiveImg(i)}
              >
                <img src={img} width={148} height={150} alt="product image" />
                <div className={styles.shadow}></div>
              </div>
            ))}
          </div>
          <div className={styles.activeImg}>
            <img src={images[activeImg]} width={616} height={782} alt="" />
          </div>
        </div>

        <div className={styles.productCardDescription}>
          <h3>Kenzo</h3>
          <p className={styles.name}>Платье</p>
          <p className={styles.price}>20 500 ₽</p>
          <div className={styles.colorsBlock}>
            <div>
              <span>
                <span></span>
              </span>
              <span>
                <span></span>
              </span>
            </div>
            <p className={styles.activeColor}>Black</p>
          </div>

          <FilterSelect />
          <div>
            <Button>Добавить в корзину</Button>
          </div>
          <p className={styles.info}>
            Мы ожидаем эту модель с 3 до 17 апреля, но уже сейчас ее можно
            купить по предоплате, чтобы получить раньше других. Как только
            модель поступит, свяжемся с вами и согласуем время и адрес доставки
            — по России она будет бесплатной.
          </p>
        </div>
      </div>

      <div className={styles.descriptionBlock}>
        <p className={styles.sku}>Артикул:</p>
        <p className={styles.parameters}>Параметры модели:</p>
        <p className={styles.modelSize}>На модели размер:</p>
        <p className={styles.description}>
          Лаконичные ботильоны Color block сочетают в себе контрастные по цвету
          элементы. Мягкая плотная кожа отполирована до деликатного блеска и
          меньше царапается, а подкладка из кожи шевро создает комфортный
          микроклимат. Высокому каблуку придали устойчивую форму, чтобы
        </p>
      </div>
      <ul>
        <li>
          <p>Обмеры изделия</p>
        </li>
        <li>
          <p>Состав и уход</p>
        </li>
      </ul>
    </div>
  );
};

export default Product;
