import React, { useState, useEffect } from 'react';
import './Comp.css'
import { Link } from 'react-router-dom'; 
import { Button } from '@mui/material';

const AdminRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: '', details: '', ingredients: '', cookingSteps: '' });
  const [editedRecipe, setEditedRecipe] = useState({ name: '', details: '', ingredients: '', cookingSteps: '' });
 
  useEffect(() => {
    getRecipes();
  }, []);
 
  const apiUrl = 'http://localhost:9002/recipe';
 
  const addRecipe = async () => {
    try {
      console.log('API URL:', `${apiUrl}/add`);
      const response = await fetch(`${apiUrl}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      });
 
      console.log('API Response:', response);
 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
 
      alert('Recipe added successfully!');
      getRecipes();
      setNewRecipe({ name: '', details: '', ingredients: '', cookingSteps: '' });
    } catch (error) {
      console.error('Error adding recipe:', error.message);
    }
  };

const getRecipes = async () => {
    try {
      const response = await fetch(`${apiUrl}/recipes`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data.data);
    } catch (error) {
      console.error('Error fetching recipes:', error.message);
    }
  };
 
 
  const removeRecipe = async (recipeId) => {
    const confirmDelete = window.confirm('Are you sure you want to remove this recipe?');
   
    if (!confirmDelete) {
      return;
    }
 
    try {
      const response = await fetch(`${apiUrl}/delete/${recipeId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
 
      if (response.ok) {
        alert('Recipe removed successfully!');
        getRecipes();
      } else {
        console.error('Error removing recipe:', response.statusText);
      }
    } catch (error) {
      console.error('Error removing recipe:', error);
    }
  };
 
  const editRecipe = (recipeId) => {
    const foundRecipe = recipes.find(recipe => recipe._id === recipeId);
    setEditedRecipe({ ...foundRecipe });
  };
 
  const saveEditedRecipe = async () => {
    try {
      const response = await fetch(`${apiUrl}/update/${editedRecipe._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(editedRecipe),
      });
 
      if (response.ok) {
        alert('Recipe updated successfully!');
        getRecipes();
        setEditedRecipe({ name: '', details: '', ingredients: '', cookingSteps: '' });
      } else {
        console.error('Error updating recipe:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };
 
  const isArray = (value) => {
    return Array.isArray(value);
  };
 
  return (
    <div className="login-container" style={{color:'white'}}>
      <h1 style={{textAlign:'center'}} >Welcome to Admin Dashboard</h1><br></br><br></br>
      <Button style={{width:'25%'}} variant='contained' component={Link} to="/adminhome">Go To Home Page</Button><br></br><br></br>

      <h3>Add Recipe</h3><br></br>
      <div>
        <input type="text"
          value={newRecipe.name} onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })} placeholder="Recipe Name" />
      </div>
      <div>
        <textarea type="text" value={newRecipe.details} onChange={(e) => setNewRecipe({ ...newRecipe, details: e.target.value })} placeholder="Recipe Details"></textarea>
      </div>
      <div>
        <textarea value={newRecipe.ingredients} onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })} placeholder="Ingredient 1, Ingredient 2, ..."></textarea>
      </div>
      <div>
        <label>Cooking Steps:</label>
        <textarea value={newRecipe.cookingSteps} onChange={(e) => setNewRecipe({ ...newRecipe, cookingSteps: e.target.value })} placeholder="Step 1, Step 2, ..."></textarea>
      </div>
      <button onClick={addRecipe}>Add Recipe</button>
 
      <h3>Recipes</h3>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <div>{recipe.name}</div>
          <div>{recipe.details}</div>
          <div>{isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients}</div>
          <div>{isArray(recipe.cookingSteps) ? recipe.cookingSteps.join(', ') : recipe.cookingSteps}</div>
          <div>
            <Button style={{width:'25%'}} variant='contained' color='warning' onClick={() => removeRecipe(recipe._id)}>Remove</Button>
           
            <Button style={{width:'25%'}} variant='contained' color='secondary' onClick={() => editRecipe(recipe._id)}>Edit</Button>
          </div><br></br>
        </div>
      ))}
 
      <h3>Edit Recipe</h3><br></br>
      <div>
        
        <input type="text" value={editedRecipe.name} onChange={(e) => setEditedRecipe({ ...editedRecipe, name: e.target.value })} placeholder="Recipe Name" />
      </div>
      <div>
       
        <textarea type="text" value={editedRecipe.details} onChange={(e) => setEditedRecipe({ ...editedRecipe, details: e.target.value })} placeholder="Recipe Details"></textarea>
      </div>
      <div>
        
        <textarea  type="text" value={editedRecipe.ingredients} onChange={(e) => setEditedRecipe({ ...editedRecipe, ingredients: e.target.value })} placeholder="Ingredient 1, Ingredient 2, ..."></textarea>
      </div>
      <div>
        <label>Cooking Steps:</label>
        <textarea value={editedRecipe.cookingSteps} onChange={(e) => setEditedRecipe({ ...editedRecipe, cookingSteps: e.target.value })} placeholder="Step 1, Step 2, ..."></textarea>
      </div>
      <button onClick={saveEditedRecipe}>Save Changes</button>
    </div>
  );
};
 
export default AdminRecipes;
 