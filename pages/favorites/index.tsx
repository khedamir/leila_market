import { selectUser } from "@/redux/auth/slice";
import { selectFavorites } from "@/redux/favorites/slice";
import { Status } from "@/redux/types";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Favorites.module.scss";
import ProductItem from "@/components/ProductItem";
import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";

const Favorites = () => {
  const { status } = useSelector(selectUser);
  const { items } = useSelector(selectFavorites);
  const navigate = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate.push("/login");
    }
    if (status === Status.ERROR) {
      navigate.push("/login");
    }
  }, [status, navigate]);

  return (
    <div className={styles.favorites}>
      <BreadCrumbs value1="Избранное" />
      <header>
        <h1>Избранное</h1>
        <p>Количество товаров: {items.length}</p>
      </header>
      <div className={styles.favoritesList}>
        {items.map((item) => (
          <div className={styles.favoritItem} key={item.id}>
            <ProductItem
              id={item.id}
              image={item.image}
              product_name={item.product_name}
              collection_name={item.collection_name}
              price={item.price}
            />
            {/* <Button>В корзину</Button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
