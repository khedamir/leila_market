import React, { FC } from "react";
import styles from "./ProductItem.module.scss";
import Image from "next/image";
import { ProductType } from "@/redux/products/types";
import Link from "next/link";
import FavoritesIcon from "../FavoritesIcon";
import { useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  selectorIsFavorited,
} from "@/redux/favorites/slice";
import { AppState, useAppDispatch } from "@/redux/store";
import { localFetch } from "@/redux/axios";
import { selectUser } from "@/redux/auth/slice";

const ProductItem: FC<ProductType> = ({
  id,
  product_name,
  collection_name,
  image,
  price,
}) => {
  const favorited = useSelector((state: AppState) =>
    selectorIsFavorited(state, id)
  );
  const { user } = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const addItemFn = async () => {
    if (user) {
      await localFetch.post("/profile/favorite-products/", { product_id: id });
      dispatch(addItem({ id, product_name, collection_name, image, price }));
    } else {
      
    }
  };

  const deleteItemFn = async () => {
    await localFetch.delete(`/profile/favorite-products/`, {
      params: { product_id: id },
    });
    dispatch(removeItem(id));
  };

  const changeFavorite = () => {
    if (favorited) {
      deleteItemFn();
    }
    if (!favorited) {
      addItemFn();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={changeFavorite} className={styles.favorites}>
        <FavoritesIcon active={Boolean(favorited)} />
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
