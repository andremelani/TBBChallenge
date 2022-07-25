import styles from "./styles.module.scss";
import { useState } from "react";
import Link from "next/link";

import { itemsMobile } from "../NavItems";
import { List, X } from "phosphor-react";


export const NavbarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.menu}>
          {openMenu ? (
            <X
              size={24}
              color={"#7B7070"}
              className={styles.icon}
              onClick={handleCloseMenu}
            />
          ) : (
            <List
              size={24}
              color={"#7B7070"}
              className={styles.icon}
              onClick={handleOpenMenu}
            />
          )}
        </div>
        <img src="/images/logo.png" />
        <div className={styles.search}>
          <img src="/images/ic.search.png" />
        </div>
      </header>
      {openMenu ? (
        <div className={styles.container}>
          <ul className={styles.background}>
            {itemsMobile.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={styles.submenuItem}
                    onClick={handleCloseMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
};
