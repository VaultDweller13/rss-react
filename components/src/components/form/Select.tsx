import React from 'react';

export default class Select extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="form_game-platform">Platform</label>
        <select name="platform" id="form_game-platform">
          <option value="switch">PC</option>
          <optgroup label="Nintendo">
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
          <optgroup label="PlayStation">
            <option value="ps5">PS5</option>
            <option value="ps4">PS4</option>
            <option value="ps3">PS3</option>
            <option value="ps2">PS2</option>
            <option value="ps1">PS1</option>
            <option value="psv">PSVita</option>
            <option value="psp">PSP</option>
          </optgroup>
          <optgroup label="Microsoft">
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
