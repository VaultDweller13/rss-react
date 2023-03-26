import React, { ReactElement, RefObject } from 'react';

import './Form.css';
import Select from './Select';
import LabeledInput from './LabeledInput';
import genres from '../../assets/data/genres.json';
import Card from '../card/Card';
import { textInputIsValid, dateInputIsValid } from '../../utils/validation';

type State = {
  cards: ReactElement[];
  validation: Record<string, string>;
};

export default class Form extends React.Component<unknown, State> {
  titleInput: RefObject<HTMLInputElement>;
  dateInput: RefObject<HTMLInputElement>;
  platformInput: RefObject<HTMLSelectElement>;
  genresInput: RefObject<HTMLInputElement>[];
  digitalInput: RefObject<HTMLInputElement>;
  physicalInput: RefObject<HTMLInputElement>;
  imageInput: RefObject<HTMLInputElement>;
  index: number;

  constructor(props: never) {
    super(props);
    this.titleInput = React.createRef();
    this.dateInput = React.createRef();
    this.platformInput = React.createRef();
    this.genresInput = genres.map(() => React.createRef());
    this.digitalInput = React.createRef();
    this.physicalInput = React.createRef();
    this.imageInput = React.createRef();
    this.state = {
      cards: [],
      validation: {
        title: '',
        date: '',
        platform: '',
        genres: '',
        format: '',
        image: '',
      },
    };
    this.index = 0;
  }

  onSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    this.resetValidationMessages();
    let isValid = true;

    if (!textInputIsValid(this.titleInput.current)) {
      this.setValidationMessage('title', "You must provide game's title");
      isValid = false;
    }

    if (!dateInputIsValid(this.dateInput.current)) {
      this.setValidationMessage('date', 'The first game was made in the 1950');
      isValid = false;
    }

    if (!textInputIsValid(this.platformInput.current)) {
      this.setValidationMessage('platform', 'Please choose a platform');
      isValid = false;
    }

    if (this.genresInput.map((input) => input.current?.checked).every((box) => !box)) {
      this.setValidationMessage('genres', 'Please choose at least one genre');
      isValid = false;
    }

    if (!(this.digitalInput.current?.checked || this.physicalInput.current?.checked)) {
      this.setValidationMessage('format', 'Please specify game format');
      isValid = false;
    }

    if (!this.imageInput.current?.files?.length) {
      this.setValidationMessage('image', 'Please provide cover image');
      isValid = false;
    }

    if (isValid) this.addCard();
  };

  setValidationMessage(
    field: 'title' | 'date' | 'platform' | 'genres' | 'format' | 'image',
    message: string
  ) {
    this.setState((prevState) => ({
      ...prevState,
      validation: {
        ...prevState.validation,
        [field]: message,
      },
    }));
  }

  resetValidationMessages() {
    this.setState((prev) => ({
      ...prev,
      validation: {
        title: '',
        date: '',
        platform: '',
        genres: '',
        format: '',
        image: '',
      },
    }));
  }

  addCard = () => {
    this.index++;

    let imgSrc = URL.createObjectURL(new Blob([]));

    if (this.imageInput.current && this.imageInput.current.files?.length)
      imgSrc = URL.createObjectURL(this.imageInput.current?.files[0]);

    this.setState((prevState) => ({
      cards: [
        ...prevState.cards,
        <Card
          key={this.index}
          title={this.titleInput.current?.value || 'dummy title'}
          img={imgSrc}
          price="111"
          score={99}
        />,
      ],
    }));
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
              <p className="validation-message">{this.state.validation.title}</p>
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
              <p className="validation-message">{this.state.validation.date}</p>
            </li>
            <li className="form_item">
              <Select forwardedRef={this.platformInput} />
              <p className="validation-message">{this.state.validation.platform}</p>
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
              <p className="validation-message">{this.state.validation.genres}</p>
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
              <p className="validation-message">{this.state.validation.format}</p>
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
              <p className="validation-message">{this.state.validation.image}</p>
            </li>
            <li className="form_item">
              <button className="button_main" onClick={this.onSubmit}>
                Submit
              </button>
            </li>
          </ul>
        </form>
        {this.state.cards}
      </main>
    );
  }
}
