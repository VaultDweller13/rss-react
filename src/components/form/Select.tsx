import React from 'react';
import { SelectProps } from '../../utils/types';

export default class Select extends React.Component<SelectProps> {
  render() {
    return (
      <>
        <label htmlFor="form_game-platform" className="form_label">
          Platform:
        </label>
        <select
          ref={this.props.forwardedRef}
          name="platform"
          id="form_game-platform"
          className="form_input input_select"
        >
          <option value="">--Please choose an option--</option>
          <option value="PC">PC</option>
          <option value="switch">Nintendo Switch</option>
          <option value="ps">Playstation 5</option>
          <option value="xbox">Xbox Series X/S</option>
        </select>
      </>
    );
  }
}