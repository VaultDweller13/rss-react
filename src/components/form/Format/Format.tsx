import classNames from 'classnames';
import { UseFormRegister } from 'react-hook-form';

import { type Inputs } from '../Form';
import styles from '../Form.module.css';

type InputProps = {
  register: UseFormRegister<Inputs>;
};

export default function Format({ register }: InputProps) {
  const checkboxClass = classNames(styles.label, styles.checkboxLabel);

  return (
    <>
      <h3 className={styles.label}>Format:</h3>
      <div className={styles.radioContainer}>
        <label className={checkboxClass}>
          <input
            type="radio"
            id="digital"
            value="digital"
            {...register('format', { required: "Please specify the game's format" })}
          />
          Digital
        </label>
        <label className={checkboxClass}>
          <input type="radio" id="physical" value="physical" {...register('format')} />
          Physical
        </label>
      </div>
    </>
  );
}
