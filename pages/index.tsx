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
        <CategoryList
          title={data.categories[0].category.category_name}
          category={data.categories[0].category}
          products={data.categories[0].products}
        />
        {/* <CategoryList
          title={data.categories[1].category.category_name}
          category={data.categories[1].category}
          products={data.categories[1].products}
        />
        <CollectionBlock
          collection={data.collections_with_products[0].collection}
          products={data.collections_with_products[0].products}
          version="one"
        />
        <CategoryList
          title={data.categories[2].category.category_name}
          category={data.categories[2].category}
          products={data.categories[2].products}
        />
        <CategoryList
          title={data.categories[3].category.category_name}
          category={data.categories[3].category}
          products={data.categories[3].products}
        />
        <CollectionBlock
          collection={data.collections_with_products[1].collection}
          products={data.collections_with_products[1].products}
          version="two"
        />
        <CategoryList
          title={data.categories[4].category.category_name}
          category={data.categories[4].category}
          products={data.categories[4].products}
        />
        <CategoryList
          title={data.categories[5].category.category_name}
          category={data.categories[5].category}
          products={data.categories[5].products}
        />
        <CollectionBlock
          collection={data.collections_with_products[2].collection}
          products={data.collections_with_products[2].products}
          version="three"
        />
        <CategoryList
          title={data.categories[6].category.category_name}
          category={data.categories[6].category}
          products={data.categories[6].products}
        />
        <CategoryList
          title={data.categories[7].category.category_name}
          category={data.categories[7].category}
          products={data.categories[7].products}
        /> */}
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
