import { useState } from 'react';

import './CardButtons.css';
import fav from '../../assets/img/favorite_empty.svg';
import favFilled from '../../assets/img/favorite_filled.svg';
import type { CardButtonsProps } from '../../utils/types';

export default function CardButtons(props: CardButtonsProps) {
  const [isFavorite, setFavorite] = useState(false);
  const path = '../img/logo/';
  const handleClick = () => {
    setFavorite(!isFavorite);
  };

  return (
    <div className="card_buttons">
      <button type="button" className="button_main">
        Add to Cart
      </button>
      <button type="button" className="button_wishlist" onClick={handleClick}>
        <img className="wishlist-icon" src={isFavorite ? favFilled : fav} />
      </button>
      <img src={`${path}${props.platform}.svg`} className="card_logo" />
    </div>
  );
}
