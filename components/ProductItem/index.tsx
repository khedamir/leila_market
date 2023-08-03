import React, { FC } from "react";
import styles from "./ProductItem.module.scss";
import Image from "next/image";
import { ProductType } from "@/redux/products/types";
import Link from "next/link";
import FavoritesIcon from "../FavoritesIcon";

const ProductItem: FC<ProductType> = ({
  id,
  product_name,
  collection_name,
  image,
  price,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.favorites}>
        <FavoritesIcon />
      </div>
      <Link href={`/product/${id}`}>
        <div className={styles.productItem}>
          <Image
            unoptimized
            src={image}
            width={289}
            height={350}
            alt={product_name}
            className={styles.productImg}
          />
          <div className={styles.productDescription}>
            <h4>{product_name}</h4>
            <p className={styles.productName}>
              {collection_name ? collection_name : collection_name}
            </p>
            <p className={styles.productPrice}>{price} ₽</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
