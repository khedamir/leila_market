import ProductItem from "@/components/ProductItem";
import { fetchProducts } from "@/redux/products/asyncAction";
import { selectProducts } from "@/redux/products/slice";
import { AppState, useAppDispatch, wrapper } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Catalog.module.scss";
import BreadCrumbs from "@/components/BreadCrumbs";
import Sidebar from "@/components/Sidebar";
import MobileFilters from "@/components/MobileFilters";
import { setCategoryValue, setFilters } from "@/redux/filters/slice";
import selectFilters from "@/redux/filters/selectMenu";
import { useRouter } from "next/router";
import { FetchProductsArgs } from "@/redux/products/types";
import { getMenuById } from "@/redux/menu/selectMenu";
import Filters from "@/components/Filters";
import { OrderType } from "@/redux/filters/types";
import { isEqual } from "@/utils/isEqual";
import { fetchCatalogData } from "@/redux/catalog/asyncAction";
import { Status } from "@/redux/types";

const Catalog = () => {
  const products = useSelector(selectProducts);
  const { category, min_price, max_price, page, menu, size, color, ordering } =
    useSelector(selectFilters);

  const activeMenu = useSelector((state: AppState) => getMenuById(state, menu));

  const dispatch = useAppDispatch();

  const router = useRouter();

  useEffect(() => {
    const updateQueryParams = () => {
      const queryParams: FetchProductsArgs = {};

      if (category !== null) {
        queryParams.category = String(category);
      }
      if (min_price > 0) {
        queryParams.min_price = String(min_price);
      }
      if (max_price > 0) {
        queryParams.max_price = String(max_price);
      }
      if (page !== null && page !== 1) {
        queryParams.page = String(page);
      }
      if (size.length) {
        queryParams.size = size.join(";");
      }
      if (color.length) {
        queryParams.color = color.join(";");
      }
      if (ordering !== OrderType.default) {
        queryParams.ordering = ordering;
      }

      const currentQueryParams = router.query;

      console.log(queryParams, currentQueryParams);
      if (!isEqual(queryParams, currentQueryParams)) {
        router.push({
          pathname: router.pathname,
          query: queryParams,
        });
      }
    };

    updateQueryParams();
  }, [category, min_price, max_price, page, size, color, ordering]);

  return (
    <div className={styles.catalog}>
      <div className={styles.breadcrumbs}>
        <BreadCrumbs
          value1={activeMenu?.menu_name || ""}
          value2={
            activeMenu?.categories.find((v) => v.id === category)?.name || ""
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
          <MobileFilters />
          <ul className={styles.productList}>
            {products.items.map((product) => (
              <li key={product.id}>
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
        menu: query.menu !== null ? Number(query.menu) : 3,
        category: query.category !== null ? Number(query.category) : null,
        min_price: Number(query.min_price) ? Number(query.min_price) : 0,
        max_price: Number(query.max_price) ? Number(query.max_price) : 0,
        page: query.page ? Number(query.page) : 1,
        size: query.size ? String(query.size).split(";") : [],
        color: query.color ? String(query.color).split(";") : [],
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
