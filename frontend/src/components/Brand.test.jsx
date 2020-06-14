import React from 'react';
import { render } from '@testing-library/react';
import Brand from './Brand';

test('renders brand', () => {
  const { getByText } = render(<Brand />);
  const linkElement = getByText(/corpushub/i);
  expect(linkElement).toBeInTheDocument();
});
