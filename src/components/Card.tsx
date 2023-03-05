import styles from "@/styles/Card.module.css";
import Image from "next/image";
import { Projects } from "@/utils/interface/project";

export default function Card(props: Projects) {
  const { image, title, description,  } = props

  return (
    <div className={styles.card}>
      <Image
        src={`${image.path + image.name}`}
        width={500}
        height={500}
        alt={image.alt}
      />
      <div className={styles.detail}>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
