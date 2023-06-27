import { useRef } from 'react';
import { TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import { createUser } from '../../services/firebase';
import styles from './Form.module.css';

export default function SignUpForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      await createUser(email, password);
    }
  };

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
          inputRef={emailRef}
        />
        <TextField
          type="password"
          variant="outlined"
          label="Password"
          name="password"
          id="register-password"
          autoComplete="new-password"
          inputRef={passwordRef}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Sign up
        </Button>
        <Link component={RouterLink} to="/signIn" className={styles.link}>
          Sign in
        </Link>
      </form>
    </>
  );
}
