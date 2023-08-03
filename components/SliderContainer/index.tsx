import React, { FC, ReactNode } from "react";
import { Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import styles from "./SliderContainer.module.scss";

interface SliderContainerProps {
  children: ReactNode;
}

const SliderContainer: FC<SliderContainerProps> = ({ children }) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        spaceBetween={9.8}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
            spaceBetween: 9.8,
          },
          393: {
            slidesPerView: 2,
            spaceBetween: 9.8,
          },
          796: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
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
        modules={[Autoplay]}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SliderContainer;
