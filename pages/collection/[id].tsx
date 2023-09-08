import React, { FC } from "react";
import styles from "./Collection.module.scss";
import { FullCollectionType } from "@/redux/types";
import { GetServerSideProps } from "next";
import { fetch } from "@/redux/axios";
import Image from "next/image";
import HTMLRenderer from "@/components/HTMLRenderer";

interface CollectionProps {
  collection: FullCollectionType;
}

const Collection: FC<CollectionProps> = ({ collection }) => {
  return (
    <div className={styles.collection}>
      <h1>{collection.collection_name}</h1>
      <div className={styles.images}>
        {collection.images.map((image, id) => (
          <>
            <div key={image.id} className={styles.collectionImage}>
              <Image src={image.image_url} width={300} height={300} alt="" />
            </div>
            {id === 0 && (
              <div className={styles.videoBLock}>
                <div className={styles.video}>
                  <HTMLRenderer
                    htmlContent={
                      '<iframe width="560" height="315" src="https://www.youtube.com/embed/7LL0Xdql7nE?si=6FhNjZzup_0clrmC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                    }
                  />
                </div>
                <p className={styles.description}>{collection.description}</p>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps<CollectionProps> = async (
  context
) => {
  const { id } = context.params || {};
  try {
    const { data } = await fetch.get(`/api/collection/${id}/`);

    return {
      props: {
        collection: data,
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

export default Collection;
