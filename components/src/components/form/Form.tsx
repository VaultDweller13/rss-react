import React from 'react';
import './Form.css';
import Select from './Select';

export default class Form extends React.Component {
  render() {
    return (
      <form className="add-game_form">
        <ul className="form_container">
          <li className="form_item">
            <label htmlFor="form_game-title">Game Title</label>
            <input type="text" name="title" id="form_game-title" className="input_text" />
          </li>
          <li className="form_item">
            <label htmlFor="form_game-date">Release Date</label>
            <input type="date" name="date" id="form_game-date" className="input_date" />
          </li>
          <li className="form_item">
            <Select />
          </li>
          <li className="form_item">
            <label htmlFor="form_game-genre">Genre</label>
            <input type="checkbox" name="genre" id="form_game-genre" />
          </li>
          <li className="form_item">
            <label htmlFor="form_game-status">Status</label>
            <input type="radio" name="status" id="form_game-status" />
          </li>
          <li className="form_item">
            <label htmlFor="form_game-cover">Cover Image</label>
            <input type="file" name="cover" id="form_game-cover" />
          </li>
        </ul>
      </form>
    );
  }
}
