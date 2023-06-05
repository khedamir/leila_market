import React, { FC, ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
