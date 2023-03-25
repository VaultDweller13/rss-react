import React, { RefObject } from 'react';

type InputProps = {
  name: string;
  id: string;
  label: string;
  type: 'checkbox' | 'radio';
  value?: string;
  forwardedRef: RefObject<HTMLInputElement>;
};

export default class LabeledInput extends React.Component<InputProps> {
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
