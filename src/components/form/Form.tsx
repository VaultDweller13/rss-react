import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import { Select, DateInput, Format, Genres, Title } from './';
import { Card, type CardProps } from '../';
import styles from './Form.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { storeCard } from './formSlice';

export type Inputs = {
  title: string;
  date: string;
  platform: string;
  genres: string[];
  format: CardProps['format'];
  image: FileList;
};

export default function Form() {
  const dispatch = useAppDispatch();

  const form = React.createRef<HTMLFormElement>();
  const cardsData = useAppSelector((state) => state.userCards);

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
      score: undefined,
      id: cardsData.length + 1,
    };

    dispatch(storeCard(props));
  };

  const cards = cardsData.map((props) => <Card key={props.id} {...props} onClick={() => {}} />);

  const fileInputClass = classNames(styles.input, styles.fileInput);

  return (
    <main className={styles.wrapper}>
      <form className={styles.form} aria-label="Add a game form" ref={form} onSubmit={onSubmit}>
        <ul className={styles.formContainer}>
          <li className={styles.item}>
            <Title register={register} />
            <p className={styles.validationMessage}>{errors.title?.message}</p>
          </li>
          <li className={styles.item}>
            <DateInput register={register} />
            <p className={styles.validationMessage}>{errors.date?.message}</p>
          </li>
          <li className={styles.item}>
            <Select register={register} />
            <p className={styles.validationMessage}>{errors.platform?.message}</p>
          </li>
          <li className={styles.item}>
            <Genres register={register} />
            <p className={styles.validationMessage}>{errors.genres?.message}</p>
          </li>
          <li className={styles.item}>
            <Format register={register} />
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
              className={fileInputClass}
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
