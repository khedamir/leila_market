// import { CollectionType } from "@/pages";
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
import { CollectionType } from "@/redux/types";
import SliderContainer from "../SliderContainer";

interface CollectionsProps {
  collections: CollectionType[];
  load: boolean;
}

const CollectionsList: FC<CollectionsProps> = ({ collections, load }) => {
  return (
    <div className={styles.collectionList}>
      <SectionHeader title="Коллекции" link="/collections" />
      <SliderContainer>
        {collections.map((collection) => (
          <SwiperSlide key={collection.id}>
            <CollectionItem collection={collection} />
          </SwiperSlide>
        ))}
      </SliderContainer>
    </div>
  );
};

export default CollectionsList;
