import React from "react";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";
import selectFilters from "@/redux/filters/selectMenu";
import { getMenuById } from "@/redux/menu/selectMenu";
import { AppState, useAppDispatch } from "@/redux/store";
import { setCategoryValue } from "@/redux/filters/slice";

const Sidebar = () => {
  const { menu: menuId } = useSelector(selectFilters);
  const menu = useSelector((state: AppState) => getMenuById(state, menuId));
  const dispatch = useAppDispatch();

  return (
    <div className={styles.sidebar}>
      <h3>{menu?.name}</h3>
      <ul>
        {menu?.categories.map(({ name, id }) => (
          <li onClick={() => dispatch(setCategoryValue(id))} key={id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
