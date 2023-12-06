import CategoryList from "@/components/CategoryList";

import { wrapper } from "@/redux/store";
import { useSelector } from "react-redux";
import { fetchHomeData } from "@/redux/home/asyncAction";
import { selectHomeData } from "@/redux/home/slice";

import CollectionsList from "@/components/pageHome/CollectionList";
import CollectionBlock from "@/components/pageHome/CollectionBlock";
import Slider from "@/components/Slider";
import Head from "next/head";

const Home = () => {
  const { data } = useSelector(selectHomeData);
  const { categories, collections_with_products } = data;

  return (
    <>
      <Head>
        <title>Главное</title>
      </Head>
      <div>
        <Slider items={data.collections} />
        <CollectionsList collections={data.all_collections} load={true} />
        {categories.slice(0, 2).map((item) => (
          <CategoryList
            key={item.category.id}
            title={item.category.category_name}
            category={item.category}
            products={item.products}
          />
        ))}
        {collections_with_products[0] && (
          <CollectionBlock
            collection={collections_with_products[0].collection}
            products={collections_with_products[0].products}
            version="one"
          />
        )}
        {categories.slice(2, 4).map((item) => (
          <CategoryList
            key={item.category.id}
            title={item.category.category_name}
            category={item.category}
            products={item.products}
          />
        ))}
        {collections_with_products[1] && (
          <CollectionBlock
            collection={collections_with_products[1].collection}
            products={collections_with_products[1].products}
            version="two"
          />
        )}
        {categories.slice(4, 6).map((item) => (
          <CategoryList
            key={item.category.id}
            title={item.category.category_name}
            category={item.category}
            products={item.products}
          />
        ))}
        {collections_with_products[2] && (
          <CollectionBlock
            collection={collections_with_products[2].collection}
            products={collections_with_products[2].products}
            version="three"
          />
        )}
        {categories.slice(6, 8).map((item) => (
          <CategoryList
            key={item.category.id}
            title={item.category.category_name}
            category={item.category}
            products={item.products}
          />
        ))}
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
