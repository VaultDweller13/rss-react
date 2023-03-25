import React from 'react';
import './Form.css';
import Select from './Select';
import LabeledCheckbox from './LabeledCheckbox';
import Radio from './Radio';

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
                <LabeledCheckbox name="genre" id="action" label="Action" />
                <LabeledCheckbox name="genre" id="platform" label="Platform" />
                <LabeledCheckbox name="genre" id="rpg" label="RPG" />
                <LabeledCheckbox name="genre" id="trpg" label="TRPG" />
                <LabeledCheckbox name="genre" id="jrpg" label="JRPG" />
                <LabeledCheckbox name="genre" id="racing" label="Racing" />
                <LabeledCheckbox name="genre" id="strategy" label="Strategy" />
                <LabeledCheckbox name="genre" id="adventure" label="Adventure" />
                <LabeledCheckbox name="genre" id="novel" label="VN" />
                <LabeledCheckbox name="genre" id="shooter" label="Shooter" />
                <LabeledCheckbox name="genre" id="puzzle" label="Puzzle" />
                <LabeledCheckbox name="genre" id="casual" label="Casual" />
              </div>
            </li>
            <li className="form_item">
              <Radio />
            </li>
            <li className="form_item">
              <label className="form_label" htmlFor="form_game-cover">
                Cover Image
              </label>
              <input type="file" name="cover" id="form_game-cover" />
            </li>
          </ul>
        </form>
      </main>
    );
  }
}
