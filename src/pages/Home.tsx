import SearchBar from '../components/searchBar/SearchBar';
import React from 'react';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';

export default class Home extends React.Component {
  render() {
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
}