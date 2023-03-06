import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('Given an app component', () => {
  test('When the app renders, there should be a heading init', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
});
