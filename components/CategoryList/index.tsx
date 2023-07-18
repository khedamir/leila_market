import React, { FC, useRef } from "react";
import styles from "./CategoryList.module.scss";
import SectionHeader from "../SectionHeader";
import ProductItem from "../ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { ProductType } from "@/redux/products/types";
import { CategoryType } from "@/redux/types";

interface CategoryListProps {
  title: string;
  products: ProductType[];
  category?: CategoryType;
}

const CategoryList: FC<CategoryListProps> = ({ title, products, category }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.categoryList}>
      <SectionHeader
        title={title}
        link={category ? `/catalog/?category=${category.id}` : ""}
      />
      <Swiper
        spaceBetween={9.8}
        effect="coverflow"
        grabCursor={true}
        slidesPerView={2.5}
        breakpoints={{
          393: {
            slidesPerView: 2.5,
            spaceBetween: 9.8,
          },
          512: {
            slidesPerView: 2,
            spaceBetween: 9.8,
          },
          796: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1260: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        loopedSlides={4}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        speed={800}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Autoplay, Navigation, EffectFade]}
      >
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
      </Swiper>
    </div>
  );
};

export default CategoryList;
