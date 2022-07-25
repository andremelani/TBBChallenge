import styles from "./styles.module.scss";
import { useState } from "react";
import Link from "next/link";

import { aboutDropdown, productsDropdown, intimateDropdown } from "../NavItems";


export const DropdownAbout = () => {
  const [dropdown, setDropdwon] = useState(false);

  return (
    <>
      <ul className={dropdown ? `${styles.aboutDropdownClicked}` : `${styles.aboutDropdown}` } onClick={() => setDropdwon(!dropdown)}>
        {aboutDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.path} className={styles.submenuItem} onClick={() => setDropdwon(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const DropdownProducts = () => {
    const [dropdown, setDropdwon] = useState(false);
  
    return (
      <>
        <ul className={dropdown ? `${styles.aboutDropdownClicked}` : `${styles.productsDropdown}` } onClick={() => setDropdwon(!dropdown)}>
          {productsDropdown.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.path} className={styles.submenuItem} onClick={() => setDropdwon(false)}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  export const DropdownIntimate = () => {
    const [dropdown, setDropdwon] = useState(false);
  
    return (
      <>
        <ul className={dropdown ? `${styles.aboutDropdownClicked}` : `${styles.intimateDropdown}` } onClick={() => setDropdwon(!dropdown)}>
          {intimateDropdown.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.path} className={styles.submenuItem} onClick={() => setDropdwon(false)}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  };
