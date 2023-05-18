import styles from "@/styles/Blog.module.css";
import { faArrowAltCircleRight, faArrowRight, faArrowTurnRight, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Blog() {
  return (
    <section className={styles.container}>
      <h2>Artworks</h2>
      <p>
        In my <span>free time</span>, I <span>sometimes</span> paint something
        that allows me to express my <span>creativity</span> and{" "}
        <span>explore</span> the depths of my <span>imagination</span>.
      </p>
      <Link href={"/posts"} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faArrowTurnRight} />See Works
      </Link>
    </section>
  );
}
