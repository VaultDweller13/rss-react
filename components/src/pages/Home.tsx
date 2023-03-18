import SearchBar from '../components/SearchBar';
import React from 'react';
import Header from '../components/Header';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header currentPage="Home" />
        <main>
          <SearchBar />
        </main>
      </>
    );
  }
}
