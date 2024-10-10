import { render, screen } from '@testing-library/react';
import App from './App';

test('renders setup screen heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/set up new user/i); // Updated text
  expect(headingElement).toBeInTheDocument();
});
