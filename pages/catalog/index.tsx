import ProductItem from "@/components/ProductItem";
import { fetchProducts } from "@/redux/products/asyncAction";
import { selectProducts } from "@/redux/products/slice";
import { AppState, useAppDispatch, wrapper } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Catalog.module.scss";
import BreadCrumbs from "@/components/BreadCrumbs";
import Sidebar from "@/components/Sidebar";
import FilterSelect from "@/components/FilterSelect";
import MobileFilters from "@/components/MobileFilters";
import Link from "next/link";
import {
  setCategoryValue,
  setFilters,
  setPriceValue,
} from "@/redux/filters/slice";
import selectFilters from "@/redux/filters/selectMenu";
import { useRouter } from "next/router";
import { FetchProductsArgs } from "@/redux/products/types";
import selectMenu, { getMenuById } from "@/redux/menu/selectMenu";
import Filters from "@/components/Filters";

const Catalog = () => {
  const products = useSelector(selectProducts);
  const { category, min_price, max_price, page, menu } =
    useSelector(selectFilters);

  const activeMenu = useSelector((state: AppState) => getMenuById(state, menu));

  const dispatch = useAppDispatch();

  const router = useRouter();

  useEffect(() => {
    const updateQueryParams = () => {
      const queryParams: FetchProductsArgs = {};

      // if (menu !== null) {
      //   queryParams.menu = menu;
      // }
      if (category !== null) {
        queryParams.category = category;
      }
      if (min_price > 0) {
        queryParams.min_price = min_price;
      }
      if (max_price > 0) {
        queryParams.max_price = max_price;
      }
      if (page !== null) {
        queryParams.page = page;
      }

      router.push({
        pathname: router.pathname,
        query: queryParams,
      });
    };

    updateQueryParams();
  }, [category, min_price, max_price, page]);

  return (
    <div className={styles.catalog}>
      <div className={styles.breadcrumbs}>
        <BreadCrumbs
          value1={activeMenu?.name || ""}
          value2={
            activeMenu?.categories.find((v) => v.id === category)
              ?.category_name || ""
          }
          onClickValue1={() => dispatch(setCategoryValue(null))}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div>
          <Filters />
          <div className={styles.mobileFilters}>
            <MobileFilters />
          </div>
          <ul className={styles.productList}>
            {products.items.map((product) => (
              <li key={product.id}>
                <ProductItem
                  id={product.id}
                  name={product.product_name}
                  collection_name={product.collection.collection_name}
                  price={product.price}
                  image={product.images[0].image[0].image}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { query } = context;

    console.log(query);

    await store.dispatch(
      fetchProducts({
        ...query,
      })
    );

    store.dispatch(
      setFilters({
        menu: query.menu !== null ? Number(query.menu) : 3,
        category: query.category !== null ? Number(query.category) : null,
        min_price: Number(query.min_price) ? Number(query.min_price) : 0,
        max_price: Number(query.max_price) ? Number(query.max_price) : 0,
        page: query.page ? Number(query.page) : 1,
        sizes: [],
        colors: [],
      })
    );

    return {
      props: {},
    };
  }
);

export default Catalog;
