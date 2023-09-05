import React, { FC, useEffect, useState } from "react";
import styles from "./ProductImages.module.scss";
import { ImageItem } from "@/redux/types";
import Image from "next/image";
import Slider from "../Slider";

interface ProductImagesProps {
  images: ImageItem[];
  activeImage: number;
  setActiveImage: (i: number) => void;
}

const ProductImages: FC<ProductImagesProps> = ({
  images,
  activeImage,
  setActiveImage,
}) => {

  // useEffect(() => {
  //   setActiveImage(0);
  // }, [images]);

  return (
    <>
      <div className={styles.productImages}>
        <div className={styles.imageListItems}>
          {images.map((image, id) => (
            <div
              className={`${styles.imageListItem} ${
                id === activeImage && styles.active
              }`}
              key={image.id}
              onClick={() => setActiveImage(id)}
            >
              <Image
                src={image.image_url}
                width={148}
                height={150}
                alt="product image"
              />
              <div className={styles.shadow}></div>
            </div>
          ))}
        </div>
        <div className={styles.activeImg}>
          <Image
            src={images[activeImage].image_url}
            width={616}
            height={782}
            alt=""
            unoptimized
          />
        </div>
      </div>
      <div className={styles.slider}>
        <Slider items={images} load={true} />
      </div>
    </>
  );
};

export default ProductImages;
