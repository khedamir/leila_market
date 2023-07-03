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
        <Slider collections={data.collections} load={true} />
        <CollectionsList collections={data.all_collections} load={true} />
        <CategoryList
          categoryName={data.categories[0].category.name}
          products={data.categories[0].products}
        />
        <CategoryList
          categoryName={data.categories[1].category.name}
          products={data.categories[1].products}
        />
        <CollectionBlock
          collection={data.collections_with_products[0].collection}
          products={data.collections_with_products[0].products}
          version="one"
        />
        <CategoryList
          categoryName={data.categories[2].category.name}
          products={data.categories[2].products}
        />
        <CategoryList
          categoryName={data.categories[3].category.name}
          products={data.categories[3].products}
        />
        <CollectionBlock
          collection={data.collections_with_products[1].collection}
          products={data.collections_with_products[1].products}
          version="two"
        />
        <CategoryList
          categoryName={data.categories[4].category.name}
          products={data.categories[4].products}
        />
        <CategoryList
          categoryName={data.categories[5].category.name}
          products={data.categories[5].products}
        />
        <CollectionBlock
          collection={data.collections_with_products[2].collection}
          products={data.collections_with_products[2].products}
          version="three"
        />
        <CategoryList
          categoryName={data.categories[6].category.name}
          products={data.categories[6].products}
        />
        <CategoryList
          categoryName={data.categories[7].category.name}
          products={data.categories[7].products}
        />
      </div>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(fetchHomeData());
  return {
    props: {},
  };
});

export default Home;
