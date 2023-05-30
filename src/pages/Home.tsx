import { SearchBar, Header, CardContainer } from '../components';

export default function Home() {
  return (
    <>
      <Header currentPage="Games" />
      <main className="wrapper">
        <SearchBar />
        <CardContainer />
      </main>
    </>
  );
}
