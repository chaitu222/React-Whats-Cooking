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

// Checking if the search form is rendered
    const searchForm = screen.getByText(/What's Cooking/i);
        expect(searchForm).toBeInTheDocument();

//after submitting
    const submitButton = screen.getByRole('button', { name: /Search/i });
    submitButton.click();

    await waitFor(() => {
      const product = screen.getByText(/Recipe/i);
      expect(product).toBeInTheDocument();
    });
  });
});
