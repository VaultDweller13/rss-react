import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { logOut } from '../../services/firebase';
import { useAuthState } from '../../hooks';

import styles from './Header.module.css';

export default function Header() {
  const { user, loading } = useAuthState();

  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <Link to="/" className={styles.link}>
          <h1>YourGames</h1>
        </Link>
        <div className={styles.button_container}>
          {!loading &&
            (user ? (
              <>
                <Button variant="contained" onClick={logOut}>
                  Log out
                </Button>
                <Link to="/profile" className={styles.link}>
                  <AccountCircleOutlinedIcon fontSize="large" />
                </Link>
              </>
            ) : (
              <Button variant="contained" component={Link} to="/signIn">
                Sign in
              </Button>
            ))}
        </div>
      </div>
    </header>
  );
}
