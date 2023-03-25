import React from 'react';

export default class Radio extends React.Component {
  render() {
    return (
      <>
        <h3 className="form_label">Format:</h3>
        <div className="form_radio-container">
          <label className="form_label" htmlFor="format_physical">
            Physical
          </label>
          <input type="radio" name="format" id="format_physical" />
          <label className="form_label" htmlFor="format_digital">
            Digital
          </label>
          <input type="radio" name="format" id="format_digital" />
        </div>
      </>
    );
  }
}
