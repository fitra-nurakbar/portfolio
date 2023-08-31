import Layout from "@/components/Layout";
import styles from "@/styles/Error.module.css";

export default function PageNotFound() {
  return (
    <Layout title="Not found">
      <div className={styles.message}>
        <h1>Not Found</h1>
        <h2>404</h2>
      </div>
    </Layout>
  );
}
