import styles from "@/styles/Modal.module.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ModalProps = {
  response: boolean;
  onClose: () => void;
};

export default function Modal(props: ModalProps) {
  const { response, onClose } = props;

  return (
    <div className={styles.outside}>
      <div {...props} className={response ? styles.succes : styles.failed}>
        {response ? (
          <p>
            <span>Please wait</span> for our response via <span>email</span>.
            Thank you
          </p>
        ) : (
          <p>
            <span>The message</span> you sent has <span>failed</span>. Please
            try again later or <span>contact us through other means</span>.
          </p>
        )}
        .
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faX} width={10} />
        </button>
      </div>
    </div>
  );
}
