import type { LabeledInputProps } from '../../utils/types';

export default function LabeledInput(props: LabeledInputProps) {
  return (
    <div className="labeledInput_container">
      <input
        type={props.type}
        name={props.name}
        id={`${props.name}_${props.id}`}
        ref={props.forwardedRef}
        value={props.value || ''}
      />
      <label className="labeledInput_label" htmlFor={`${props.name}_${props.id}`}>
        {props.label}
      </label>
    </div>
  );
}
