import { UseFormRegister } from 'react-hook-form';
import styles from './Form.module.css';

type SelectProps = {
  register: UseFormRegister<{
    title: string;
    date: string;
    platform: string;
    genres: string[];
    format: 'digital' | 'physical';
    image: FileList;
  }>;
};

export default function Select(props: SelectProps) {
  return (
    <>
      <label htmlFor="form_game-platform" className={styles.label}>
        Platform:
      </label>
      <select
        {...props.register('platform', { required: 'Please choose a platform' })}
        id="form_game-platform"
        className={styles.input}
      >
        <option value="">--Please choose an option--</option>
        <option value="PC">PC</option>
        <option value="switch">Nintendo Switch</option>
        <option value="ps">Playstation 5</option>
        <option value="xbox">Xbox Series X/S</option>
      </select>
    </>
  );
}
