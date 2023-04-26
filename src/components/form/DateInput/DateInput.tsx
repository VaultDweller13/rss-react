import { UseFormRegister } from 'react-hook-form';
import { type Inputs } from '../Form';
import styles from '../Form.module.css';

type InputProps = {
  register: UseFormRegister<Inputs>;
};

export default function DateInput({ register }: InputProps) {
  return (
    <>
      <label className={styles.label} htmlFor="form_game-date">
        Release Date:
      </label>
      <input
        type="date"
        id="form_game-date"
        className={styles.input}
        {...register('date', { validate: dateInputIsValid })}
      />
    </>
  );
}

function dateInputIsValid(value: string | null) {
  const message = 'The first game ever was made in the 1950';

  if (!value) return message;

  return new Date('1950') < new Date(value) || message;
}
