import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import style from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "react-loading-skeleton/dist/skeleton.css";
import { CollectionType, ImageItem } from "@/redux/types";

interface SliderProps {
  items: any;
  load: boolean;
}

const Slider: FC<SliderProps> = ({ items, load }) => {
  return (
    <div className={style.slider}>
      {load ? (
        <Swiper
          spaceBetween={0}
          grabCursor={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
        >
          {items.map((item: any) => (
            <SwiperSlide>
              <div
                className={`${style.slide}`}
                style={{
                  backgroundImage: `url(${
                    item.image ? item.image : item.image_url
                  })`,
                }}
              >
                {item.collection_name && (
                  <h1 className={style.title}>{item.collection_name}</h1>
                )}
              </div>
            </SwiperSlide>
          ))}
          {items.map((item: any) => (
            <SwiperSlide>
              <div
                className={`${style.slide}`}
                style={{
                  backgroundImage: `url(${
                    item.image ? item.image : item.image_url
                  })`,
                }}
              >
                {item.collection_name && (
                  <h1 className={style.title}>{item.collection_name}</h1>
                )}
              </div>
            </SwiperSlide>
          ))}
          {items.map((item: any) => (
            <SwiperSlide>
              <div
                className={`${style.slide}`}
                style={{
                  backgroundImage: `url(${
                    item.image ? item.image : item.image_url
                  })`,
                }}
              >
                {item.collection_name && (
                  <h1 className={style.title}>{item.collection_name}</h1>
                )}
              </div>
            </SwiperSlide>
          ))}
          {items.map((item: any) => (
            <SwiperSlide>
              <div
                className={`${style.slide}`}
                style={{
                  backgroundImage: `url(${
                    item.image ? item.image : item.image_url
                  })`,
                }}
              >
                {item.collection_name && (
                  <h1 className={style.title}>{item.collection_name}</h1>
                )}
              </div>
            </SwiperSlide>
          ))}
          <div className={`${style.buttons}`}>
            <button className="swiper-button-prev prevBtn"></button>
            <button className="swiper-button-next nextBtn"></button>
          </div>
        </Swiper>
      ) : (
        <Skeleton className={style.sliderSceleton} />
      )}
    </div>
  );
};

export default Slider;
