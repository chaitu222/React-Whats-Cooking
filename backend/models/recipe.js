import mongoose from "mongoose";
const RecipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    cookingSteps:{
        type:String,
        required:true
    },
    endorsed:
    { type: Boolean,
        default: false
    }
 
   
  });
 
  export default mongoose.model('Recipe', RecipeSchema);