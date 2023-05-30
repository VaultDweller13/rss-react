import React from 'react';
import './SearchBar.css';
import icon from '../assets/img/search.svg';

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
      <div className="search-bar">
        <form className="search_form">
          <input
            type="search"
            className="search_input"
            placeholder="Search"
            onChange={this.handleChange}
            value={this.state.searchInput}
          />
          <button type="button" className="search_button">
            <img src={icon} alt="Search icon" className="search_icon" />
          </button>
        </form>
      </div>
    );
  }
}
