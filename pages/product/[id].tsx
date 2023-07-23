import BreadCrumbs from "@/components/BreadCrumbs";
import React, { FC, useState } from "react";
import styles from "./Product.module.scss";
import Button from "@/components/Button";
import axios from "axios";
import { GetServerSideProps } from "next";
import CategoryList from "@/components/CategoryList";
import ToggleColor from "@/components/ToggleColor";
import { FullProductType } from "@/redux/types";
import SelectSize from "@/components/SelectSize";
import ProductImages from "@/components/ProductImages";
import FavoritesIcon from "@/components/FavoritesIcon";
import { CartItemType } from "@/redux/cart/types";
import { useAppDispatch } from "@/redux/store";
import { addItem } from "@/redux/cart/slice";

type ProductParams = {
  id: string;
};

interface ProductProps {
  product: FullProductType;
}

const Product: FC<ProductProps> = ({ product }) => {
  const [activeColor, setActiveColor] = useState<string>(
    product.colors[0].color_name
  );
  const [activeSize, setActiveSize] = useState<string>();

  const dispatch = useAppDispatch();

  const addCart = () => {
    const item: CartItemType = {
      id: product.id,
      size: activeSize || product.size[0],
      color: activeColor,
      price: Number(product.price),
      count: 1,
    };

    dispatch(addItem(item));
  };

  return (
    <div className={styles.product}>
      <BreadCrumbs
        value1={product.category[0].category_name}
        onClickValue1={() => {}}
        value2={product.product_name}
      />
      <div className={styles.productCard}>
        <ProductImages images={product.colors[0].images} />

        <div className={styles.productCardDescription}>
          <h3>{product.collection.collection_name}</h3>
          <p className={styles.name}>{product.product_name}</p>
          <p className={styles.price}>{product.price} ₽</p>

          <ToggleColor
            colors={product.colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
          <SelectSize
            title={activeSize ? activeSize : "Выберите размер"}
            activeItem={activeSize}
            items={product.size}
            setActiveItem={setActiveSize}
          />

          <div className={styles.buttons}>
            <Button onClick={addCart}>Добавить в корзину</Button>
            <div className={styles.favoritesIcon}>
              <FavoritesIcon />
            </div>
          </div>
          <p className={styles.info}>{product.delivery_info}</p>
        </div>
      </div>

      <div className={styles.descriptionBlock}>
        <p className={styles.sku}>Артикул: {product.sku}</p>
        <p className={styles.parameters}>
          Параметры модели: {product.model_parameters}
        </p>
        <p className={styles.modelSize}>
          На модели размер: {product.size_on_the_model}
        </p>
        <p className={styles.description}>{product.description}</p>
      </div>
      <ul className={styles.details}>
        <li>
          <p>Обмеры изделия</p>
        </li>
        <li>
          <p>Состав и уход</p>
        </li>
      </ul>

      <div>
        <CategoryList
          title="Весь образ на фото"
          products={product.related_products}
        />
        <CategoryList
          title="Возможно вам понравится"
          products={product.recommendations}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  ProductProps,
  ProductParams
> = async (context) => {
  const { id } = context.params || {};
  try {
    const { data } = await axios.get(
      `https://storefurniture.pythonanywhere.com/api/product/${id}`
    );

    return {
      props: {
        product: data,
      },
    };
  } catch {
    return {
      redirect: {
        destination: "/server-error",
        permanent: false,
      },
    };
  }
};

export default Product;
