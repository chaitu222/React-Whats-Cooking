import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Explore from '../Explore';
import { BrowserRouter as Router } from 'react-router-dom'; 

describe('Explore Component', () => {
  test('submits search form and renders products', async () => {
    render(
        <Router>
            <Explore />
        </Router>);

    // Check if the search form is rendered
    const searchForm = screen.getByText(/What's Cooking/i);
        expect(searchForm).toBeInTheDocument();

    // Submit the form (you might need to adjust this based on your actual form structure)
    const submitButton = screen.getByRole('button', { name: /Search/i });
    submitButton.click();

    // Wait for the products to be rendered (you might need to adjust the selector based on your actual product rendering)
    await waitFor(() => {
      const product = screen.getByText(/Recipe/i);
      expect(product).toBeInTheDocument();
    });

    // Add more assertions as needed
  });
});
