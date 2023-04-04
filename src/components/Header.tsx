import Navbar from './Navbar';

type HeaderProps = {
  currentPage: string;
};

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
