import FilterSelect from "@/components/FilterSelect";
import React, { useState } from "react";
import styles from "./Cart.module.scss";
import Image from "next/image";
import CloseIcon from "../../public/images/close-icon.svg";
import Link from "next/link";
import Input from "@/components/Index";
import Button from "@/components/Button";
import BreadCrumbs from "@/components/BreadCrumbs";
import SelectSize from "@/components/SelectSize";
import Quantity from "@/components/Quantity";

const items = [
  {
    id: 1,
    product_name: "Platye",
    color: "#000",
    sku: "12014",
    image: "https://basket-03.wb.ru/vol300/part30007/30007934/images/big/1.jpg",
    size: [
      { id: 1, name: "X" },
      { id: 2, name: "XS" },
    ],
    active_size: "X",
    quantity: 1,
    price: "22900",
  },
  {
    id: 2,
    product_name: "Platye",
    color: "#000",
    sku: "12014",
    image: "https://basket-03.wb.ru/vol300/part30007/30007934/images/big/1.jpg",
    size: [
      { id: 1, name: "X" },
      { id: 2, name: "XS" },
    ],
    active_size: "X",
    quantity: 1,
    price: "22900",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(items);

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };
  return (
    <div className={styles.cart}>
      <BreadCrumbs value1={"Корзина"} />
      <header>
        <h2>Корзина</h2>
        {cartItems.length ? (
          <p>Количество товаров в корзине: {cartItems.length}</p>
        ) : (
          <p>Ваша корзина пока пуста</p>
        )}
      </header>

      {cartItems.length !== 0 && (
        <>
          <div className={styles.cartItems}>
            <div className={styles.removeAll}>
              <p onClick={() => setCartItems([])}>Удалить всё</p>
            </div>

            <div>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <Link
                    className={styles.cartItemImg}
                    href={`/product/${item.id}`}
                  >
                    <img src={item.image} alt="" />
                  </Link>
                  <div className={styles.description}>
                    <div>
                      <Link href={`/product/${item.id}`}>
                        <p className={styles.sku}>арт. {item.sku}</p>
                        <p className={styles.name}>{item.product_name}</p>
                      </Link>
                    </div>

                    <div
                      className={styles.color}
                      style={{ backgroundColor: item.color }}
                    ></div>

                    <div className={styles.size}>
                      <SelectSize
                        title="X"
                        activeItem="X"
                        items={[]}
                        setActiveItem={(i: string) => {}}
                      />
                    </div>

                    <div className={styles.quantity}>
                      <Quantity />
                      <span>{item.price} ₽</span>
                    </div>

                    <div className={styles.price}>
                      {Number(item.price) * item.quantity} ₽
                    </div>

                    <div
                      onClick={() => removeItem(item.id)}
                      className={styles.removeItem}
                    >
                      <CloseIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.checkout}>
            <h2>Оформление заказа</h2>
            <div className={styles.wrapper}>
              <div className={styles.form}>
                <div className={styles.formItem}>
                  <label htmlFor="">E-mail</label>
                  <Input />
                </div>
                <div className={styles.formItem}>
                  <label htmlFor="">Имя</label>
                  <Input />
                </div>
                <div className={styles.formItem}>
                  <label htmlFor="">Фамилия</label>
                  <Input />
                </div>
              </div>

              <div className={styles.checkoutBLock}>
                <h3>Итого в корзине</h3>
                <div className={styles.quantityCheckout}>
                  <span>Количество товаров</span>
                  <span>{cartItems.length}</span>
                </div>
                <div>
                  <span>Общая стоимость</span>
                  <span>{cartItems.length} ₽</span>
                </div>
                <Button>Оформить заказ</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
