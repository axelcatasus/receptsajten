import express, { Request, Response } from 'express'
import { getCategories, getRecipesByCategory, getRecipesByCategoryAndSearch } from '../db/category'

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const gottenCategories = await getCategories();
    res.status(200).json(gottenCategories);
});

router.get('/:category', async (req: Request, res: Response) => {
    const gottenRecipes = await getRecipesByCategory(req.params.category);
    res.status(200).json(gottenRecipes);
});

router.get("/:category/recipes/", async (req: Request, res: Response) => {
    const query = req.query
    const category = req.params.category
    if(Object.keys(query).length > 0){
      if(Object.keys(query).includes("search")){
        const recipes = await getRecipesByCategoryAndSearch(category, query.search)
        res.json(recipes)
      }
    } else {
        const recipes = await getRecipesByCategory(req.params.category) 
        res.json(recipes)
    }
  })




export default router