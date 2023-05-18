import styles from "@/styles/Banner.module.css";
import { poppins } from "@/utils/fonts";
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
        <h1 className={poppins.className}>
          Hello There <span className={styles.wave}>👋</span>
        </h1>
        <h1>I&apos;am,<strong>FITRA NURAKBAR</strong> </h1>
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
