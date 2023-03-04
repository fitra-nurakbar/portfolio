import Image from "next/image";
import { poppins } from "@/utils/fonts";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={styles.pacman}></div>
      <div className={styles.detail}>
        <h1 className={poppins.className}>
          Hello There<span className={styles.hi}>👋</span>
        </h1>
        <q>
          I&apos;am <span>Fitra Nurakbar</span>, And I&apos;am a <span>software developer</span> with proven experience in creating and <span>designing software</span>.
        </q>
      </div>
      <Image
        src={"/assets/photo-profile.png"}
        width={200}
        height={200}
        alt="my photo profile"
        priority={true}
      />
    </section>
  );
}
