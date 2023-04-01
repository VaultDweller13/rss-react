import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import './Form.css';
import Select from './Select';
import LabeledInput from './LabeledInput';
import genres from '../../assets/data/genres.json';
import CustomCard from '../card/Card';
import { textInputIsValid, dateInputIsValid, genresInputIsValid } from '../../utils/validation';
import type { CardProps } from '../../utils/types';

type Inputs = {
  title: string;
  date: string;
  platform: string;
  genres: string[];
  format: string;
  image: FileList;
};

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  // const onSubmit = (event: React.MouseEvent) => {
  //   event.preventDefault();
  //   resetValidationMessages();
  //   let isValid = true;

  //   if (!textInputIsValid(titleInput.current)) {
  //     setValidationMessage('title', "You must provide the game's title");
  //     isValid = false;
  //   }

  //   if (!dateInputIsValid(dateInput.current)) {
  //     setValidationMessage('date', 'The first game ever was made in the 1950');
  //     isValid = false;
  //   }

  //   if (!textInputIsValid(platformInput.current)) {
  //     setValidationMessage('platform', 'Please choose a platform');
  //     isValid = false;
  //   }

  //   if (!platformInpitIsValid(genresInput)) {
  //     setValidationMessage('genres', 'Please choose 1 to 3 genres');
  //     isValid = false;
  //   }

  //   if (!(digitalInput.current?.checked || physicalInput.current?.checked)) {
  //     setValidationMessage('format', "Please specify the game's format");
  //     isValid = false;
  //   }

  //   if (!imageInput.current?.files?.length) {
  //     setValidationMessage('image', 'Please provide a cover image');
  //     isValid = false;
  //   }

  //   if (isValid) {
  //     addCard();
  //     form.current?.reset();
  //     alert('Game added!');
  //   }
  // };

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
      <form className="add-game_form" aria-label="Add a game form" ref={form} onSubmit={onSubmit}>
        <ul className="form_container">
          <li className="form_item">
            <label className="form_label" htmlFor="form_game-title">
              Game Title:
            </label>
            <input
              type="text"
              id="form_game-title"
              className="form_input input_text"
              {...register('title', { required: "You must provide the game's title" })}
            />
            <p className="validation-message">{errors.title?.message}</p>
          </li>
          <li className="form_item">
            <label className="form_label" htmlFor="form_game-date">
              Release Date:
            </label>
            <input
              type="date"
              id="form_game-date"
              className="form_input input_date"
              {...register('date', { required: true, validate: dateInputIsValid })}
            />
            <p className="validation-message">{errors.date?.message}</p>
          </li>
          <li className="form_item">
            <Select register={register} />
            <p className="validation-message">{errors.platform?.message}</p>
          </li>
          <li className="form_item">
            <h3 className="form_label">Genres:</h3>
            <div className="form_checkbox-container">
              {genres.map((genre, index) => (
                <LabeledInput
                  register={register}
                  key={genre.id}
                  type="checkbox"
                  name="genre"
                  id={genre.genre}
                  label={genre.label}
                  value={genre.label}
                  forwardedRef={genresInput[index]}
                />
              ))}
            </div>
            <p className="validation-message">
              {genresInputIsValid(
                genresInput
                  .map((input) => input.current?.value)
                  .filter((value) => value) as string[]
              )}
            </p>
          </li>
          <li className="form_item">
            <h3 className="form_label">Format:</h3>
            <div className="form_radio-container">
              <LabeledInput
                register={register}
                name="format"
                type="radio"
                id="digital"
                label="Digital"
                value="digital"
              />
              <LabeledInput
                register={register}
                name="format"
                type="radio"
                id="physical"
                label="Physical"
                value="physical"
              />
            </div>
            <p className="validation-message">{errors.format?.message}</p>
          </li>
          <li className="form_item">
            <label className="form_label" htmlFor="form_game-cover">
              Cover Image
            </label>
            <input
              type="file"
              id="form_game-cover"
              accept="image/png, image/jpeg"
              className="form_input input_file"
              {...register('image', { required: true })}
            />
            <p className="validation-message">{errors.image?.message}</p>
          </li>
          <li className="form_item">
            <button className="button_main">Submit</button>
          </li>
        </ul>
      </form>
      {cards}
    </main>
  );
}
