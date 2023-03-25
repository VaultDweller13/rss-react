import React from 'react';

type CheckboxProps = {
  name: string;
  id: string;
  label: string;
};

export default class LabeledCheckbox extends React.Component<CheckboxProps> {
  render() {
    return (
      <div className="labeledCheckbox_container">
        <input type="checkbox" name={this.props.name} id={`${this.props.name}_${this.props.id}`} />
        <label className="checkbox_label" htmlFor={`${this.props.name}_${this.props.id}`}>
          {this.props.label}
        </label>
      </div>
    );
  }
}
