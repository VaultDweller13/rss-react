import React, { useState } from 'react';

import './Form.css';
import Select from './Select';
import LabeledInput from './LabeledInput';
import genres from '../../assets/data/genres.json';
import CustomCard from '../card/Card';
import { textInputIsValid, dateInputIsValid, platformInpitIsValid } from '../../utils/validation';
import type { CardProps } from '../../utils/types';

export default function Form() {
  const form = React.createRef<HTMLFormElement>();
  const titleInput = React.createRef<HTMLInputElement>();
  const dateInput = React.createRef<HTMLInputElement>();
  const platformInput = React.createRef<HTMLSelectElement>();
  const genresInput = genres.map(() => React.createRef<HTMLInputElement>());
  const digitalInput = React.createRef<HTMLInputElement>();
  const physicalInput = React.createRef<HTMLInputElement>();
  const imageInput = React.createRef<HTMLInputElement>();

  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [validationMessages, setValidationMessages] = useState({
    title: '',
    date: '',
    platform: '',
    genres: '',
    format: '',
    image: '',
  });

  const onSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    resetValidationMessages();
    let isValid = true;

    if (!textInputIsValid(titleInput.current)) {
      setValidationMessage('title', "You must provide the game's title");
      isValid = false;
    }

    if (!dateInputIsValid(dateInput.current)) {
      setValidationMessage('date', 'The first game ever was made in the 1950');
      isValid = false;
    }

    if (!textInputIsValid(platformInput.current)) {
      setValidationMessage('platform', 'Please choose a platform');
      isValid = false;
    }

    if (!platformInpitIsValid(genresInput)) {
      setValidationMessage('genres', 'Please choose 1 to 3 genres');
      isValid = false;
    }

    if (!(digitalInput.current?.checked || physicalInput.current?.checked)) {
      setValidationMessage('format', "Please specify the game's format");
      isValid = false;
    }

    if (!imageInput.current?.files?.length) {
      setValidationMessage('image', 'Please provide a cover image');
      isValid = false;
    }

    if (isValid) {
      addCard();
      form.current?.reset();
      alert('Game added!');
    }
  };

  const setValidationMessage = (
    field: 'title' | 'date' | 'platform' | 'genres' | 'format' | 'image',
    message: string
  ) => {
    setValidationMessages((prevState) => ({
      ...prevState,
      [field]: message,
    }));
  };

  const resetValidationMessages = () => {
    setValidationMessages({
      title: '',
      date: '',
      platform: '',
      genres: '',
      format: '',
      image: '',
    });
  };

  const getCardProps = () => {
    if (!titleInput.current) return;
    if (!dateInput.current) return;
    if (!platformInput.current) return;
    if (!imageInput.current) return;
    if (!imageInput.current.files) return;

    const genres = genresInput
      .map((ref) => {
        if (ref.current && ref.current.checked) return ref.current.value;
      })
      .filter((genre) => genre) as string[];

    const imgSrc = URL.createObjectURL(imageInput.current?.files[0]);

    return {
      title: titleInput.current.value,
      date: dateInput.current.value,
      platform: platformInput.current.value,
      genres: genres,
      format: digitalInput.current?.checked ? ('digital' as const) : ('physical' as const),
      img: imgSrc,
      price: '59.99',
      score: null,
    };
  };

  const addCard = () => {
    const props = getCardProps() as CardProps;
    setCards((prevState) => [...prevState, <CustomCard key={prevState.length + 1} {...props} />]);
  };

  return (
    <main className="wrapper form_wrapper">
      <form className="add-game_form" aria-label="Add a game form" ref={form}>
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
              ref={titleInput}
            />
            <p className="validation-message">{validationMessages.title}</p>
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
              ref={dateInput}
            />
            <p className="validation-message">{validationMessages.date}</p>
          </li>
          <li className="form_item">
            <Select forwardedRef={platformInput} />
            <p className="validation-message">{validationMessages.platform}</p>
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
                  forwardedRef={genresInput[index]}
                  value={genre.label}
                />
              ))}
            </div>
            <p className="validation-message">{validationMessages.genres}</p>
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
                forwardedRef={digitalInput}
              />
              <LabeledInput
                type="radio"
                name="format"
                id="physical"
                label="Physical"
                value="physical"
                forwardedRef={physicalInput}
              />
            </div>
            <p className="validation-message">{validationMessages.format}</p>
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
              ref={imageInput}
              className="form_input input_file"
            />
            <p className="validation-message">{validationMessages.image}</p>
          </li>
          <li className="form_item">
            <button className="button_main" onClick={onSubmit}>
              Submit
            </button>
          </li>
        </ul>
      </form>
      {cards}
    </main>
  );
}
