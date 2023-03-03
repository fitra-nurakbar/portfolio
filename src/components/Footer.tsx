import styles from "@/styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <q>
        Copyrigth2023
        <Link href="https://www.instagram.com/fit.tra_/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
          fit.tra_
        </Link>
      </q>
    </footer>
  );
}
