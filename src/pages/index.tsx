import Image from "next/image";
import { poppins } from "@/utils/fonts";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <section className={styles.profile}>
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
            I&apos;am a <span>software developer</span> with proven experience
            in creating and designing <span>software</span>.
          </q>
        </div>
        <Image
          src={"/assets/photo-profile.png"}
          width={200}
          height={200}
          alt="my photo profile"
        />
      </section>
      <section className={styles.content}>
        <About />
        <Project />
        <Contact />
      </section>
      <Footer />
    </Layout>
  );
}
