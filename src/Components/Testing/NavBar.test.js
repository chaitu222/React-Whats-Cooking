import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

describe('NavBar Component', () => {
  test('renders NavBar with correct links', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Check if the navigation links are rendered
    expect(screen.getByText(/What's Cooking?/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(screen.getByText(/Feedback/i)).toBeInTheDocument();
  });

  test('opens profile menu on button click', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Check if the profile button is rendered
    const profileButton = screen.getByText(/Profile/i);
    expect(profileButton).toBeInTheDocument();

    // Click the profile button
    fireEvent.click(profileButton);

    // Check if the profile menu is opened
    expect(screen.getByText(/My Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });

  test('navigates to My Profile on menu item click', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Click the profile button
    fireEvent.click(screen.getByText(/Profile/i));

    // Click the My Profile menu item
    fireEvent.click(screen.getByText(/My Profile/i));

    // Check if the navigation to My Profile occurred
    expect(window.location.pathname).toBe('/myprofile');
  });


});
