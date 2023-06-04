import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import styles from './Form.module.css';

export default function Form() {
  return (
    <>
      <form className={styles.form}>
        <TextField type="email" variant="outlined" label="Email" />
        <TextField type="password" variant="outlined" label="Password" />
        <Button variant="contained">Submit</Button>
      </form>
    </>
  );
}
