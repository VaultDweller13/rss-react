import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

type HeaderProps = {
  currentPage: string;
};

export default function Header(props: HeaderProps) {
  return (
    <header className="header">
      <div className="header_wrapper">
        <h1>{props.currentPage}</h1>
        <Button variant="contained" component={Link} to="/signIn">
          Sign in
        </Button>
      </div>
    </header>
  );
}
