import { Schema, model, Types } from 'mongoose';
import { IngredientType } from './types/ingredientType';
import { InstructionType } from './types/instructionType';
import { CommentType } from './types/commentType';


export interface RecipeType {
    title: string;
    description: string;
    imageUrl: string;
    timeinMins: number;
    ratings: [number];
    category: [string];
    ingredients: IngredientType[];
    instructions: InstructionType[];
    comments: CommentType[];
   
}


const schema = new Schema<RecipeType>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    timeinMins: {
        type: Number,
        required: true
    },
    ratings: {
        type: [Number],
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    ingredients: {
        type: [
            {
                ingredient: String,
                amount: Number,
                unit: String
            }
        ],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    },
    comments: {
        type: [
            {
                commentBody: String,
                name: String,
                createdAt: String,
            }
        ],
        required: true
    },
    
});


const RecipeModel = model('recipe', schema);

export default RecipeModel


