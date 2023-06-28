import { CollectionType } from "@/pages";
import React, { FC, useRef } from "react";
import CollectionItem from "./CollectionItem";
import styles from "./CollectionsList.module.scss";
import Link from "next/link";
import SectionHeader from "../SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

interface CollectionsProps {
  collections: CollectionType[];
  load: boolean;
}

const CollectionsList: FC<CollectionsProps> = ({ collections, load }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={styles.collectionList}>
      <SectionHeader title="Коллекции" link="/catalog" />
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
        {collections.map((collection) => (
          <SwiperSlide key={collection.id}>
            <CollectionItem collection={collection} />
          </SwiperSlide>
        ))}
        {/* {collections.map((collection) => (
          <SwiperSlide key={collection.id}>
            <CollectionItem collection={collection} />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
};

export default CollectionsList;
