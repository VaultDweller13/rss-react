import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    searchInput: localStorage.getItem('searchInput') || '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    const { value } = event.target;
    this.setState({ searchInput: value });
  };

  componentDidUpdate(): void {
    localStorage.setItem('searchInput', this.state.searchInput);
  }

  render() {
    return (
      <form>
        <input
          type="search"
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.searchInput}
        />
      </form>
    );
  }
}
