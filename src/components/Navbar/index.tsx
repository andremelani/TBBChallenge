import styles from "./styles.module.scss";
import React, { useState } from "react";
import Link from "next/link";

import { CaretDown } from "phosphor-react";
import { itemsMenu } from "../NavItems";
import { ButtonContact } from "../ButtonContact";
import { DropdownAbout, DropdownIntimate, DropdownProducts } from "../Dropdown";

export const Navbar = () => {
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownProducts, setDropdownProducts] = useState(false);
  const [dropdownIntimate, setDropdownIntimate] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.menu}></div>
        <img src="/images/logo.png" />
        <div className={styles.search}>
          <img src="/images/ic.search.png" />
        </div>
      </header>
      <nav className={styles.navbar}>
        <ul className={styles.navItems}>
          {itemsMenu.map((item) => {
            if (item.title === "about us") {
              return (
                <li
                  key={item.id}
                  className={styles.navItem}
                  onMouseEnter={() => setDropdownAbout(true)}
                  onMouseLeave={() => setDropdownAbout(false)}
                >
                  <Link href={item.path}>{item.title}</Link>
                  <div>
                    <CaretDown
                      size={14}
                      style={{ margin: "0 0 0 3px" }}
                      color={"#fff"}
                    />
                  </div>
                  {dropdownAbout && <DropdownAbout />}
                </li>
              );
            } else if (item.title === "our products") {
              return (
                <li
                  key={item.id}
                  className={styles.navItem}
                  onMouseEnter={() => setDropdownProducts(true)}
                  onMouseLeave={() => setDropdownProducts(false)}
                >
                  <Link href={item.path}>{item.title}</Link>
                  <div>
                    <CaretDown
                      size={14}
                      style={{ margin: "0 0 0 3px" }}
                      color={"#fff"}
                    />
                  </div>
                  {dropdownProducts && <DropdownProducts />}
                </li>
              );
            } else if (item.title === "intimate health") {
              return (
                <li
                  key={item.id}
                  className={styles.navItem}
                  onMouseEnter={() => setDropdownIntimate(true)}
                  onMouseLeave={() => setDropdownIntimate(false)}
                >
                  <Link href={item.path}>{item.title}</Link>
                  <div>
                    <CaretDown
                      size={14}
                      style={{ margin: "0 0 0 3px" }}
                      color={"#fff"}
                    />
                  </div>
                  {dropdownIntimate && <DropdownIntimate />}
                </li>
              );
            }
            return (
              <li key={item.id} className={styles.cName}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <ButtonContact />
      </nav>
    </>
  );
};
