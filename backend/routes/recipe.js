import express from 'express'
import { addRecpie, deleteRecpie, endorseRecpie, getAllrecpie, updateRecpie } from '../controllers/recipe.js'
 
const router= express.Router()
 
// Get all recipes
 
 
router.post('/add',addRecpie)
 
router.get('/recipes',getAllrecpie)
 
router.delete('/delete/:id',deleteRecpie)
 
router.patch('/endorse/:id',endorseRecpie)
 
router.put('/update/:id',updateRecpie)
 
export default router