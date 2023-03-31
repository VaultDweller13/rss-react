import SearchBar from '../components/searchBar/SearchBar';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';

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
