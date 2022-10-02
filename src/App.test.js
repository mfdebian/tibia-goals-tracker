import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Goals tracker title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Goals tracker/i);
  expect(linkElement).toBeInTheDocument();
});
