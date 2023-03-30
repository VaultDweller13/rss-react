import { render, screen } from '@testing-library/react';
import React from 'react';

import LabeledInput from '../components/form/LabeledInput';

const data = {
  type: 'checkbox' as const,
  label: 'Test input',
  name: 'test',
  id: 'id',
  forwardedRef: React.createRef<HTMLInputElement>(),
  value: 'testValue',
};

describe('Input', () => {
  it('should have label', () => {
    render(<LabeledInput {...data} />);
    expect(screen.getByLabelText(data.label)).toBeInTheDocument;
  });
});
