import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

type HeaderProps = {
  currentPage: string;
};

export default function Header({ currentPage }: HeaderProps) {
  const isAuthPage = currentPage === 'signIn' || currentPage === 'signUp';

  return (
    <header className="header">
      <div className="header_wrapper">
        <Link to="/" className={styles.link}>
          <h1>YourGames</h1>
        </Link>
        {!isAuthPage && (
          <Button variant="contained" component={Link} to="/signIn">
            Sign in
          </Button>
        )}
      </div>
    </header>
  );
}
