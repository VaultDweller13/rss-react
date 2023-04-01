import { v } from '@vitest/runner/dist/tasks-3fbb29e4';
import type { LabeledInputProps, Inputs } from '../../utils/types';

export default function LabeledInput(props: LabeledInputProps) {
  return (
    <div className="labeledInput_container">
      <input
        {...props.register(props.name as keyof Inputs, { required: 'error' })}
        type={props.type}
        id={`${props.name}_${props.id}`}
        value={props.value || ''}
        ref={props.forwardedRef}
      />
      <label className="labeledInput_label" htmlFor={`${props.name}_${props.id}`}>
        {props.label}
      </label>
    </div>
  );
}
