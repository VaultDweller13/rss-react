import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { logOut } from '../../services/firebase';
import { useAuthState } from '../../hooks';

import styles from './Header.module.css';

export default function Header() {
  const { user } = useAuthState();

  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <Link to="/" className={styles.link}>
          <h1>YourGames</h1>
        </Link>
        <div className={styles.button_container}>
          {user ? (
            <Button variant="contained" onClick={logOut}>
              Log out
            </Button>
          ) : (
            <Button variant="contained" component={Link} to="/signIn">
              Sign in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
