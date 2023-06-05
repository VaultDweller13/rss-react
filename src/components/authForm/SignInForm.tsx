import { TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import styles from './Form.module.css';

export default function SignInForm() {
  return (
    <>
      <form className={styles.form}>
        <TextField
          type="email"
          variant="outlined"
          label="Email"
          name="email"
          id="auth-email"
          autoComplete="current-email"
        />
        <TextField
          type="password"
          variant="outlined"
          label="Password"
          name="password"
          id="auth-password"
          autoComplete="current-password"
        />
        <Button variant="contained">Sign in</Button>
        <Link component={RouterLink} to="/signUp" className={styles.link}>
          Create account
        </Link>
      </form>
    </>
  );
}
