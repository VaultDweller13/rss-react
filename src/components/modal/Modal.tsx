import classNames from 'classnames';
import styles from './Modal.module.css';
import icon_close from '../../assets/img/close.svg';
import { PropsWithChildren } from 'react';

type ModalProps = {
  active: boolean;
  setActive: (state: boolean) => void;
};

export default function Modal({ active, setActive, children }: PropsWithChildren<ModalProps>) {
  const modalClass = classNames(styles.modal, { [styles.active]: active });

  return (
    <div className={modalClass} onClick={() => setActive(false)} data-testid="modal">
      <div
        className={active ? `${styles.content} ${styles.active}` : styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className={styles.closeIcon}
          src={icon_close}
          alt="Close modal button"
          onClick={() => setActive(false)}
        />
        {children}
      </div>
    </div>
  );
}
