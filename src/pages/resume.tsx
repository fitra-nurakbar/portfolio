import Layout from "@/components/Layout";
import styles from "@/styles/Resume.module.css";
import Link from "next/link";

export default function Resume() {
  return (
    <Layout title="Curriculum Vitae">
      <div className={styles.container}>
        <h2>Curriculum Vitae</h2>
        <div className={styles.wrapper}>
          <Link href={"https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/e8a5a8fd40994e32ed786b9122fdd811.pdf"} target="_blank">
            <button>Download CV</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
