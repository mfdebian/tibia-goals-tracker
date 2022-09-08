import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Daily goals tracker title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Daily goals tracker/i);
  expect(linkElement).toBeInTheDocument();
});
