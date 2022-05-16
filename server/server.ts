import express, {Request, Response, json} from 'express';
import { connect } from 'mongoose'
import cors from 'cors';

import recipeRouter from './routes/recipe';
import categoryRouter from './routes/category';

connect('mongodb+srv://axel:7HIx5jeaWJcdVnsK@receptsajten.kd2lz.mongodb.net/receptsajten?retryWrites=true&w=majority').then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
    console.log (`Listening on port ${port}`)
    });
})

const app = express()
app.use(cors())
app.use(json());
const port = 3000

app.get('/', (req: Request, res: Response) => {
res.send ('Hello World!') 
})

app.use('/recipes', recipeRouter)
app.use('/category', categoryRouter)