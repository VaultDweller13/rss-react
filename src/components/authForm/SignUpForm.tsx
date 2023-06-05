import { TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import styles from './Form.module.css';

export default function SignUpForm() {
  return (
    <>
      <form className={styles.form}>
        <TextField
          type="email"
          variant="outlined"
          label="Email"
          name="email"
          id="register-email"
          autoComplete="current-email"
        />
        <TextField
          type="password"
          variant="outlined"
          label="Password"
          name="password"
          id="register-password"
          autoComplete="new-password"
        />
        <Button variant="contained">Sign up</Button>
        <Link component={RouterLink} to="/signIn" className={styles.link}>
          Sign in
        </Link>
      </form>
    </>
  );
}
