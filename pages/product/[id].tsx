import BreadCrumbs from "@/components/BreadCrumbs";
import React, { FC, useState } from "react";
import styles from "./Product.module.scss";
import Image from "next/image";
import FilterSelect from "@/components/FilterSelect";
import Button from "@/components/Button";
import axios from "axios";
import { GetServerSideProps } from "next";
import CategoryList from "@/components/CategoryList";
import ToggleColor from "@/components/ToggleColor";
import { FullProductType } from "@/redux/types";

type ProductParams = {
  id: string;
};

interface ProductProps {
  product: FullProductType;
}

const Product: FC<ProductProps> = ({ product }) => {
  // const [activeImg, setActiveImg] = useState(product.colors[0].id);
  console.log(product);
  return (
    <div className={styles.product}>
      <BreadCrumbs
        value1={product.category[0].category_name}
        onClickValue1={() => {}}
        value2={product.product_name}
      />
      <div className={styles.productCard}>
        {/* <div className={styles.productImages}>
          <div className={styles.imageListItems}>
            {product.colors.map((color) => (
              <div
                className={`${styles.imageListItem} ${
                  color.id === activeImg && styles.active
                }`}
                key={color.id}
                onClick={() => setActiveImg(color.id)}
              >
                <Image
                  src={color.images[0].image}
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
              src={
                product.colors.find((color) => color.id === activeImg)
                  ?.images[0].image
              }
              width={616}
              height={782}
              alt=""
            />
          </div>
        </div> */}

        <div className={styles.productCardDescription}>
          <h3>{product.collection.collection_name}</h3>
          <p className={styles.name}>{product.product_name}</p>
          <p className={styles.price}>{product.price} ₽</p>
          <div className={styles.colorsBlock}>
            <ToggleColor />
          </div>

          {/* <FilterSelect items={[{ id: 1, name: "a" }]} /> */}
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
