import React, { useEffect, useState, useCallback } from "react";
import styles from "./Catalog.module.scss";

import ProductItem from "@/components/ProductItem";
import BreadCrumbs from "@/components/BreadCrumbs";
import Sidebar from "@/components/Sidebar";
import MobileFilters from "@/components/MobileFilters";
import Filters from "@/components/Filters";

import { useSelector } from "react-redux";
import { AppState, useAppDispatch, wrapper } from "@/redux/store";
import { Status } from "@/redux/types";
import { fetchCatalogData } from "@/redux/catalog/asyncAction";
import { fetchNextPage, fetchProducts } from "@/redux/products/asyncAction";
import { selectProducts, setItems } from "@/redux/products/slice";
import { setCategoryValue, setFilters } from "@/redux/filters/slice";
import selectFilters from "@/redux/filters/selectMenu";
import { OrderType } from "@/redux/filters/types";
import { getMenuById } from "@/redux/menu/selectMenu";
import { useUpdateQueryParams } from "@/hooks/useUpdateQueryParams";
import { fetch } from "@/redux/axios";
import { FetchProductsArgs, ProductsSlice } from "@/redux/products/types";
import { useRouter } from "next/router";

// const fetchNextPage = async (params: FetchProductsArgs, page: number) => {
//   const { data } = await fetch.get(`/api/product?page=${page}`, {
//     params,
//   });
//   return data as ProductsSlice;
// };

const Catalog = () => {
  const { items, status } = useSelector(selectProducts);
  const filters = useSelector(selectFilters);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const totalPage = Math.ceil(items.count / 9);
  console.log(totalPage);

  const activeMenu = useSelector((state: AppState) =>
    getMenuById(state, filters.menu)
  );

  const dispatch = useAppDispatch();

  useUpdateQueryParams(filters);

  useEffect(() => {
    if (page > 1) {
      // fetchNextPage(router.query, page).then((response) => {
      //   dispatch(setItems(response));
      // });
      dispatch(fetchNextPage({ ...router.query, page: String(page) }));
    }
  }, [page, dispatch, router.query]);

  const handleScroll = useCallback(() => {
    if (page < totalPage) {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 200) {
        setPage(page + 1);
      }
    }
  }, [page, totalPage, setPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const changeCategory = (name: string) => {
    setPage(1);
    dispatch(setCategoryValue(name));
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.breadcrumbs}>
        <BreadCrumbs
          value1={activeMenu?.menu_name || ""}
          value2={
            activeMenu?.categories.find((v) => v.name === filters.category)
              ?.name || ""
          }
          onClickValue1={() => dispatch(setCategoryValue(""))}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Sidebar
            items={activeMenu?.categories}
            activeItem={filters.category}
            onClickFn={(name: string) => changeCategory(name)}
            title={activeMenu?.menu_name}
          />
        </div>
        <div className={styles.content}>
          <Filters />
          <MobileFilters />
          <ul className={styles.productList}>
            {items.results.map((product) => (
              <li className={styles.productItem} key={product.id}>
                <ProductItem
                  id={product.id}
                  product_name={product.product_name}
                  collection_name={product.collection_name}
                  price={product.price}
                  image={product.image}
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

    const isCatalogDataFetched = store.getState().catalog.status;

    if (isCatalogDataFetched === Status.LOADING) {
      await store.dispatch(fetchCatalogData());
    }

    await store.dispatch(
      fetchProducts({
        ...query,
      })
    );

    store.dispatch(
      setFilters({
        menu: query.menu !== null ? Number(query.menu) : 3, //sonra
        category: query.category ? String(query.category) : "",
        min_price: Number(query.min_price) ? Number(query.min_price) : 0,
        max_price: Number(query.max_price) ? Number(query.max_price) : 0,
        // page: query.page ? Number(query.page) : 1,
        size: query.size ? String(query.size) : "",
        color: query.color ? String(query.color) : "",
        search: query.search ? String(query.search) : "",
        ordering: query.ordering
          ? (query.ordering as OrderType)
          : OrderType.default,
      })
    );

    return {
      props: {},
    };
  }
);

export default Catalog;
