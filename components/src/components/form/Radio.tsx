import React from 'react';

export default class Radio extends React.Component {
  render() {
    return (
      <fieldset className="form_fieldset">
        <legend>Game owned?</legend>
        <label htmlFor="status_yes">Yes</label>
        <input type="radio" name="status" id="status_yes" />
        <label htmlFor="status_no">No</label>
        <input type="radio" name="status" id="status_no" />
      </fieldset>
    );
  }
}
