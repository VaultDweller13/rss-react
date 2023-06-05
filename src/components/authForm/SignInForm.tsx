import { useCallback, useRef } from 'react';
import { TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import { logIn } from '../../services/firebase';
import styles from './Form.module.css';

export default function SignInForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = useCallback(async () => {
    const email = emailRef.current;
    const password = passwordRef.current;

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
          ref={emailRef}
        />
        <TextField
          type="password"
          variant="outlined"
          label="Password"
          name="password"
          id="auth-password"
          autoComplete="current-password"
          ref={passwordRef}
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
