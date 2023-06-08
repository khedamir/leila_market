import React, { FC, ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.scss";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
