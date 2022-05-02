import { Schema, model } from 'mongoose';
import { Ingredient } from './types/ingredientType';
import { Instruction } from './types/instructionType';
import { Comment } from './types/commentType';


export interface RecipeType {
    title: string;
    description: string;
    imageUrl: string;
    timeinMins: number;
    ratings: [number];
    category: [string];
    ingredients: any;
    // ingredients: [Ingredient];
    instructions: any;
    // instructions: [Instruction];
    comments: any;
    // comments: [Comment];
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
        type: Array,
        // type: [Ingredient],
        required: true
    },
    instructions: {
        type: Array,
        // type: [Instruction],
        required: true
    },
    comments: {
        type: Array,
        // type: [Comment],
        required: true
    }
});

const RecipeModel = model<RecipeType>('recipe', schema);

export default RecipeModel


