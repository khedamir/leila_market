import Head from "next/head";
import styles from "@/styles/Home.module.scss";

import Slider from "@/components/Slider";
import CollectionsList from "@/components/CollectionsList";
import CategoryList from "@/components/CategoryList";
import CollectionBlock from "@/components/CollectionBlock";

import { wrapper } from "@/redux/store";
import { useSelector } from "react-redux";
import { fetchHomeData } from "@/redux/home/asyncAction";
import { selectHomeData } from "@/redux/home/slice";
import { Status } from "@/redux/types";

const Home = () => {
  const { data, status } = useSelector(selectHomeData);

  if (status === Status.LOADING) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <div>
        <Slider items={data.collections} load={true} />
        <CollectionsList collections={data.all_collections} load={true} />
        {data.categories.map(
          (item, id) =>
            (id === 0 || id === 1) && (
              <CategoryList
                title={item.category.category_name}
                category={item.category}
                products={item.products}
              />
            )
        )}
        {data.collections_with_products[0] && (
          <CollectionBlock
            collection={data.collections_with_products[0].collection}
            products={data.collections_with_products[0].products}
            version="one"
          />
        )}-
        {data.categories.map(
          (item, id) =>
            (id === 2 || id === 3) && (
              <CategoryList
                title={item.category.category_name}
                category={item.category}
                products={item.products}
              />
            )
        )}
        {data.collections_with_products[1] && (
          <CollectionBlock
            collection={data.collections_with_products[1].collection}
            products={data.collections_with_products[1].products}
            version="two"
          />
        )}
        {data.categories.map(
          (item, id) =>
            (id === 4 || id === 5) && (
              <CategoryList
                title={item.category.category_name}
                category={item.category}
                products={item.products}
              />
            )
        )}
        {data.collections_with_products[2] && (
          <CollectionBlock
            collection={data.collections_with_products[2].collection}
            products={data.collections_with_products[2].products}
            version="three"
          />
        )}
        {data.categories.map(
          (item, id) =>
            (id === 6 || id === 7) && (
              <CategoryList
                title={item.category.category_name}
                category={item.category}
                products={item.products}
              />
            )
        )}
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchHomeData());
    return {
      props: {},
    };
  }
);

export default Home;
