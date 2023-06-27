import { useCallback, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { TextField } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import { logIn } from '../../services/firebase';
import styles from './Form.module.css';

export default function SignInForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      await logIn(email, password);
    }
  }, [emailRef, passwordRef]);

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
          inputRef={emailRef}
        />
        <TextField
          type="password"
          variant="outlined"
          label="Password"
          name="password"
          id="auth-password"
          autoComplete="current-password"
          inputRef={passwordRef}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Sign in
        </Button>
        <Link component={RouterLink} to="/signUp" className={styles.link}>
          Create account
        </Link>
      </form>
    </>
  );
}
