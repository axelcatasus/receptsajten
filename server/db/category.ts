import RecipeModel from './models/recipeModel';

export const getCategories = async () => {
    const categories = await RecipeModel.aggregate([
        { $match: {} },
        { $unwind: '$category' },
        { $group: { _id: '$category', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
    ]);
    return categories
}

export const getRecipesByCategory = async (category: string) => {
    const recipes = await RecipeModel.find({category: category});
    return recipes;
}

export const getRecipesByCategoryAndSearch = async (category: string, search: any) => {
    const recipes = await RecipeModel.find({category: category,
        $or: [
            { title: { $regex: search, $options: 'i' } }
        ]
});
    return recipes;
}
    