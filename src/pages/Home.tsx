import { useState } from 'react';
import { SearchBar, Header, CardContainer } from '../components';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchInput') || '');

  return (
    <>
      <Header currentPage="Switch store" />
      <main className="wrapper">
        <SearchBar callback={setSearchQuery} />
        <CardContainer searchQuery={searchQuery} />
      </main>
    </>
  );
}
