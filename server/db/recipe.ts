import RecipeModel, { RecipeType } from "./models/recipeModel";

export const getRecipes = async () => {
    const recipes = await RecipeModel.find();
    return recipes;
}
// export const getRecipesBySearch = async (search: string) => {
//     console.log(search);
//     const recipes = await RecipeModel.find({
//         $or: [
//             { title: { $regex: search, $options: 'i' } }
//         ]
//     })};

// export const getRecipesBySearch = async (search: string) => {
//     const recipes = await RecipeModel.find({title: search})
//     return recipes;
// }

export const getRecipesBySearch = async (search: string) => {
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