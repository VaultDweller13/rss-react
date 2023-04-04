import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './Form.css';
import Select from './Select';
import genres from '../../assets/data/genres.json';
import Card from '../card/Card';

type Inputs = {
  title: string;
  date: string;
  platform: string;
  genres: string[];
  format: 'digital' | 'physical';
  image: FileList;
};

export default function Form() {
  const form = React.createRef<HTMLFormElement>();
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({ reValidateMode: 'onSubmit' });

  const onSubmit = handleSubmit((data) => {
    addCard(data);
    reset();
    alert('Game added!');
  });

  const addCard = (data: Inputs) => {
    const props = {
      title: data.title,
      date: data.date,
      platform: data.platform,
      genres: data.genres,
      format: data.format,
      img: URL.createObjectURL(data.image[0]),
      price: '59.99',
      score: null,
    };

    setCards((prevState) => [...prevState, <Card key={prevState.length + 1} {...props} />]);
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
              {...register('date', { validate: dateInputIsValid })}
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
              {genres.map((genre) => (
                <label key={genre.id} className="labeledInput_label">
                  <input
                    type="checkbox"
                    id={genre.genre}
                    value={genre.label}
                    {...register('genres', { required: 'Please specify at least 1 genre' })}
                  />
                  {genre.label}
                </label>
              ))}
            </div>
            <p className="validation-message">{errors.genres?.message}</p>
          </li>
          <li className="form_item">
            <h3 className="form_label">Format:</h3>
            <div className="form_radio-container">
              <label className="labeledInput_label">
                <input
                  type="radio"
                  id="digital"
                  value="digital"
                  {...register('format', { required: "Please specify the game's format" })}
                />
                Digital
              </label>
              <label className="labeledInput_label">
                <input type="radio" id="physical" value="physical" {...register('format')} />
                Physical
              </label>
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
              {...register('image', { required: 'Please provide a cover image' })}
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

function dateInputIsValid(value: string | null) {
  const message = 'The first game ever was made in the 1950';

  if (!value) return message;

  return new Date('1950') < new Date(value) || message;
}
