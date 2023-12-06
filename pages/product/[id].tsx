import BreadCrumbs from "@/components/BreadCrumbs";
import React, { FC, useEffect, useState } from "react";
import styles from "./Product.module.scss";
import Button from "@/components/Button";
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
import Notification from "@/components/Notification";
import ProductDetails from "@/components/ProductDetails";
import { fetch } from "@/redux/axios";
import { useRouter } from "next/router";
import Head from "next/head";

type ProductParams = {
  id: string;
};

interface ProductProps {
  product: FullProductType;
}

const Product: FC<ProductProps> = ({ product }) => {
  const [activeColor, setActiveColor] = useState<number>();
  const [activeSize, setActiveSize] = useState<number>();
  const [activeImage, setActiveImage] = useState<number>(0);

  const [animate, setAnimate] = useState<boolean>(false);
  const navigate = useRouter();

  useEffect(() => {
    if (product) {
      setActiveColor(product.colors[0].id);
    }
  }, [product]);

  const toggleColorFn = (color: number) => {
    setActiveImage(0);
    setActiveColor(color);
  };

  const dispatch = useAppDispatch();

  const addCart = () => {
    if (product) {
      const item: CartItemType = {
        product: {
          id: product.id,
          product_name: product.product_name,
          image: product.colors[0].images[0].image_url,
          sku: product.sku,
          sizes: product.colors[0].sizes,
          color_hex: product.colors.find((c) => c.id === activeColor)
            ?.color_hex as string,
        },
        size: activeSize ? activeSize : product.colors[0].sizes[0].size.id,
        color: product.colors.find((c) => c.id === activeColor)?.id as number,
        price: Number(product.price),
        current: 1,
      };
      setAnimate(true);
      dispatch(addItem(item));
    }
  };

  if (!(product && activeColor)) {
    return <p>loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{product.product_name}</title>
      </Head>
      <div className={styles.product}>
        <Notification
          active={animate}
          setActive={setAnimate}
          text="Добавлено"
        />
        <BreadCrumbs
          value1={product.category[0].category_name}
          onClickValue1={() => {
            navigate.push(
              `/catalog?category=${product.category[0].category_name}`
            );
          }}
          value2={product.product_name}
        />
        <div className={styles.productCard}>
          <ProductImages
            images={[
              ...(product.colors.find((c) => c.id === activeColor)?.images ||
                []),
            ]}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />

          <div className={styles.productCardDescription}>
            <h3>{product.collection.collection_name}</h3>
            <p className={styles.name}>{product.product_name}</p>
            <p className={styles.price}>{product.price} ₽</p>

            <ToggleColor
              colors={product.colors}
              activeColor={activeColor}
              setActiveColor={toggleColorFn}
            />
            <SelectSize
              title={"Выберите размер"}
              activeItem={activeSize}
              items={
                product.colors.find((c) => c.id === activeColor)?.sizes || []
              }
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
        <ProductDetails instructions={product.instructions} />

        <div>
          <CategoryList
            title="Весь образ на фото"
            products={product.related_products}
          />
          <CategoryList
            title="Возможно вам понравится"
            products={product.recommendations}
          />
          <CategoryList title="Вы недавно смотрели" products={[]} />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  ProductProps,
  ProductParams
> = async (context) => {
  const { id } = context.params || {};
  try {
    const { data } = await fetch.get(`/api/product/${id}/`);

    return {
      props: {
        product: data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/server-error",
        permanent: false,
      },
    };
  }
};

export default Product;
