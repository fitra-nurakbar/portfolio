import Head from "next/head";
import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";
import { inter } from "@/utils/fonts";
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
        <link rel="icon" href="/assets/icons/say-hi.png" />
      </Head>
      <main
        className={`${title === "Home" ? styles.primary : styles.secondary} ${
          inter.className
        }`}
      >
        {title !== "Home" && title !== "Not found" && <Navbar />}
        {children}
        {title !== "Not found" && <Footer />}
      </main>
    </>
  );
}
