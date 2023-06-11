import React, { FC } from "react";
import styles from "./CollectionBlock.module.scss";
import { CollectionType, ProductType } from "@/pages";
import Image from "next/image";
import ProductItem from "../ProductItem";

interface CollectionBlockProps {
  collection: CollectionType;
  products: ProductType[];
  version: "one" | "two" | "three";
}

const CollectionBlock: FC<CollectionBlockProps> = ({
  collection,
  products,
  version
}) => {
  return (
    <div className={`${styles.collectionBlock} ${styles[version]}`}>
      <div
        style={{ backgroundImage: `url(${collection.images[0].image})` }}
        className={styles.collectionPoster}
      >
        <h3>{collection.name}</h3>
      </div>
      <div className={styles.collectionSecondBlock}>
        <div
          style={{ backgroundImage: `url(${collection.images[0].image})` }}
          className={styles.collectionMiniPoster}
        ></div>
        <ul>
          <li>
            <ProductItem product={products[0]} />
          </li>
          <li>
            <div className={styles.collectionDescription}>
              Мы занимаемся дизайном и пошивом одежды с 2020 года. Каждое наше
              изделие изготовлено
            </div>
            <ProductItem product={products[0]} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CollectionBlock;
