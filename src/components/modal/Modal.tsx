import classNames from 'classnames';
import styles from './Modal.module.css';
import icon_close from '../../assets/img/close.svg';

type ModalProps = {
  active: boolean;
  setActive: (state: boolean) => void;
  child: JSX.Element;
};

export default function Modal(props: ModalProps) {
  const modalClass = classNames(styles.modal, { [styles.active]: props.active });

  return (
    <div className={modalClass} onClick={() => props.setActive(false)} data-testid="modal">
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
