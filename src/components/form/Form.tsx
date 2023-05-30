import React, { RefObject } from 'react';

import './Form.css';
import Select from './Select';
import LabeledInput from './LabeledInput';
import genres from '../../assets/data/genres.json';
import CustomCard from '../card/Card';
import { textInputIsValid, dateInputIsValid, platformInpitIsValid } from '../../utils/validation';
import type { CardProps, FormState } from '../../utils/types';

export default class Form extends React.Component<unknown, FormState> {
  form: RefObject<HTMLFormElement> = React.createRef();
  titleInput: RefObject<HTMLInputElement> = React.createRef();
  dateInput: RefObject<HTMLInputElement> = React.createRef();
  platformInput: RefObject<HTMLSelectElement> = React.createRef();
  genresInput: RefObject<HTMLInputElement>[] = genres.map(() => React.createRef());
  digitalInput: RefObject<HTMLInputElement> = React.createRef();
  physicalInput: RefObject<HTMLInputElement> = React.createRef();
  imageInput: RefObject<HTMLInputElement> = React.createRef();
  index = 0;

  constructor(props: unknown) {
    super(props);
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
  }

  onSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    this.resetValidationMessages();
    let isValid = true;

    if (!textInputIsValid(this.titleInput.current)) {
      this.setValidationMessage('title', "You must provide the game's title");
      isValid = false;
    }

    if (!dateInputIsValid(this.dateInput.current)) {
      this.setValidationMessage('date', 'The first game ever was made in the 1950');
      isValid = false;
    }

    if (!textInputIsValid(this.platformInput.current)) {
      this.setValidationMessage('platform', 'Please choose a platform');
      isValid = false;
    }

    if (!platformInpitIsValid(this.genresInput)) {
      this.setValidationMessage('genres', 'Please choose 1 to 3 genres');
      isValid = false;
    }

    if (!(this.digitalInput.current?.checked || this.physicalInput.current?.checked)) {
      this.setValidationMessage('format', "Please specify the game's format");
      isValid = false;
    }

    if (!this.imageInput.current?.files?.length) {
      this.setValidationMessage('image', 'Please provide a cover image');
      isValid = false;
    }

    if (isValid) {
      this.addCard();
      this.form.current?.reset();
      alert('Game added!');
    }
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

  getCardProps() {
    if (!this.titleInput.current) return;
    if (!this.dateInput.current) return;
    if (!this.platformInput.current) return;
    if (!this.imageInput.current) return;
    if (!this.imageInput.current.files) return;

    const genres = this.genresInput
      .map((ref) => {
        if (ref.current && ref.current.checked) return ref.current.value;
      })
      .filter((genre) => genre) as string[];

    const imgSrc = URL.createObjectURL(this.imageInput.current?.files[0]);

    return {
      title: this.titleInput.current.value,
      date: this.dateInput.current.value,
      platform: this.platformInput.current.value,
      genres: genres,
      format: this.digitalInput.current?.checked ? ('digital' as const) : ('physical' as const),
      img: imgSrc,
      price: '59.99',
      score: null,
    };
  }

  addCard = () => {
    this.index++;

    const props = this.getCardProps() as CardProps;
    this.setState((prevState) => ({
      cards: [...prevState.cards, <CustomCard key={this.index} {...props} />],
    }));
  };

  render() {
    return (
      <main className="wrapper form_wrapper">
        <form className="add-game_form" aria-label="Add a game form" ref={this.form}>
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
                    value={genre.label}
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
