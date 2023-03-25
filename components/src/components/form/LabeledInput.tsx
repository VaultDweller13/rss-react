import React from 'react';

type CheckboxProps = {
  name: string;
  id: string;
  label: string;
  type: 'checkbox' | 'radio';
};

export default class LabeledInput extends React.Component<CheckboxProps> {
  render() {
    const { name, id, label, type } = this.props;

    return (
      <div className="labeledInput_container">
        <input type={type} name={name} id={`${name}_${id}`} />
        <label className="labeledInput_label" htmlFor={`${name}_${id}`}>
          {label}
        </label>
      </div>
    );
  }
}
