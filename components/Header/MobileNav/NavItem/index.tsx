import React, { FC } from "react";
import styles from "./NavItem.module.scss";
import Link from "next/link";

interface NavItemProps {
  change: (a: number[]) => void;
  setMenuActive: (a: boolean) => void;
  activeItems: number[];
  id: number;
  name: string;
  path?: string;
  submenu?: { id: number; name: string; path?: string }[];
}

const NavItem: FC<NavItemProps> = ({
  change,
  setMenuActive,
  activeItems,
  id,
  name,
  path,
  submenu,
}) => {
  const ChangeActiveSubmenu = (id: number) => {
    if (!activeItems.includes(id)) {
      const newArr = [...activeItems, id];
      change(newArr);
    } else {
      const newArr = activeItems.filter((v) => v !== id);
      change(newArr);
    }
  };

  return (
    <span className={styles.navItem}>
      <Link onClick={() => ChangeActiveSubmenu(id)} href={path ? path : "#"}>
        {name}
      </Link>
      <div
        className={`${styles.submenu} ${
          activeItems.findIndex((v) => v === id) !== -1 && styles.active
        }`}
      >
        <div className={styles.wrapper}>
          <ul>
            {submenu &&
              submenu.map((item) => (
                <li onClick={() => setMenuActive(false)} key={item.id}>
                  <Link
                    href={
                      item.path || item.path === ""
                        ? item.path
                        : `/catalog/?menu=${id}&category=${item.id}`
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </span>
  );
};

export default NavItem;
