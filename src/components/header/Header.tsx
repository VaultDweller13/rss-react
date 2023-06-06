import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { logOut } from '../../services/firebase';
import { useAuthState } from '../../hooks';

import styles from './Header.module.css';

type HeaderProps = {
  currentPage: string;
};

export default function Header({ currentPage }: HeaderProps) {
  const user = useAuthState();
  const isAuthPage = currentPage === 'signIn' || currentPage === 'signUp';

  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <Link to="/" className={styles.link}>
          <h1>YourGames</h1>
        </Link>
        <div className={styles.button_container}>
          {!isAuthPage && !user && (
            <Button variant="contained" component={Link} to="/signIn">
              Sign in
            </Button>
          )}
          {user && (
            <Button variant="contained" onClick={logOut}>
              Log out
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
