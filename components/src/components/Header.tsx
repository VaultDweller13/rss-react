import React from 'react';

type HeaderProps = {
  currentPage: string;
};

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header className="header wrapper">
        <h1>{this.props.currentPage}</h1>
      </header>
    );
  }
}
