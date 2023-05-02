import Layout from "@/components/Layout";
import styles from "@/styles/Resume.module.css";
import Link from "next/link";

export default function Resume() {
  return (
    <Layout title="Curriculum Vitae">
      <div className={styles.container}>
        <h2>Curriculum Vitae</h2>
        <div className={styles.wrapper}>
          <Link href={"/assets/cv/Fitra_Nurakbar.pdf"} target="_blank">
          <button>
          Download CV
          </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
