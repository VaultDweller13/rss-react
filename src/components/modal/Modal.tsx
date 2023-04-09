import './Modal.css';

type ModalProps = {
  active: boolean;
  setActive: (state: boolean) => void;
  child: JSX.Element;
};

export default function Modal(props: ModalProps) {
  return (
    <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
      <div
        className={props.active ? 'modal_content active' : 'modal_content'}
        onClick={(e) => e.stopPropagation()}
      >
        {props.child}
      </div>
    </div>
  );
}
