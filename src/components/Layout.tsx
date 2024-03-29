import Head from "next/head";
import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";
import { inter, lato } from "@/utils/fonts";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

export default function Layout({ children, title }: LayoutProps) {
  const titleProps = `Portfolio | ${title}`;

  return (
    <>
      <Head>
        <title>{titleProps}</title>
      </Head>
      <main
        className={`${title === "Home" ? styles.primary : styles.secondary} ${
          lato.className
        }`}
      >
        {title !== "Home" &&
          title !== "Not found" &&
          title !== "Maintenance" && <Navbar />}
        {children}
        {title !== "Not found" && title !== "Maintenance" && <Footer />}
      </main>
    </>
  );
}
