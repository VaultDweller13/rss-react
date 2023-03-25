import React from 'react';

export default class Checkboxes extends React.Component {
  render() {
    return (
      <fieldset className="form_fieldset">
        <legend>Genres</legend>
        <label htmlFor="genre_action">Action</label>
        <input type="checkbox" name="genre" id="genre_action" />
        <label htmlFor="genre_rpg">RPG</label>
        <input type="checkbox" name="genre" id="genre_rpg" />
        <label htmlFor="genre_trpg">TRPG</label>
        <input type="checkbox" name="genre" id="genre_trpg" />
        <label htmlFor="genre_jrpg">JRPG</label>
        <input type="checkbox" name="genre" id="genre_jrpg" />
      </fieldset>
    );
  }
}
