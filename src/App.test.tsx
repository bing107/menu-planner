import React from 'react';
import { fireEvent, render, waitForElement, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import axiosMock from 'axios';

jest.mock('@tensorflow-models/toxicity', () => {});

const renderApp = () => render(<App />);

it('renders cta button', () => {
  const { getByTestId } = renderApp();
  expect(getByTestId('button-cta')).toHaveTextContent('Run Model');
});

it('displays loading text while fetching jokes', () => {
  const { getByTestId } = renderApp();
  expect(getByTestId('loading')).toHaveTextContent('Fetching jokes...');
});

it('displays a list of 10 jokes', () => {
  //@ts-ignore
  axiosMock.get.mockResolvedValueOnce({
    data: {
      value: [{ id: 1, joke: 'asdsa' }, { id: 2, joke: 'dfgf' }]
    }
  });

  const { getByTestId } = renderApp();
});
