"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();

  const isActive = (path: string) => currentPath === path;

  const getLinkClass = (path: string) => {
    return `${styles.navLink} ${isActive(path) ? styles.active : ""}`;
  };

  return (
    <header className={styles.header}>
      <div className={styles.brandLogo}>
        <svg className={styles.logoSvg} width="102" height="16">
          <use href="sprite.svg#icon-logo"></use>
        </svg>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={getLinkClass("/")}>
            <Link href="/">Home</Link>
          </li>
          <li className={getLinkClass("/catalog")}>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;