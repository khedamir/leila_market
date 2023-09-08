import React, { FC, useRef } from "react";
import styles from "./CategoryList.module.scss";
import SectionHeader from "../SectionHeader";
import ProductItem from "../ProductItem";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { ProductType } from "@/redux/products/types";
import { CategoryType } from "@/redux/types";
import SliderContainer from "../SliderContainer";

interface CategoryListProps {
  title: string;
  products: ProductType[];
  category?: CategoryType;
}

const CategoryList: FC<CategoryListProps> = ({ title, products, category }) => {
  return (
    products.length > 0 && (
      <div className={styles.categoryList}>
        <SectionHeader
          title={title}
          link={category ? `/catalog/?category=${category.category_name}` : ""}
        />
        <SliderContainer>
          {products?.map((product, id) => (
            <SwiperSlide key={id}>
              <ProductItem
                id={product.id}
                product_name={product.product_name}
                collection_name={product.collection_name}
                image={product.image}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </SliderContainer>
      </div>
    )
  );
};

export default CategoryList;
