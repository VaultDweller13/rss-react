import { SearchBar, Header, CardContainer } from '../components';

export default function Home() {
  return (
    <>
      <Header currentPage="Home" />
      <main className="wrapper">
        <SearchBar />
        <CardContainer />
      </main>
    </>
  );
}
