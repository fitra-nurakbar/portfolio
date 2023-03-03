import styles from "@/styles/Modal.module.css";

type ModalProps = {
  response: string;
  onClose: () => void;
};

export default function Modal(props: ModalProps) {
  const { response, onClose } = props;

  return (
    <div className={styles.modal}>
      <p>
        Message <span>{response}</span>
      </p>
      <button onClick={onClose}>X</button>
    </div>
  );
}
