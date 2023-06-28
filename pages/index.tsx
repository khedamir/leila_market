import Head from "next/head";
import styles from "@/styles/Home.module.scss";

import Slider from "@/components/Slider";
import CollectionsList from "@/components/CollectionsList";
import CategoryList from "@/components/CategoryList";
import CollectionBlock from "@/components/CollectionBlock";

import { wrapper } from "@/redux/store";
import { useSelector } from "react-redux";
import { fetchProducts } from "@/redux/products/asyncAction";
import { selectProducts } from "@/redux/products/slice";

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

export type ProductType = {
  id: number;
  collection: string;
  name: string;
  price: number;
  category: string;
  images: { id: number; image: string }[];
};

const Products: ProductType[] = [
  {
    id: 1,
    collection: "Весенняя коллекция",
    name: "Platok",
    price: 20500,
    category: "Новинки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 2,
    collection: "Весенняя коллекция",
    name: "Platok",
    price: 20500,
    category: "Новинки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 3,
    collection: "Весенняя коллекция",
    name: "Platok",
    price: 20500,
    category: "Новинки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 4,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Новинки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 5,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Рубашки и блузы",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 6,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Рубашки и блузы",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 7,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Рубашки и блузы",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 8,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Рубашки и блузы",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 9,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Толстовки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 10,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Толстовки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 11,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Толстовки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 12,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Толстовки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 13,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Брюки и шорты",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 14,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Брюки и шорты",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 15,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Брюки и шорты",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 16,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Брюки и шорты",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 17,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Футболки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 18,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Футболки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 19,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Футболки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
  {
    id: 20,
    collection: "Kenzo",
    name: "Platok",
    price: 20500,
    category: "Футболки",
    images: [
      {
        id: 1,
        image: "https://www.gakkard.ru/userfiles/articles/blog/9316.jpg",
      },
    ],
  },
];

const Home = () => {
  const products = useSelector(selectProducts);

  console.log(products);

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <div>
        <Slider collections={collections} load={true} />
        <CollectionsList collections={collections} load={true} />
        <CategoryList
          categoryName="Новинки"
          products={products.items}
        />
        <CategoryList
          categoryName="Рубашки и блузы"
          products={products.items}
        />
        <CollectionBlock
          collection={collections[0]}
          products={Products.filter(
            (v) => v.collection === collections[0].name
          )}
          version="one"
        />
        <CategoryList
          categoryName="Толстовка"
          products={products.items}
        />
        <CategoryList
          categoryName="Брюки и шорты"
          products={products.items}
        />
        <CollectionBlock
          collection={collections[0]}
          products={Products.filter(
            (v) => v.collection === collections[0].name
          )}
          version="two"
        />
        <CategoryList
          categoryName="Футболки"
          products={products.items}
        />
        <CategoryList
          categoryName="Абайи"
          products={products.items}
        />
        <CollectionBlock
          collection={collections[0]}
          products={Products.filter(
            (v) => v.collection === collections[0].name
          )}
          version="three"
        />
        <CategoryList
          categoryName="Футболки"
          products={products.items}
        />
        <CategoryList
          categoryName="Абайи"
          products={products.items}
        />
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchProducts());
    return {
      props: {},
    };
  }
);

export default Home;
