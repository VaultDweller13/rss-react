import { render, screen } from '@testing-library/react';
import { SearchBar } from '../components';

describe('Search bar', () => {
  it('should have search input', () => {
    render(<SearchBar callback={() => {}} />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument;
  });

  it('should have button', () => {
    render(<SearchBar callback={() => {}} />);

    expect(screen.getByRole('button')).toBeInTheDocument;
  });
});
