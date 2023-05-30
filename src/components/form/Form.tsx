import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Select, Card, type CardProps } from '../';
import { genres } from '../../assets';
import styles from './Form.module.css';

type Inputs = {
  title: string;
  date: string;
  platform: string;
  genres: string[];
  format: CardProps['format'];
  image: FileList;
};

export default function Form() {
  const form = React.createRef<HTMLFormElement>();
  const [cardsData, setCardsData] = useState<CardProps[]>([]);
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
      onClick: () => {},
      id: cardsData.length + 1,
    };

    setCardsData((prevState) => [...prevState, props]);
  };

  const cards = cardsData.map((props) => <Card key={props.id} {...props} />);

  return (
    <main className={styles.wrapper}>
      <form className={styles.form} aria-label="Add a game form" ref={form} onSubmit={onSubmit}>
        <ul className={styles.formContainer}>
          <li className={styles.item}>
            <label className={styles.label} htmlFor="form_game-title">
              Game Title:
            </label>
            <input
              type="text"
              id="form_game-title"
              className={styles.input}
              {...register('title', { required: "You must provide the game's title" })}
            />
            <p className={styles.validationMessage}>{errors.title?.message}</p>
          </li>
          <li className={styles.item}>
            <label className={styles.label} htmlFor="form_game-date">
              Release Date:
            </label>
            <input
              type="date"
              id="form_game-date"
              className={styles.input}
              {...register('date', { validate: dateInputIsValid })}
            />
            <p className={styles.validationMessage}>{errors.date?.message}</p>
          </li>
          <li className={styles.item}>
            <Select register={register} />
            <p className={styles.validationMessage}>{errors.platform?.message}</p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.label}>Genres:</h3>
            <div className={styles.checkboxContainer}>
              {genres.map((genre) => (
                <label key={genre.id} className={`${styles.label} ${styles.checkboxLabel}`}>
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
            <p className={styles.validationMessage}>{errors.genres?.message}</p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.label}>Format:</h3>
            <div className={styles.radioContainer}>
              <label className={`${styles.label} ${styles.checkboxLabel}`}>
                <input
                  type="radio"
                  id="digital"
                  value="digital"
                  {...register('format', { required: "Please specify the game's format" })}
                />
                Digital
              </label>
              <label className={`${styles.label} ${styles.checkboxLabel}`}>
                <input type="radio" id="physical" value="physical" {...register('format')} />
                Physical
              </label>
            </div>
            <p className={styles.validationMessage}>{errors.format?.message}</p>
          </li>
          <li className={styles.item}>
            <label className={styles.label} htmlFor="form_game-cover">
              Cover Image
            </label>
            <input
              type="file"
              id="form_game-cover"
              accept="image/png, image/jpeg"
              className={`${styles.input} ${styles.fileInput}`}
              {...register('image', { required: 'Please provide a cover image' })}
            />
            <p className={styles.validationMessage}>{errors.image?.message}</p>
          </li>
          <li className={styles.item}>
            <button className={styles.button}>Submit</button>
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
