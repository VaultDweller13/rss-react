import React from 'react';
import Header from '../components/Header';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header currentPage="Home" />
        <main>
          <h1>Main page</h1>
        </main>
      </>
    );
  }
}
