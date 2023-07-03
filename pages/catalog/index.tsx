import ProductItem from "@/components/ProductItem";
import { fetchProducts } from "@/redux/products/asyncAction";
import { selectProducts } from "@/redux/products/slice";
import { useAppDispatch, wrapper } from "@/redux/store";
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
import QueryString from "qs";
import selectFilters from "@/redux/filters/selectMenu";
import { useRouter } from "next/router";
import { FetchProductsArgs } from "@/redux/products/types";

const Catalog = () => {
  const products = useSelector(selectProducts);
  const { category, min_price, max_price, page, menu } =
    useSelector(selectFilters);

  const items = useSelector(selectFilters);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = QueryString.parse(window.location.search.substring(1));

  // dispatch(
  //   setFilters({
  //     category: params.category ? Number(params.category) : null,
  //     min_price: params.min_price ? Number(params.min_price) : 0,
  //     max_price: params.max_price ? Number(params.max_price) : 0,
  //     page: params.page ? Number(params.page) : 0,
  //   })
  // );
  //   }
  // }, []);

  const router = useRouter();

  useEffect(() => {
    const updateQueryParams = () => {
      const queryParams: FetchProductsArgs = {};
      console.log(items);

      // if (menu) {
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
        <BreadCrumbs />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div>
          <div className={styles.filters}>
            <FilterSelect />
            <FilterSelect />
            <FilterSelect />
            <FilterSelect />
          </div>
          <div className={styles.mobileFilters}>
            <MobileFilters />
          </div>
          <p
            onClick={() =>
              dispatch(setPriceValue({ min_price: 2000, max_price: 4000 }))
            }
          >
            Click
          </p>
          <ul className={styles.productList}>
            {products.items.map((product) => (
              <li key={product.id}>
                <Link href={`/product/${product.id}`}>
                  <ProductItem product={product} />
                </Link>
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
        menu: query.menu !== null ? Number(query.menu) : 1,
        category: query.category !== null ? Number(query.category) : null,
        min_price: Number(query.min_price) ? Number(query.min_price) : 0,
        max_price: Number(query.max_price) ? Number(query.max_price) : 0,
        page: query.page ? Number(query.page) : 1,
      })
    );

    return {
      props: {},
    };
  }
);

export default Catalog;
