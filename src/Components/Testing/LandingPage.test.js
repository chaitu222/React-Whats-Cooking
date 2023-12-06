// LandingPage.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import LandingPage from '../LandingPage';

test('renders welcome message', () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );
  expect(screen.getByText("Welcome to What's Cooking")).toBeInTheDocument();
});

test('renders login button', () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('renders register button', () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );
  expect(screen.getByText('Register')).toBeInTheDocument();
});

