import { useState } from 'react';

import './CardButtons.css';
import { favorite_empty, favorite_filled } from '../../assets/';

type CardButtonsProps = {
  platform: string;
};

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
        <img className="wishlist-icon" src={isFavorite ? favorite_filled : favorite_empty} />
      </button>
      <img src={`${path}${props.platform}.svg`} className="card_logo" />
    </div>
  );
}
