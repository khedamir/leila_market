import React, { useState } from "react";
import styles from "./Nav.module.scss";
import { useSelector } from "react-redux";
import selectMenu from "@/redux/menu/selectMenu";
import NavItem from "./NavItem";

const MenuItems = [
  {
    id: 1,
    name: "Покупателям",
    path: "#",
    submenu: [
      { id: 1, name: "Доставка", path: "" },
      { id: 2, name: "Возврат", path: "" },
      { id: 3, name: "Контакты", path: "" },
      { id: 4, name: "Telegram", path: "" },
      { id: 5, name: "Whatsapp", path: "" },
      { id: 6, name: "Instagram", path: "" },
    ],
  },
];

const Nav = () => {
  const [index, setIndex] = useState<number>();
  const [staticItemActive, setStaticItemActive] = useState<number>();
  const { items } = useSelector(selectMenu);

  const MouseOut = () => {
    setIndex(undefined);
    setStaticItemActive(undefined);
  };

  return (
    <>
      <nav onMouseOut={MouseOut} className={styles.mainNav}>
        {items.map(({ id, menu_name, categories }) => (
          <NavItem
            key={id}
            change={setIndex}
            activeMenuIndex={index}
            id={id}
            name={menu_name}
            submenu={categories}
          />
        ))}
        {MenuItems.map((item) => (
          <NavItem
            key={`item${item.id}`}
            change={setStaticItemActive}
            activeMenuIndex={staticItemActive}
            id={item.id}
            name={item.name}
            path={item.path}
            submenu={item.submenu}
          />
        ))}
      </nav>
    </>
  );
};

export default Nav;
