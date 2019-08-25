import React from 'react';
import {
  fireEvent,
  render,
  waitForElement,
  act,
  cleanup
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import axiosMock from 'axios';

afterEach(cleanup);

jest.mock('@tensorflow-models/toxicity', () => {});

const renderApp = () => render(<App />);

it('renders cta button', () => {
  const { getByTestId } = renderApp();
  expect(getByTestId('button-cta')).toHaveTextContent('Run Model');
});

it('fetches and displays a list of jokes', async () => {
  //@ts-ignore
  axiosMock.get.mockResolvedValueOnce({
    data: {
      value: [{ id: 1, joke: 'asdsa' }, { id: 2, joke: 'dfgf' }]
    }
  });

  const { getByTestId } = renderApp();
  expect(getByTestId('loading')).toHaveTextContent('Fetching jokes...');

  const resolvedJokeList = await waitForElement(() => getByTestId('joke-list'));

  expect(resolvedJokeList).toHaveTextContent('asdsa');
});
