import React, { FC } from "react";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  items: { id: number; name: string; link?: string }[];
  activeItem: string;
  onClickFn: (name: string) => void;
  title: string;
}

const Sidebar: FC<SidebarProps> = ({ items, activeItem, onClickFn, title }) => {
  return (
    <div className={styles.sidebar}>
      <h3>{title}</h3>
      <ul>
        {items?.map(({ name, id, link }) => (
          <a href={link} key={id}>
            <li
              className={`${activeItem === name && styles.active}`}
              onClick={() => onClickFn(name)}
            >
              {name}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
