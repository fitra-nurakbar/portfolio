import styles from "@/styles/Footer.module.css";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.containerIcons}>
        <Link
          href={"https://www.linkedin.com/in/fitra-nurakbar-5967a8230/"}
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <Link href={"https://github.com/fitra-nurakbar/"} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://www.instagram.com/fit.tra_/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href={"https://t.me/fitra_nurakbar"} target="_blank">
          <FontAwesomeIcon icon={faPaperPlane} />
        </Link>
      </div>
      <p>
        © 2023{" "}
        <Link href="https://www.instagram.com/fit.tra_/" target="_blank">
          @fit.tra_
        </Link>
        . All Rights Reserved.
      </p>
      <Link href={"mailto:fitranurakbar378@gmail.com"}>
        fitranurakbar378@gmail.com
      </Link>
    </footer>
  );
}
