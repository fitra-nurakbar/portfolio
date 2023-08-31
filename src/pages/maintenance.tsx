import Layout from "@/components/Layout";
import styles from "@/styles/Error.module.css";
import Link from "next/link";

export default function Maintenance() {
  return (
    <Layout title="Maintenance">
      <div className={styles.message}>
        <h1>Maintenance</h1>
        <h2>403</h2>
      </div>
      <Link href="/">Back to main page</Link>
    </Layout>
  );
}
