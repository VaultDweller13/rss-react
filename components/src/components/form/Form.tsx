import React from 'react';
import './Form.css';
import Select from './Select';
import LabeledInput from './LabeledInput';

export default class Form extends React.Component {
  render() {
    return (
      <main className="wrapper">
        <form className="add-game_form">
          <ul className="form_container">
            <li className="form_item">
              <label className="form_label" htmlFor="form_game-title">
                Game Title:
              </label>
              <input
                type="text"
                name="title"
                id="form_game-title"
                className="form_input input_text"
              />
            </li>
            <li className="form_item">
              <label className="form_label" htmlFor="form_game-date">
                Release Date:
              </label>
              <input
                type="date"
                name="date"
                id="form_game-date"
                className="form_input input_date"
              />
            </li>
            <li className="form_item">
              <Select />
            </li>
            <li className="form_item">
              <h3 className="form_label">Genres:</h3>
              <div className="form_checkbox-container">
                <LabeledInput type="checkbox" name="genre" id="platform" label="Platform" />
                <LabeledInput type="checkbox" name="genre" id="action" label="Action" />
                <LabeledInput type="checkbox" name="genre" id="rpg" label="RPG" />
                <LabeledInput type="checkbox" name="genre" id="trpg" label="TRPG" />
                <LabeledInput type="checkbox" name="genre" id="jrpg" label="JRPG" />
                <LabeledInput type="checkbox" name="genre" id="racing" label="Racing" />
                <LabeledInput type="checkbox" name="genre" id="strategy" label="Strategy" />
                <LabeledInput type="checkbox" name="genre" id="adventure" label="Adventure" />
                <LabeledInput type="checkbox" name="genre" id="novel" label="VN" />
                <LabeledInput type="checkbox" name="genre" id="shooter" label="Shooter" />
                <LabeledInput type="checkbox" name="genre" id="puzzle" label="Puzzle" />
                <LabeledInput type="checkbox" name="genre" id="casual" label="Casual" />
              </div>
            </li>
            <li className="form_item">
              <h3 className="form_label">Format:</h3>
              <div className="form_radio-container">
                <LabeledInput type="radio" name="format" id="digital" label="Digital" />
                <LabeledInput type="radio" name="format" id="physical" label="Physical" />
              </div>
            </li>
            <li className="form_item">
              <label className="form_label" htmlFor="form_game-cover">
                Cover Image
              </label>
              <input type="file" name="cover" id="form_game-cover" />
            </li>

            <li className="form_item">
              <button className="button_main">Submit</button>
            </li>
          </ul>
        </form>
      </main>
    );
  }
}
