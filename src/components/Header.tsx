import Navbar from './Navbar';
import type { HeaderProps } from '../utils/types';

export default function Header(props: HeaderProps) {
  return (
    <header className="header">
      <div className="header_wrapper">
        <h1>{props.currentPage}</h1>
        <Navbar />
      </div>
    </header>
  );
}
