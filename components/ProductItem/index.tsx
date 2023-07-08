import React, { FC } from "react";
import styles from "./ProductItem.module.scss";
import Image from "next/image";
import { ProductType } from "@/redux/products/types";
import Link from "next/link";

interface ProductItemProps {
  id: number;
  name: string;
  collection_name: string;
  image: string;
  price: string;
}

const ProductItem: FC<ProductItemProps> = ({
  id,
  name,
  collection_name,
  image,
  price
}) => {
  return (
    <Link href={`/product/${id}`}>
      <div className={styles.productItem}>
        <Image
          unoptimized
          src={image}
          width={289}
          height={350}
          alt={name}
          className={styles.productImg}
        />
        <div className={styles.productDescription}>
          <h4>{name}</h4>
          <p className={styles.productName}>
            {collection_name ? collection_name : collection_name}
          </p>
          <p className={styles.productPrice}>{price} ₽</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
