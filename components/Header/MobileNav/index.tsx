import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./MobileNav.module.scss";
import { useSelector } from "react-redux";
import selectMenu from "@/redux/menu/selectMenu";
import Burger from "@/components/Burger";
import NavItem from "./NavItem";
import { selectUser } from "@/redux/auth/slice";

const MenuItems = [
  {
    id: 1,
    name: "Покупателям",
    path: "#",
    submenu: [
      { id: 1, name: "Доставка", path: "" },
      { id: 2, name: "Возврат", path: "" },
      { id: 3, name: "Контакты", path: "" },
    ],
  },
  {
    id: 2,
    name: "Сообщества",
    path: "#",
    submenu: [
      { id: 1, name: "Telegram", path: "" },
      { id: 2, name: "Whatsapp", path: "" },
      { id: 3, name: "Instagram", path: "" },
    ],
  },
];

const MobileNav = () => {
  const { items } = useSelector(selectMenu);
  const { user } = useSelector(selectUser);
  const [active, setActive] = useState<boolean>(false);

  const [activeItems, setActiveItems] = useState<number[]>([]);
  const [activeStaticItems, setActiveStaticItems] = useState<number[]>([]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  return (
    <div className={styles.mobileNav}>
      <div className={styles.burger}>
        <Burger setMenuOpen={setActive} menuOpen={active} />
      </div>
      <nav className={`${styles.mainNav} ${active && styles.active}`}>
        <div className={styles.wrapper}>
          <span onClick={() => setActive(false)} className={styles.navItem}>
            {user ? (
              <Link href={"/profile"}>Перейти в профиль</Link>
            ) : (
              <Link href={"/login"}>Войти в профиль</Link>
            )}
          </span>
          {items.map(({ id, menu_name, categories }) => (
            <NavItem
              key={id}
              activeItems={activeItems}
              change={setActiveItems}
              id={id}
              name={menu_name}
              submenu={categories}
            />
          ))}
          {MenuItems.map(({ id, name, path, submenu }) => (
            <NavItem
              key={id}
              activeItems={activeStaticItems}
              change={setActiveStaticItems}
              id={id}
              name={name}
              path={path}
              submenu={submenu}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
