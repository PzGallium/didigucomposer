import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page with View works link', () => {
  render(<App />);
  const linkElement = screen.getByText(/view works/i);
  expect(linkElement).toBeInTheDocument();
});
