import recipe from "../models/recipe.js";
 
  export const addRecpie=async (req, res) => {
    try {
      // Extract recipe details from the request body
      const { name, details, ingredients, cookingSteps } = req.body;
 
      // Create a new recipe instance
      const newRecipe = new recipe({
        name,
        details,
        ingredients,
        cookingSteps,
      });
 
      // Save the recipe to the database
      const savedRecipe = await newRecipe.save();
 
      res.status(201).json({
        success: true,
        data: savedRecipe,
        message: 'Recipe added successfully',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  };
 
  export const getAllrecpie= async (req, res) => {
    try {
      const recipes = await recipe.find();
      res.json({ success: true, data: recipes });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }
 
  export const deleteRecpie=async (req, res) => {
    const recipeId = req.params.id;
    try {
      await recipe.findByIdAndDelete(recipeId);
      res.json({ success: true, message: 'Recipe deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }
 
  export const endorseRecpie=async (req, res) => {
    const recipeId = req.params.id;
    try {
      await recipe.findByIdAndUpdate(recipeId, { endorsed: true });
      res.json({ success: true, message: 'Recipe endorsed successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }
 
  export const updateRecpie=async (req, res) => {
    try {
      const recipeId = req.params.id;
      const updatedRecipeData = req.body;
 
      // Check if the recipe with the given ID exists
      const existingRecipe = await recipe.findById(recipeId);
      if (!existingRecipe) {
        return res.status(404).json({ success: false, message: 'Recipe not found' });
      }
 
      // Update the recipe
      const updatedRecipe = await recipe.findByIdAndUpdate(recipeId, updatedRecipeData, { new: true });
 
      res.json({ success: true, data: updatedRecipe });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };