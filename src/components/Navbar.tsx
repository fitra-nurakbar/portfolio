import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Navbar.module.css";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`${scrolled ? styles.headerScrolled : styles.header}`}>
      <nav>
        <Link href={"/"}>
          <strong className={styles.navbarTitle}>fit.tra_</strong>
        </Link>
        <ul className={styles.navbarList}>
          <li>
            <Link
              href="/posts"
              className={`${isActive("/posts") ? styles.activeLink : ""} ${
                styles.link
              }`}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className={`${isActive("/resume") ? styles.activeLink : ""} ${
                styles.link
              }`}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${isActive("/projects") ? styles.activeLink : ""} ${
                styles.link
              }`}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
