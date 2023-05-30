import { fireEvent, render, screen } from '@testing-library/react';

import Form from '../components/form/Form';

describe('Form', () => {
  it('should have title, date', () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText('Game Title:'), { target: { value: 'Fallout 2' } });
    fireEvent.change(screen.getByLabelText('Release Date:'), { target: { value: '1998-10-29' } });
    fireEvent.change(screen.getByLabelText('Platform:'), { target: { value: 'switch' } });

    expect(screen.getByRole('form')).toHaveFormValues({
      title: 'Fallout 2',
      date: '1998-10-29',
      platform: 'switch',
    });
  });
});

describe('Input type="file"', () => {
  it('should upload 1 file', () => {
    render(<Form />);
    const input = screen.getByLabelText('Cover Image') as HTMLInputElement;

    fireEvent.change(screen.getByLabelText('Cover Image'), {
      target: { files: [new File(['13'], 'fallout2.png', { type: 'image/png' })] },
    });

    expect(input.files).toHaveLength(1);
    expect(input.files![0].name).toBe('fallout2.png');
  });
});
