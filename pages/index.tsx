import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Slider from "@/components/Slider";
import { useState } from "react";
import CollectionsList from "@/components/CollectionsList";

export type CollectionType = {
  id: number;
  images: { id: number; image: string }[];
  name: string;
};

const collections: CollectionType[] = [
  {
    id: 1,
    images: [
      {
        id: 1,
        image:
          "https://images.thevoicemag.ru/upload/img_cache/63e/63e32fc67b257dda23fca16e43722537_ce_1920x1280x0x0_cropped_666x444.jpg",
      },
    ],
    name: "Весенняя коллекция",
  },
  {
    id: 2,
    images: [
      {
        id: 1,
        image:
          "https://telegraf.com.ua/static/storage/thumbs/428x240/3/3d/a58d8f48-7452e41fe06631a6e773b54dbf12f3d3.jpg?v=4404_2",
      },
    ],
    name: "Осенняя коллекция",
  },
  {
    id: 3,
    images: [
      {
        id: 1,
        image:
          "https://24tv.ua/resources/photos/news/202201/1853953_15490815.jpg?202201170230&w=1800&h=1013&fit=cover%27&output=webp",
      },
    ],
    name: "Летняя коллекция",
  },
  {
    id: 4,
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
    name: "Зимняя коллекция",
  },
];

export default function Home() {
  const [load, setLoad] = useState(true);

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <div>
        <Slider collections={collections} load={load} />
        <CollectionsList collections={collections} load={load} />
      </div>
    </>
  );
}
