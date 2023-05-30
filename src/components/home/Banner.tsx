import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import Type from "./Type";

export default function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.detail}>
        <h1>
          Hi There <span className={styles.wave}>👋</span>
        </h1>
        <p>
          I&apos;am, <strong>FITRA NURAKBAR</strong>
        </p>
        <Type />
      </div>
      <Image
        src={"/assets/photo-profile.png"}
        width={150}
        height={150}
        alt="Fitra Nurakbar"
        priority
      />
    </section>
  );
}
