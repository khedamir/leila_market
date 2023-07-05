import React, { FC } from "react";
import styles from "./ProductItem.module.scss";
import Image from "next/image";
import { ProductType } from "@/redux/products/types";
import Link from "next/link";

interface ProductItemProps {
  product: ProductType;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className={styles.productItem}>
        <Image
          unoptimized
          src={product.images[0].image}
          width={289}
          height={350}
          alt={product.product_name}
          className={styles.productImg}
        />
        <div className={styles.productDescription}>
          <h4>{product.product_name}</h4>
          <p className={styles.productName}>
            {product.collection_name
              ? product.collection_name
              : product.collection.name}
          </p>
          <p className={styles.productPrice}>{product.price} ₽</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
