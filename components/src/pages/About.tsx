import React from 'react';
import Header from '../components/Header';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header currentPage="About us" />
        <main className="wrapper">
          <h1>About page</h1>
        </main>
      </>
    );
  }
}
