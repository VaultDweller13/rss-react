import React from 'react';

type HeaderProps = {
  currentPage: string;
};

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header>
        <h1>{this.props.currentPage}</h1>
      </header>
    );
  }
}
