import './Modal.css';
import icon_close from '../../assets/img/close.svg';

type ModalProps = {
  active: boolean;
  setActive: (state: boolean) => void;
  child: JSX.Element;
};

export default function Modal(props: ModalProps) {
  return (
    <div
      className={props.active ? 'modal active' : 'modal'}
      onClick={() => props.setActive(false)}
      data-testid="modal"
    >
      <div
        className={props.active ? 'modal_content active' : 'modal_content'}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="modal_close"
          src={icon_close}
          alt="Close modal button"
          onClick={() => props.setActive(false)}
        />
        {props.child}
      </div>
    </div>
  );
}
