import React, { FC, ReactNode, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.scss";
import { useAppDispatch } from "@/redux/store";
import { fetchAuthMe } from "@/redux/auth/asyncAction";
import { fetchFavorites } from "@/redux/favorites/asyncAction";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      dispatch(fetchFavorites());
      dispatch(fetchAuthMe());
    }
  }, [dispatch]);
  return (
    <div>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
