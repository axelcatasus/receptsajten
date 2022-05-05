import express, {Request, Response, json} from 'express';
import { getRecipes, getRecipesBySearch, getRecipesById, pushRatingById } from '../db/recipe';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const gottenRecipes = await getRecipes();
    res.status(200).json(gottenRecipes);
});

router.get('/search/:query', async (req: Request, res: Response) => {
    const gottenRecipes = await getRecipesBySearch(req.params.query);
    res.status(200).json(gottenRecipes);
});

router.get('/:recipeId', async (req: Request, res: Response) => {
    const gottenRecipe = await getRecipesById(req.params.recipeId);
    res.status(200).json(gottenRecipe);
});

router.post('/:recipeId', async (req: Request, res: Response) => {
    const gottenRecipe = await pushRatingById(req.params.recipeId, req.body.rating);
    res.status(200).json(gottenRecipe);
});


export default router
