import React from 'react';
import { render } from '@testing-library/react';
import Brand from './Brand';

test('renders brand', () => {
  const { getByText } = render(<Brand />);
  const linkElement = getByText(/corpushub/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders brand with default fontSize', () => {
  const { getByText } = render(<Brand />);
  const linkElement = getByText(/corpushub/i);
  expect(linkElement).toHaveStyle('font-size: 6xl');
});

test('renders brand with fontSize 2xl', () => {
  const { getByText } = render(<Brand fontSize="2xl" />);
  const linkElement = getByText(/corpushub/i);
  expect(linkElement).toHaveStyle('font-size: 2xl');
});
