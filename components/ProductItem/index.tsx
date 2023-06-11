import React, { FC } from "react";
import styles from "./ProductItem.module.scss";
import { ProductType } from "@/pages";
import Image from "next/image";

interface ProductItemProps {
  product: ProductType;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <img
        src={product.images[0].image}
        width={289}
        height={350}
        alt={product.name}
        className={styles.productImg}
      />
      <div className={styles.productDescription}>
        <h4>{product.collection}</h4>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productPrice}>{product.price} ₽</p>
      </div>
    </div>
  );
};

export default ProductItem;
