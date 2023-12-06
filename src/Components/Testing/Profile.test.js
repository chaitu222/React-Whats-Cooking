import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfilePage from '../Profile';


test('renders profile page with initial data', () => {
  render(<ProfilePage />);

  // Replace these assertions with your actual initial data
  expect(screen.getByText('My Profile')).toBeInTheDocument();
  expect(screen.getByLabelText('Username')).toBeInTheDocument();
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  expect(screen.getByLabelText('Bio')).toBeInTheDocument();
  expect(screen.getByText('Edit Profile')).toBeInTheDocument();
});

test('clicking edit button enables editing', () => {
  render(<ProfilePage />);

  const editButton = screen.getByText('Edit Profile');
  fireEvent.click(editButton);

  expect(screen.getByLabelText('Username')).toBeEnabled();
  expect(screen.getByLabelText('Email')).toBeEnabled();
  expect(screen.getByLabelText('Bio')).toBeEnabled();
  expect(screen.getByText('Save Changes')).toBeEnabled();
});

test('clicking edit button enables editing', () => {
    render(
        <ProfilePage />
    );

  const editButton = screen.getByText('Edit Profile');
  fireEvent.click(editButton);

  // Simulate user input (you may need to replace these values)
  fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'NewUsername' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'new@example.com' } });
  fireEvent.change(screen.getByLabelText('Bio'), { target: { value: 'New bio text' } });

  const saveButton = screen.getByText('Save Changes');
  fireEvent.click(saveButton);

});
