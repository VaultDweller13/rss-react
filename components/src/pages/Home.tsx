import SearchBar from '../components/SearchBar';
import React from 'react';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';

export default class Home extends React.Component {
  render() {
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
}
