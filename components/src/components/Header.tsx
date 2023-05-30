import React from 'react';
import Navbar from './Navbar';

type HeaderProps = {
  currentPage: string;
};

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header className="header">
        <div className="header_wrapper">
          <h1>{this.props.currentPage}</h1>
          <Navbar />
        </div>
      </header>
    );
  }
}
