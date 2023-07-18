import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import { FC, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import style from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "react-loading-skeleton/dist/skeleton.css";
import { CollectionType, ImageItem } from "@/redux/types";

interface SliderProps {
  collections: any;
  load: boolean;
}

const Slider: FC<SliderProps> = ({ collections, load }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={style.sliders}>
      {load ? (
        <Swiper
          spaceBetween={0}
          effect="coverflow"
          grabCursor={true}
          slidesPerView={1}
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
          {collections.map((collection: any) => (
            <SwiperSlide key={collection.id}>
              <div
                className={`${style.slider}`}
                style={{
                  backgroundImage: `url(${
                    collection.image ? collection.image : collection.image_url
                  })`,
                }}
              >
                <div className={style.center}>
                  {collection.collection_name && (
                    <div className={style.title}>
                      {collection.collection_name}
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className={style.arrows}>
            {/* <button ref={prevRef} className={`${style.arrow}`}>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.875 30.25L1.125 15.5L15.875 0.75"
                  stroke="#0F0F0F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button ref={nextRef} className={`${style.arrow}`}>
              <svg
                width="17"
                height="31"
                viewBox="0 0 17 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.125 30.25L15.875 15.5L1.125 0.75"
                  stroke="#0F0F0F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> */}
          </div>
        </Swiper>
      ) : (
        <Skeleton className={style.sliderSceleton} />
      )}
    </div>
  );
};

export default Slider;
