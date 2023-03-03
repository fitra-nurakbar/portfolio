import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

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
          <h1 className={poppins.className}>Hello There<span className={styles.hi}>👋</span></h1>
          <q>
            I&apos;am a <span>software developer</span> with proven experience in creating
            and designing <span>software</span>.
          </q>
        </div>
        <Image
          src={"/assets/photo-profile.png"}
          width={200}
          height={200}
          alt="my photo profile"
        />
      </section>
      <section className={styles.about}>
        <h1>About Me</h1>
        <p><span>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Quae eaque repellat aut voluptates odio praesentium et cum delectus a? Magni labore eos sint. Quidem fugiat perferendis obcaecati libero cupiditate reiciendis.</p>
      </section>
    </Layout>
  );
}
