import React from 'react';

type SelectProp = {
  forwardedRef: React.RefObject<HTMLSelectElement>;
};

export default class Select extends React.Component<SelectProp> {
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
          <optgroup label="Nintendo" className="form_label">
            <option value="switch">Switch</option>
            <option value="wiiu">Wii U</option>
            <option value="wii">Wii</option>
            <option value="gamecube">Gamecube</option>
            <option value="n64">N64</option>
            <option value="snes">Super Nintendo</option>
            <option value="nes">NES</option>
            <option value="n3ds">3DS</option>
            <option value="nds">DS</option>
            <option value="gba">Game Boy Advance</option>
            <option value="gbc">Game Boy Color</option>
            <option value="gb">Game Boy</option>
          </optgroup>
          <optgroup label="PlayStation" className="form_label">
            <option value="ps5">PS5</option>
            <option value="ps4">PS4</option>
            <option value="ps3">PS3</option>
            <option value="ps2">PS2</option>
            <option value="ps1">PS1</option>
            <option value="psv">PSVita</option>
            <option value="psp">PSP</option>
          </optgroup>
          <optgroup label="Microsoft" className="form_label">
            <option value="xsex">Xbox Series X/S</option>
            <option value="xbone">Xbox One</option>
            <option value="x360">Xbox 360</option>
            <option value="xbox">Xbox</option>
          </optgroup>
        </select>
      </>
    );
  }
}
