import RecipeModel from './models/recipeModel';

export const getCategories = async () => {
    const categories = await RecipeModel.find().distinct('category');
    return categories;
}

export const GetRecipesByCategory = async (category: string) => {
    const recipes = await RecipeModel.find({category: category});
    return recipes;
}

export const GetRecipesByCategoryAndSearch = async (category: string, search: string) => {
    const recipes = await RecipeModel.find({category: category,
        $or: [
            { title: { $regex: search, $options: 'i' } }
        ]
});
    return recipes;
}
// export const GetRecipesByCategoryAndSearch = async (category: string, search: string) => {
//     const recipes = await RecipeModel.find({category: category, $or: [
//         { title: { $regex: search, $options: 'i' } }
//     ]});
//     return recipes;
// }

    