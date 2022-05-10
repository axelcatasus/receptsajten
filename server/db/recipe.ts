import RecipeModel, { RecipeType } from "./models/recipeModel";

export const getRecipes = async () => {
    const recipes = await RecipeModel.find();
    return recipes;
}
export const getRecipesBySearch = async (search: any) => {
    const recipes = await RecipeModel.find({
        $or: [
            { title: { $regex: search, $options: 'i' } }
        ]
    })
    return recipes;
}
export const getRecipesById = async (id: string) => {
    const recipe = await RecipeModel.findById(id);
    return recipe;
}

export const pushRatingById = async (id: string, rating: number) => {
    const recipe = await RecipeModel.findByIdAndUpdate(id);
    if(recipe) {
    recipe.ratings.push(rating);
    recipe.save();
    return recipe;
    }
}