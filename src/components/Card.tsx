import styles from "@/styles/Card.module.css";
import { Projects } from "@/utils/interface/project";
import Image from "next/image";

export default function Card(props: Projects) {
  const { image, title, description } = props;

  return (
    <div className={styles.card}>
      {image && (
        <Image
          src={`${image.path + image.name}`}
          width={500}
          height={500}
          alt={image.alt}
        />
      )}
      <article className={styles.detail}>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </div>
  );
}
