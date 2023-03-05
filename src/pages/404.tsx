import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";

export default function PageNotFound() {
  return (
    <Layout title="Not found">
      <h1 className={styles.message}>404</h1>
    </Layout>
  );
}
