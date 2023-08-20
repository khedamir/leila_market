import React, { FC } from "react";
import styles from "./CollectionBlock.module.scss";
import ProductItem from "../ProductItem";
import { CollectionType } from "@/redux/types";
import { ProductType } from "@/redux/products/types";

interface CollectionBlockProps {
  collection: CollectionType;
  products: ProductType[];
  version: "one" | "two" | "three";
}

const CollectionBlock: FC<CollectionBlockProps> = ({
  collection,
  products,
  version,
}) => {
  return (
    <div className={styles.collection}>
      <h3 className={styles.mobileTitle}>{collection.collection_name}</h3>
      <div className={`${styles.collectionBlock} ${styles[version]}`}>
        <div
          style={{ backgroundImage: `url("${collection.image}")` }}
          className={styles.collectionPoster}
        >
          <h3>{collection.collection_name}</h3>
        </div>
        <div className={styles.collectionSecondBlock}>
          <div
            style={{ backgroundImage: `url("${collection.image}")` }}
            className={styles.collectionMiniPoster}
          ></div>
          <ul>
            <li>
              {/* <ProductItem product={products[0]} /> */}
            </li>
            <li>
              <div className={styles.collectionDescription}>
                Мы занимаемся дизайном и пошивом одежды с 2020 года. Каждое наше
                изделие изготовлено
              </div>
              {/* <ProductItem product={products[0]} /> */}
            </li>
          </ul>
        </div>
        <div
          style={{ backgroundImage: `url("${collection.image}")` }}
          className={styles.collectionMiniPosterMobile}
        ></div>
      </div>
    </div>
  );
};

export default CollectionBlock;
