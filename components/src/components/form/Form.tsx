import React, { RefObject } from 'react';

import './Form.css';
import Select from './Select';
import LabeledInput from './LabeledInput';
import genres from '../../assets/data/genres.json';

export default class Form extends React.Component {
  titleInput: RefObject<HTMLInputElement>;
  dateInput: RefObject<HTMLInputElement>;
  platformInput: RefObject<HTMLSelectElement>;
  genresInput: RefObject<HTMLInputElement>[];
  digitalInput: RefObject<HTMLInputElement>;
  physicalInput: RefObject<HTMLInputElement>;
  imageInput: RefObject<HTMLInputElement>;

  constructor(props: never) {
    super(props);
    this.titleInput = React.createRef();
    this.dateInput = React.createRef();
    this.platformInput = React.createRef();
    this.genresInput = genres.map(() => React.createRef());
    this.digitalInput = React.createRef();
    this.physicalInput = React.createRef();
    this.imageInput = React.createRef();
  }

  onSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(
      this.titleInput.current?.value,
      this.dateInput.current?.value,
      this.platformInput.current?.value,
      this.genresInput.map((input) => input.current?.checked),
      this.digitalInput.current?.checked,
      this.physicalInput.current?.checked,
      this.imageInput.current?.value
    );
  };

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
                ref={this.titleInput}
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
                ref={this.dateInput}
              />
            </li>
            <li className="form_item">
              <Select forwardedRef={this.platformInput} />
            </li>
            <li className="form_item">
              <h3 className="form_label">Genres:</h3>
              <div className="form_checkbox-container">
                {genres.map((genre, index) => (
                  <LabeledInput
                    key={genre.id}
                    type="checkbox"
                    name="genre"
                    id={genre.genre}
                    label={genre.label}
                    forwardedRef={this.genresInput[index]}
                  />
                ))}
              </div>
            </li>
            <li className="form_item">
              <h3 className="form_label">Format:</h3>
              <div className="form_radio-container">
                <LabeledInput
                  type="radio"
                  name="format"
                  id="digital"
                  label="Digital"
                  value="digital"
                  forwardedRef={this.digitalInput}
                />
                <LabeledInput
                  type="radio"
                  name="format"
                  id="physical"
                  label="Physical"
                  value="physical"
                  forwardedRef={this.physicalInput}
                />
              </div>
            </li>
            <li className="form_item">
              <label className="form_label" htmlFor="form_game-cover">
                Cover Image
              </label>
              <input
                type="file"
                name="cover"
                id="form_game-cover"
                accept="image/png, image/jpeg"
                ref={this.imageInput}
                className="form_input input_file"
              />
            </li>
            <li className="form_item">
              <button className="button_main" onClick={this.onSubmit}>
                Submit
              </button>
            </li>
          </ul>
        </form>
      </main>
    );
  }
}
