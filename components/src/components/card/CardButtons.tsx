import React from 'react';

import './CardButtons.css';
import fav from '../../assets/img/favorite_empty.svg';
import favFilled from '../../assets/img/favorite_filled.svg';

export default class CardButtons extends React.Component {
  state = {
    isFavorite: false,
  };

  handleClick = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
  };

  render() {
    return (
      <div className="card_buttons">
        <button type="button" className="button_cart">
          Add to Cart
        </button>
        <button type="button" className="button_wishlist" onClick={this.handleClick}>
          <img className="wishlist-icon" src={this.state.isFavorite ? favFilled : fav} />
        </button>
      </div>
    );
  }
}
