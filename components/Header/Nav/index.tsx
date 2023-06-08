import React, { useState } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { categories } from "./categoories";



const navigation = [
  { id: 1, title: "Женщинам", path: "/women", submenu: categories },
  { id: 2, title: "Мужчинам", path: "/men", submenu: categories },
  { id: 3, title: "Для Хаджа и Умры", path: "/hadj", submenu: categories },
  {
    id: 4,
    title: "Покупателям",
    path: "#",
    submenu: [
      { id: 1, title: "Доставка", path: "" },
      { id: 2, title: "Возврат", path: "" },
      { id: 3, title: "Контакты", path: "" },
      { id: 4, title: "Telegram", path: "" },
      { id: 5, title: "Whatsapp", path: "" },
      { id: 6, title: "Instagram", path: "" },
    ],
  },
];

const Nav = () => {
  const [index, setIndex] = useState<number>();
  return (
    <>
      <nav onMouseOut={() => setIndex(undefined)} className={styles.mainNav}>
        {navigation.map(({ id, title, path, submenu }) => (
          <span key={id} className={styles.navItem}>
            <Link onMouseOver={() => setIndex(id)} href={path}>
              {title}
            </Link>
            <div
              onMouseOver={() => setIndex(index)}
              className={`${styles.submenu} ${id === index && styles.active}`}
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
      <MobileNav />
    </>
  );
};

export default Nav;
