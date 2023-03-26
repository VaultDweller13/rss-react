import React from 'react';
import type { LabeledInputProps } from '../../utils/types';

export default class LabeledInput extends React.Component<LabeledInputProps> {
  render() {
    const { name, id, label, type } = this.props;

    return (
      <div className="labeledInput_container">
        <input
          type={type}
          name={name}
          id={`${name}_${id}`}
          ref={this.props.forwardedRef}
          value={this.props.value || ''}
        />
        <label className="labeledInput_label" htmlFor={`${name}_${id}`}>
          {label}
        </label>
      </div>
    );
  }
}
