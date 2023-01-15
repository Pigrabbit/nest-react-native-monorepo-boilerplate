import { render, waitFor } from '@testing-library/react-native';
import React from 'react';

import App from './App';

describe('<App />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation();
  });

  afterAll(() => {
    (console.warn as jest.Mock).mockRestore();
  });

  it('renders correctly', async () => {
    const { getByTestId } = render(<App />);
    await waitFor(() => {
      expect(getByTestId('welcome-heading')).toHaveTextContent('Welcome');
    });
  });
});
