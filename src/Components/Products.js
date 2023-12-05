// Products.js

import React from 'react';
import '../App.css'

const Products = ({ data }) => {
  return (
    <div className="container mt-4" style={{ color: 'white' }}>
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {data.map((recipe, index) => (
          <div key={index} className="col mb-4 card-container">
            <div className="card h-100 result-card">
              <img src={recipe.recipe.image} className="card-img-top" alt="Recipe" />
              <div className="card-body">
                <h5 className="card-title">{recipe.recipe.label}</h5>
                <h4 className="card-text"> Ingredients:</h4>
                <p>{recipe.recipe.ingredientLines.join(', ')}</p>
                <h4 className="card-text"> Instructions:</h4>
                <p className="card-text">
                  <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                    Click here
                  </a>
                </p>
              </div>
            </div>
            <br></br><br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
