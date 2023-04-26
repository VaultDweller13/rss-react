import classNames from 'classnames';
import { UseFormRegister } from 'react-hook-form';

import { type Inputs } from '../Form';
import { genres } from '../../../assets';
import styles from '../Form.module.css';

type InputProps = {
  register: UseFormRegister<Inputs>;
};

export default function Genres({ register }: InputProps) {
  const checkboxClass = classNames(styles.label, styles.checkboxLabel);
  const items = genres.map((genre) => (
    <label key={genre.id} className={checkboxClass}>
      <input
        type="checkbox"
        id={genre.genre}
        value={genre.label}
        {...register('genres', { required: 'Please specify at least 1 genre' })}
      />
      {genre.label}
    </label>
  ));

  return (
    <>
      <h3 className={styles.label}>Genres:</h3>
      <div className={styles.checkboxContainer}>{items}</div>
    </>
  );
}
