import React, { useState } from "react";
import Link from "next/link";
import styles from "./MobileNav.module.scss";
import { categories } from "../categoories";
import Humburger from "../../../Humburger";

const navigation = [
  { id: 1, title: "Женщинам", path: "#", submenu: categories },
  { id: 2, title: "Мужчинам", path: "#", submenu: categories },
  { id: 3, title: "Для Хаджа и Умры", path: "#", submenu: categories },
  {
    id: 4,
    title: "Покупателям",
    path: "#",
    submenu: [
      { id: 1, title: "Доставка", path: "" },
      { id: 2, title: "Возврат", path: "" },
      { id: 3, title: "Контакты", path: "" },
    ],
  },
  {
    id: 5,
    title: "Сообщества",
    path: "#",
    submenu: [
      { id: 4, title: "Telegram", path: "" },
      { id: 5, title: "Whatsapp", path: "" },
      { id: 6, title: "Instagram", path: "" },
    ],
  },
];

const MobileNav = () => {
  const [index, setIndex] = useState<number[]>([]);
  const [active, setActive] = useState<boolean>(false);

  const ChangeActiveSubmenu = (id: number) => {
    if (index.findIndex((v) => v === id) === -1) {
      setIndex((prev) => [...prev, id]);
    } else {
      const newArr = index.filter((v) => v !== id);
      setIndex(newArr);
    }
  };

  return (
    <div className={styles.mobileNav}>
      <div className={styles.burger}>
        <Humburger setMenuOpen={setActive} menuOpen={active} />
      </div>
      <nav className={`${styles.mainNav} ${active && styles.active}`}>
        <span className={styles.navItem}>
          <Link href={""}>Войти в профиль</Link>
        </span>
        {navigation.map(({ id, title, path, submenu }) => (
          <span key={id} className={styles.navItem}>
            <Link onClick={() => ChangeActiveSubmenu(id)} href={path}>
              {title}
            </Link>
            <div
              className={`${styles.submenu} ${
                index.findIndex((v) => v === id) !== -1 && styles.active
              }`}
            >
              <div className={styles.wrapper}>
                <ul>
                  {submenu.map(({ id, title, path }) => (
                    <li key={id}>
                      <Link href={path}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </span>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
