import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('Search bar', () => {
  it('should have search input', () => {
    render(<SearchBar />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument;
  });

  it('should have button', () => {
    render(<SearchBar />);

    expect(screen.getByRole('button')).toBeInTheDocument;
  });
});
