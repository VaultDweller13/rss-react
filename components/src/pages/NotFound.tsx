import Header from '../components/Header';
import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return (
      <>
        <Header currentPage="Page not found" />
        <main>
          <h1>404</h1>
        </main>
      </>
    );
  }
}
