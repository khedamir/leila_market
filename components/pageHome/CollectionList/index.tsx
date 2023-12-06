import React, { FC } from "react";
import styles from "./CollectionsList.module.scss";

import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { CollectionType } from "@/redux/types";

import SectionHeader from "@/components/SectionHeader";
import SliderContainer from "@/components/SliderContainer";
import CollectionItem from "./CollectionListItem";

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
