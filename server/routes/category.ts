import express, { Request, Response } from 'express'
import { getCategories, GetRecipesByCategory, GetRecipesByCategoryAndSearch } from '../db/category'

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const gottenCategories = await getCategories();
    res.status(200).json(gottenCategories);
});

router.get('/:category', async (req: Request, res: Response) => {
    const gottenRecipes = await GetRecipesByCategory(req.params.category);
    res.status(200).json(gottenRecipes);
});

router.get('/:category/recipes/:abc', async (req: Request, res: Response) => {
    const gottenRecipes = await GetRecipesByCategoryAndSearch(req.params.category, req.params.abc);
    res.status(200).json(gottenRecipes);
});

export default router