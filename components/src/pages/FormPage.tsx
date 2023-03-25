import React from 'react';
import Form from '../components/form/Form';
import Header from '../components/Header';

export default class From extends React.Component {
  render() {
    return (
      <>
        <Header currentPage="Add game" />
        <Form />;
      </>
    );
  }
}
