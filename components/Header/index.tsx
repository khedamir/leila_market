import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
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
        <li className={styles.search}>Поиск</li>
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
        </li>
        <li className={styles.basket}>
          <Link href={"/cart"}>
            <Image
              width={24}
              height={24}
              src={"/images/basket.svg"}
              alt="basket"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
