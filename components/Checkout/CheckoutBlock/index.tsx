import React from "react";
import styles from "./CheckoutBlock.module.scss";
import { useSelector } from "react-redux";
import { cartFullItemsCount, cartSelector } from "@/redux/cart/selector";
import Button from "@/components/Button";

const CheckoutBlock = () => {
  const ItemsCount = useSelector(cartFullItemsCount);
  const { totalPrice } = useSelector(cartSelector);
  return (
    <div className={styles.checkoutBLock}>
      <h3>Итого в корзине</h3>
      <div className={styles.quantityCheckout}>
        <span>Количество товаров</span>
        <span>{ItemsCount}</span>
      </div>
      <div>
        <span>Общая стоимость</span>
        <span>{totalPrice} ₽</span>
      </div>
      <Button>Оформить заказ</Button>
    </div>
  );
};

export default CheckoutBlock;
