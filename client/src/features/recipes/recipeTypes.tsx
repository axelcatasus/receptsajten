interface CommentType {
    comment: string;
    name: string;
    createdAt: Date;
}

interface IngredientType {
    ingredient: string;
    amount: number;
    unit: string;
}

interface InstructionType {
    instruction: string;
    prio?: number;
}

export interface RecipeType {
    _id?: string,
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