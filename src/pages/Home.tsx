import { SearchBar, Header, CardContainer } from '../components';

export default function Home() {
  return (
    <>
      <Header currentPage="Switch store" />
      <main className="wrapper">
        <SearchBar />
        <CardContainer />
      </main>
    </>
  );
}
