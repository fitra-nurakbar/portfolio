import Head from "next/head";
import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";
import { Inter } from "next/font/google";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const inter = Inter({
  subsets: ["latin"]
});

export default function Layout({ children, title }: LayoutProps) {
  const titleProps = `Portfolio | ${title}`;

  return (
    <>
      <Head>
        <title>{titleProps}</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
}
