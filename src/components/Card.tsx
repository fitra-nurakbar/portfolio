import styles from "@/styles/Card.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <Image
        src={"/assets/project/L&P.png"}
        width={500}
        height={500}
        alt="L&P Project image"
      />
      <p>
        <span>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}
