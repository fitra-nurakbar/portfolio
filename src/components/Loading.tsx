import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.outside}>
      <div className={styles.load}>
        <FontAwesomeIcon icon={faSpinner} />
      </div>
    </div>
  );
}
