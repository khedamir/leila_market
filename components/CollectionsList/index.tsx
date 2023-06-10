import { CollectionType } from "@/pages";
import React, { FC } from "react";
import CollectionItem from "./CollectionItem";
import styles from "./CollectionsList.module.scss";
import Link from "next/link";

interface CollectionsProps {
  collections: CollectionType[];
  load: boolean;
}

const CollectionsList: FC<CollectionsProps> = ({ collections, load }) => {
  return (
    <div className={styles.collectionList}>
      <header>
        <h3>Коллекции</h3>
        <Link href={""}>Все {">"}</Link>
      </header>
      <div className={styles.collectionListItems}>
        {collections.map((collection) => (
          <CollectionItem collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsList;
