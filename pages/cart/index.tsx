import React, { useState } from "react";
import styles from "./Cart.module.scss";
import RemoveIcon from "../../public/images/close-icon.svg";
import Link from "next/link";
import BreadCrumbs from "@/components/BreadCrumbs";
import SelectSize from "@/components/SelectSize";
import Quantity from "@/components/Quantity";
import { useSelector } from "react-redux";
import { cartSelector } from "@/redux/cart/selector";
import {
  addItem,
  changeSize,
  clearItems,
  minusItem,
  removeItem,
} from "@/redux/cart/slice";
import { useAppDispatch } from "@/redux/store";
import Checkout from "@/components/Checkout";

const Cart = () => {
  const { items } = useSelector(cartSelector);
  const [checkoutActive, setCheckoutActive] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.cart}>
      <BreadCrumbs value1={"Корзина"} />
      <header>
        <h2>Корзина</h2>
        {items.length < 0 && (
          <p>Количество товаров в корзине: {items.length}</p>
        )}
      </header>

      {items.length !== 0 ? (
        <>
          <div
            className={`${styles.cartItems} ${checkoutActive && styles.active}`}
          >
            <div className={styles.removeAll}>
              <p onClick={() => dispatch(clearItems())}>Удалить всё</p>
            </div>

            <div>
              {items.map((item) => (
                <div
                  key={item.product.id + item.size + item.color}
                  className={styles.cartItem}
                >
                  <Link
                    className={styles.cartItemImg}
                    href={`/product/${item.product.id}`}
                  >
                    <img src={item.product.image} alt="" />
                  </Link>
                  <div className={styles.properties}>
                    <div className={styles.description}>
                      <Link href={`/product/${item.product.id}`}>
                        <p className={styles.sku}>арт. {item.product.sku}</p>
                        <div className={styles.mobileDescription}>
                          <div className={styles.wrapper}>
                            <span>
                              {
                                item.product.sizes.find(
                                  (i) => i.size.id === item.size
                                )?.size.name
                              }
                            </span>
                            <div
                              className={styles.color}
                              style={{
                                backgroundColor: item.product.color_hex,
                              }}
                            ></div>
                            <span>{item.current}шт.</span>
                          </div>
                          <div className={styles.price}>
                            {item.price * item.current} ₽
                          </div>
                        </div>
                        <p className={styles.name}>
                          {item.product.product_name}
                        </p>
                      </Link>
                    </div>

                    <div
                      className={styles.color}
                      style={{ backgroundColor: item.product.color_hex }}
                    ></div>

                    <div className={styles.size}>
                      <SelectSize
                        title={
                          item.product.sizes.find(
                            (i) => i.size.id === item.size
                          )?.size.name || ""
                        }
                        activeItem={item.size}
                        items={item.product.sizes}
                        setActiveItem={(size: number) =>
                          dispatch(changeSize({ item, size }))
                        }
                      />
                    </div>

                    <div className={styles.quantity}>
                      <Quantity
                        maxCurrent={
                          item.product.sizes.find(
                            (i) => i.size.id === item.size
                          )?.quantity
                        }
                        current={item.current}
                        onClickMinus={() => dispatch(minusItem(item))}
                        onClickPlus={() => dispatch(addItem(item))}
                      />
                      <span>{item.price} ₽</span>
                    </div>

                    <div className={styles.price}>
                      {item.price * item.current} ₽
                    </div>

                    <div className={styles.removeItem}>
                      <RemoveIcon onClick={() => dispatch(removeItem(item))} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Checkout active={checkoutActive} setActive={setCheckoutActive} />
        </>
      ) : (
        <div className={styles.emptyCart}>
          <p>Ваша корзина пока пуста</p>
          <a href="/catalog">В каталог</a>
        </div>
      )}
    </div>
  );
};

export default Cart;
