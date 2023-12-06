import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // To extend Jest's expect functionality
import App from './App';

test('renders hello h1', () => {
  render(<App />);
  // Check if the <h1> tag with text "Hello" is rendered
  expect(screen.getByText('Find and share delicious recipes!')).toBeInTheDocument();
});
