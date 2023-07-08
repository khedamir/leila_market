// import { CollectionType } from "@/pages";
import React, { FC } from "react";
import styles from "./CollectionItem.module.scss";
import Link from "next/link";
import { CollectionType } from "@/redux/types";

interface CollectionItem {
  collection: CollectionType;
}

const CollectionItem: FC<CollectionItem> = ({ collection }) => {
  const backgroundStyle = {
    background: `linear-gradient(180deg, rgba(31, 27, 22, 0) 0%, rgba(31, 27, 22, 0.6) 100%), url(${collection.image}) center/cover`,
  };
  return (
    <Link href={"/"} style={backgroundStyle} className={styles.collectionItem}>
      <h4>{collection.collection_name}</h4>
    </Link>
  );
};

export default CollectionItem;
