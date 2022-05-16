export interface CommentType {
    _id: string;
    commentBody: string;
    name: string;
    createdAt: string;
}

export interface IngredientType {
    ingredient: string;
    amount: number;
    unit: string;
}

export interface InstructionType {
    instruction: string;
}

export interface RecipeType {
    _id: string,
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