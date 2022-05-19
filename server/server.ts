import express, {Request, Response, json} from 'express';
import { connect } from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';

import recipeRouter from './routes/recipe';
import categoryRouter from './routes/category';

dotenv.config()

const connectionString: string = (process.env.MONGODB_CONNECTION_STRING as string)

connect(connectionString).then(() => {
  console.log('Connected to MongoDB')
})

const app = express()
app.use(cors())
app.use(json());
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
res.send ('Hello World!') 
})

app.use('/recipes', recipeRouter)
app.use('/category', categoryRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });