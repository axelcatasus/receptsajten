import RecipeModel, { RecipeType } from "./models/recipeModel";
import { CommentType } from "./models/types/commentType";

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
    const recipe = await RecipeModel.findOneAndUpdate(
        { _id: id },
        { $push: { ratings: rating } },
    );
}
export const pushCommentById = async (id: string, comment: CommentType)=> {
    const recipe = await RecipeModel.findOneAndUpdate(
        { _id: id },
        { $push: { comments: comment, $id: true } } 
    );
}