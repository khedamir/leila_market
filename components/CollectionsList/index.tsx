import { CollectionType } from "@/pages";
import React, { FC } from "react";
import CollectionItem from "./CollectionItem";
import styles from "./CollectionsList.module.scss";
import Link from "next/link";
import SectionHeader from "../SectionHeader";

interface CollectionsProps {
  collections: CollectionType[];
  load: boolean;
}

const CollectionsList: FC<CollectionsProps> = ({ collections, load }) => {
  return (
    <div className={styles.collectionList}>
      <SectionHeader title="Коллекции" link="" />
      <div className={styles.collectionListItems}>
        {collections.map((collection) => (
          <CollectionItem collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsList;
