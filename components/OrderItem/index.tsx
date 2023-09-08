import React, { FC, useState } from "react";
import styles from "./OrderItem.module.scss";
import { OrderStatus, OrderType } from "@/redux/types";
import DetailsItem from "../DetailsItem";
import Image from "next/image";

interface OrderItemProps {
  order: OrderType;
}

const OrderItem: FC<OrderItemProps> = ({ order }) => {
  const [productsActive, setProductsActive] = useState("");

  return (
    <div key={order.id} className={styles.order}>
      <div className={styles.orderTop}>
        <span>Номер заказа: {order.order_number}</span>
        <span>{new Date(order.created_at).toLocaleDateString()}</span>
      </div>
      <p className={styles.amount}>Сумма заказа: {order.amount}</p>
      <p>
        Адрес: {order.postal_code}, {order.city}, {order.street},{" "}
        {order.house ? order.house : order.apartment_office}
      </p>
      <div className={styles.products}>
        <DetailsItem
          value="active"
          title="Товары"
          activeItem={productsActive}
          changeActiveItem={(v) => {
            if (productsActive) {
              setProductsActive("");
            } else {
              setProductsActive(v);
            }
          }}
        >
          <div className={styles.productsList}>
            {order.products.map((product) => (
              <div key={product.id} className={styles.productItem}>
                <Image src={product.image} width={30} height={40} alt="" />
                <div className={styles.description}>
                  <p>{product.product_name}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </DetailsItem>
      </div>
      <p className={styles.status}>
        {OrderStatus[order.status as keyof typeof OrderStatus]}
      </p>
    </div>
  );
};

export default OrderItem;
