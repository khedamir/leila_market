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
  console.log(products);
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
            {products[0] && (
              <li>
                <ProductItem
                  id={products[0].id}
                  product_name={products[0].product_name}
                  collection_name={products[0].collection_name}
                  image={products[0].image}
                  price={products[0].price}
                />
              </li>
            )}
            {products[1] && (
              <li>
                <div className={styles.collectionDescription}>
                  Мы занимаемся дизайном и пошивом одежды с 2020 года. Каждое
                  наше изделие изготовлено
                </div>
                <ProductItem
                  id={products[1].id}
                  product_name={products[1].product_name}
                  collection_name={products[1].collection_name}
                  image={products[1].image}
                  price={products[1].price}
                />
              </li>
            )}
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
