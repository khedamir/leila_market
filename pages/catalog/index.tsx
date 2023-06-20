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

const Catalog = () => {
  const products = useSelector(selectProducts);
  return (
    <div className={styles.catalog}>
      <BreadCrumbs />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>
          <div className={styles.filters}>
            <FilterSelect />
            <FilterSelect />
            <FilterSelect />
          </div>
          <ul className={styles.productList}>
            {products.items.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     await store.dispatch(fetchProducts());
//     return {
//       props: {},
//     };
//   }
// );

export default Catalog;
