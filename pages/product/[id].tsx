import BreadCrumbs from "@/components/BreadCrumbs";
import React, { FC, useState } from "react";
import styles from "./Product.module.scss";
import Image from "next/image";
import FilterSelect from "@/components/FilterSelect";
import Button from "@/components/Button";
import { wrapper } from "@/redux/store";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ProductType } from "@/redux/products/types";
import CategoryList from "@/components/CategoryList";

type ProductParams = {
  id: string;
};

interface ProductProps {
  product: ProductType & {
    recommendations: ProductType[];
    related_products: ProductType[];
  };
}

const Product: FC<ProductProps> = ({ product }) => {
  const [activeImg, setActiveImg] = useState(0);
  console.log(product);
  return (
    <div className={styles.product}>
      <BreadCrumbs />
      <div className={styles.productCard}>
        <div className={styles.productImages}>
          <div className={styles.imageListItems}>
            {product.images.map((img, i) => (
              <div
                className={`${styles.imageListItem} ${
                  i === activeImg && styles.active
                }`}
                key={i}
                onClick={() => setActiveImg(i)}
              >
                <img
                  src={img.image}
                  width={148}
                  height={150}
                  alt="product image"
                />
                <div className={styles.shadow}></div>
              </div>
            ))}
          </div>
          <div className={styles.activeImg}>
            <img
              src={product.images[activeImg].image}
              width={616}
              height={782}
              alt=""
            />
          </div>
        </div>

        <div className={styles.productCardDescription}>
          <h3>{product.product_name}</h3>
          <p className={styles.name}>{product.category[0].name}</p>
          <p className={styles.price}>{product.price} ₽</p>
          <div className={styles.colorsBlock}>
            <div>
              <span>
                <span></span>
              </span>
              <span>
                <span></span>
              </span>
            </div>
            <p className={styles.activeColor}>Black</p>
          </div>

          <FilterSelect />
          <div>
            <Button>Добавить в корзину</Button>
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
      <ul>
        <li>
          <p>Обмеры изделия</p>
        </li>
        <li>
          <p>Состав и уход</p>
        </li>
      </ul>

      <div>
        <CategoryList
          categoryName="Весть образ на фото"
          products={product.related_products}
        />
        <CategoryList
          categoryName="Возможно вам понравится"
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
