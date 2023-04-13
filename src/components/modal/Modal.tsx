import styles from './Modal.module.css';
import icon_close from '../../assets/img/close.svg';

type ModalProps = {
  active: boolean;
  setActive: (state: boolean) => void;
  child: JSX.Element;
};

export default function Modal(props: ModalProps) {
  return (
    <div
      className={props.active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => props.setActive(false)}
      data-testid="modal"
    >
      <div
        className={props.active ? `${styles.content} ${styles.active}` : styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className={styles.closeIcon}
          src={icon_close}
          alt="Close modal button"
          onClick={() => props.setActive(false)}
        />
        {props.child}
      </div>
    </div>
  );
}
