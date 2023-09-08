import React, { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";
import { cartFullItemsCount, cartSelector } from "@/redux/cart/selector";
import { useAppDispatch } from "@/redux/store";
import { setCartItems } from "@/redux/cart/slice";
import { getCartFronLS } from "@/utils/getCartFronLS";
import Search from "../Search";
import { selectUser } from "@/redux/auth/slice";
import { localFetch } from "@/redux/axios";

const Header = () => {
  const { items } = useSelector(cartSelector);
  const { user } = useSelector(selectUser);
  const ItemsCount = useSelector(cartFullItemsCount);
  const isMounted = useRef(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCartItems(getCartFronLS()));
  }, [dispatch]);

  useEffect(() => {
    if (user && items.length) {
      console.log("hi");
      localFetch.post("/profile/add-card-products/", items);
    }
  }, [user, items]);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cartItems", json);
    }
    isMounted.current = true;
  }, [items, user]);

  return (
    <header className={styles.header}>
      <Nav />
      <MobileNav />
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image
            width={162}
            height={52.91}
            src={"/images/logo.svg"}
            alt="logo"
          />
        </Link>
      </div>
      <ul className={styles.rightPanel}>
        <li className={styles.search}>
          <Search />
        </li>
        <li className={styles.profile}>
          <Link href={"/profile"}>
            <Image
              width={24}
              height={24}
              src={"/images/profile.svg"}
              alt="profile"
            />
          </Link>
        </li>
        <li className={styles.favorites}>
          <Link href={"/favorites"}>
            <Image
              width={24}
              height={24}
              src={"/images/favorites.svg"}
              alt="favorites"
            />
          </Link>
          {0 > 0 && (
            <span className={styles.count}>
              <span></span>
            </span>
          )}
        </li>
        <li className={styles.basket}>
          <Link href={"/cart"}>
            <Image
              width={24}
              height={24}
              src={"/images/basket.svg"}
              alt="basket"
            />
            {ItemsCount > 0 && (
              <span className={styles.count}>
                {ItemsCount > 99 ? (
                  <span>&#8734;</span>
                ) : (
                  <span>{ItemsCount}</span>
                )}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
