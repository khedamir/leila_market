import ProductItem from "@/components/ProductItem";
import { fetchProducts } from "@/redux/products/asyncAction";
import { selectProducts } from "@/redux/products/slice";
import { wrapper } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./Catalog.module.scss";
import BreadCrumbs from "@/components/BreadCrumbs";
import Sidebar from "@/components/Sidebar";
import FilterSelect from "@/components/FilterSelect";
import MobileFilters from "@/components/MobileFilters";
import Link from "next/link";

const Catalog = () => {
  const products = useSelector(selectProducts);
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
          <ul className={styles.productList}>
            {products.items.map((product) => (
              <li key={product.id}>
                <Link href={'/product/1'}>
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
  (store) => async () => {
    await store.dispatch(fetchProducts());
    return {
      props: {},
    };
  }
);

export default Catalog;
