import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To-Do List title', () => {
  render(<App />);
  const headingElement = screen.getByText(/To-Do List/i);
  expect(headingElement).toBeInTheDocument();
});
