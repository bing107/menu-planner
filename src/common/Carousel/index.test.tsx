import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carousel from './index';

const baseProps = {
  items: [
    {
      id: 0,
      joke: 'some title',
      imgUrl: ''
    },
    {
      id: 1,
      joke: 'some other title',
      imgUrl: ''
    }
  ]
};

test('renders Carousel component', () => {
  render(<Carousel {...baseProps} />);
});

test('renders list of items based on items list', () => {
  const { getByTestId, getByText } = render(<Carousel {...baseProps} />);

  expect(getByTestId('items-list').children.length).toBe(2);
  expect(getByText('some title')).toBeInTheDocument();
  expect(getByText('some other title')).toBeInTheDocument();
});
