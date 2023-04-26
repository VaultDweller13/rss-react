import { UseFormRegister } from 'react-hook-form';
import { type Inputs } from './Form';
import styles from './Form.module.css';

type InputProps = {
  register: UseFormRegister<Inputs>;
};

export function Title({ register }: InputProps) {
  return (
    <>
      <label className={styles.label} htmlFor="form_game-title">
        Game title:
      </label>
      <input
        type="text"
        id="form_game-title"
        className={styles.input}
        {...register('title', { required: "You must provide the game's title" })}
      />
    </>
  );
}
