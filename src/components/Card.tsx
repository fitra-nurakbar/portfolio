import styles from "@/styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className={styles.card}>
      <Image
        src={"/assets/project/L&P.png"}
        width={500}
        height={500}
        alt="L&P Project image"
      />
      <div className={styles.detail}>
        <h3>Title</h3>
        <p>
          <span>Lorem ipsum</span> dolor sit, amet consectetur adipisicing elit. Sunt dolor omnis sed ad dolorum iusto sequi animi voluptate, aspernatur quam illo et dicta facere repellendus quasi temporibus eaque illum inventore.
        </p>
      </div>
    </div>
  );
}
