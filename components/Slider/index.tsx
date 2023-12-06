import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { FC } from "react";
import style from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "react-loading-skeleton/dist/skeleton.css";

interface SliderProps {
  items: any;
}

const Slider: FC<SliderProps> = ({ items }) => {
  return (
    <div className={style.slider}>
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
          <SwiperSlide key={item.id}>
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
    </div>
  );
};

export default Slider;
