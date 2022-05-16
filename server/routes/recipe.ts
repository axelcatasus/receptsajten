import express, { Request, Response, json } from 'express';
import { getRecipes, getRecipesBySearch, getRecipesById, pushRatingById, pushCommentById } from '../db/recipe';

const router = express.Router();



router.get("/", async (req, res) => {
    const query = req.query
    if(Object.keys(query).length > 0){
      if(Object.keys(query).includes("search")){
        const recipes = await getRecipesBySearch(query.search)
        res.json(recipes)
      }
    } else {
        const recipes = await getRecipes() 
        res.json(recipes)
    }
  })

router.get('/:recipeId', async (req: Request, res: Response) => {
    const gottenRecipe = await getRecipesById(req.params.recipeId);
    res.status(200).json(gottenRecipe);
});

router.post('/:recipeId/ratings', async (req: Request, res: Response) => {
    const gottenRecipe = await pushRatingById(req.params.recipeId, req.body.rating);
    res.status(200).json(gottenRecipe);
});

router.post('/:recipeId/comment', async (req: Request, res: Response) => {
    const gottenRecipe = await pushCommentById(req.params.recipeId, req.body.comment);
    res.status(200).json(gottenRecipe);
});
export default router
