import React from 'react';

import './CardButtons.css';
import fav from '../../assets/img/favorite_empty.svg';
import favFilled from '../../assets/img/favorite_filled.svg';

type Props = {
  platform: string;
};

export default class CardButtons extends React.Component<Props> {
  state = {
    isFavorite: false,
  };

  handleClick = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
  };

  render() {
    const path = '../img/logo/';

    return (
      <div className="card_buttons">
        <button type="button" className="button_main">
          Add to Cart
        </button>
        <button type="button" className="button_wishlist" onClick={this.handleClick}>
          <img className="wishlist-icon" src={this.state.isFavorite ? favFilled : fav} />
        </button>
        <img src={`${path}${this.props.platform}.svg`} className="card_logo" />
      </div>
    );
  }
}
