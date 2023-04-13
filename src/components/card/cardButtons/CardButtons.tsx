import { useState } from 'react';

import styles from './CardButtons.module.css';
import { favorite_empty, favorite_filled } from '../../../assets';

type CardButtonsProps = {
  platform: string;
  className?: string;
};

export default function CardButtons(props: CardButtonsProps) {
  const [isFavorite, setFavorite] = useState(false);
  const path = '../img/logo/';
  const handleClick = () => {
    setFavorite(!isFavorite);
  };

  return (
    <div className={`${styles.container} ${props.className || ''}`}>
      <button type="button" className={styles.cartButton}>
        Add to Cart
      </button>
      <button type="button" className={styles.wishlistButton} onClick={handleClick}>
        <img className={styles.wishlistIcon} src={isFavorite ? favorite_filled : favorite_empty} />
      </button>
      <img src={`${path}${props.platform}.svg`} className={styles.platformLogo} />
    </div>
  );
}
