import Layout from "@/components/Layout";
import styles from "@/styles/Resume.module.css";

export default function Resume() {
  return (
    <Layout title="Curriculum Vitae">
      <div className={styles.container}>
        <h2>Curriculum Vitae</h2>
        <div className={styles.wrapper}></div>
      </div>
    </Layout>
  );
}
