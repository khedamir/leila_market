import React, { useState, useEffect } from "react";
import styles from "./Orders.module.scss";
import { OrderStatus, OrderType, Status } from "@/redux/types";
import { localFetch } from "@/redux/axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/auth/slice";
import DetailsItem from "@/components/DetailsItem";
import OrderItem from "@/components/OrderItem";

const Orders = () => {
  const [orders, setOrders] = useState<OrderType[]>();
  const { status } = useSelector(selectUser);
  const navigate = useRouter();
  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await localFetch.get("api/orders/");
      return data;
    };

    if (!localStorage.getItem("access_token")) {
      navigate.push("/login");
    }
    if (status === Status.ERROR) {
      navigate.push("/login");
    }

    fetchOrders()
      .then((response) => {
        setOrders(response);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [status, navigate]);
  return (
    <div className={styles.orders}>
      <h1>Заказы</h1>
      <div className={styles.ordersList}>
        {orders?.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
