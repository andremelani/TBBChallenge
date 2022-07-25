import styles from "./styles.module.scss";

import { ReactNode } from "react";

import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { NavbarMobile } from "../NavbarMobile";


interface LayoutInterface {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutInterface) => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarDesktop}>
        <Navbar />
      </div>
      <div className={styles.navbarMobile}>
        <NavbarMobile />
      </div>
      {children}
      <Footer />
    </div>
  );
};
