import React, { FC } from "react";
import styles from "./CategoryList.module.scss";
import { ProductType } from "@/pages";
import SectionHeader from "../SectionHeader";
import ProductItem from "../ProductItem";

interface CategoryListProps {
  products: ProductType[];
  categoryName: string;
}

const CategoryList: FC<CategoryListProps> = ({ products, categoryName }) => {
  return (
    <div className={styles.categoryList}>
      <SectionHeader title={categoryName} link="" />
      <div className={styles.categoryListItems}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
