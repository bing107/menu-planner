import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './index';

it('tests effect', () => {
  const mocked = jest.fn(() => console.log('componentProp'));
  const { getByTestId } = render(<Input handleChange={mocked} />);

  fireEvent.change(getByTestId('input'), { target: { value: 'foobar' } });
  expect(mocked).toHaveBeenCalledTimes(1);
  expect(getByTestId('input')).toHaveTextContent('foobar');
});
