import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { Navbar } from '../';

type HeaderProps = {
  currentPage: string;
};

export default function Header(props: HeaderProps) {
  return (
    <header className="header">
      <div className="header_wrapper">
        <h1>{props.currentPage}</h1>
        {/* <Navbar /> */}
        <Button variant="contained" component={Link} to="/authentication">
          Sign in
        </Button>
      </div>
    </header>
  );
}
