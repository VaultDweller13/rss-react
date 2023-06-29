import { SearchBar, Header, CardContainer } from '../components';
import { Filters } from '../components/filters/Filters';

export default function Home() {
  return (
    <>
      <Header currentPage="Games" />
      <main className="wrapper">
        <SearchBar />
        <Filters />
        <CardContainer />
      </main>
    </>
  );
}
