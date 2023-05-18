import Layout from "@/components/Layout";
import styles from "@/styles/Project.module.css";

export default function Projects() {
  return (
    <Layout title="Projects">
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.wrapper}></div>
      </div>
    </Layout>
  );
}
