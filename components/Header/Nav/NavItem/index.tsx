import Link from "next/link";
import React, { FC } from "react";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  change: (id: number | undefined) => void;
  activeMenuIndex: number | undefined;
  id: number;
  name: string;
  path?: string;
  submenu?: { id: number; name: string; path?: string }[];
}

const NavItem: FC<NavItemProps> = ({
  change,
  activeMenuIndex,
  id,
  name,
  path,
  submenu,
}) => {
  return (
    <span className={styles.navItem}>
      <Link
        onMouseOver={() => change(id)}
        href={path ? path : `/catalog/?menu=${id}`}
      >
        {name}
      </Link>
      <div
        onMouseOver={() => change(activeMenuIndex)}
        className={`${styles.submenu} ${
          id === activeMenuIndex && styles.active
        }`}
      >
        <div className={styles.wrapper}>
          <ul>
            {submenu &&
              submenu.map((item) => (
                <li key={item.id}>
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
