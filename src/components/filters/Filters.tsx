import { useState } from 'react';
import { getGenres } from '../../services/api';

export function Filters() {
  const [genres, setGenres] = useState();

  return (
    <aside>
      <button onClick={getGenres}>Get genres</button>
    </aside>
  );
}
