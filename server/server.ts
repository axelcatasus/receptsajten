import express, {Request, Response, json} from 'express';
import { connect } from 'mongoose';

import recipeRouter from './routes/recipe';
import categoryRouter from './routes/category';

connect('mongodb://localhost:27017/receptsajten')

const app = express()
app.use(json());
const port = 3000


app.get('/', (req: Request, res: Response) => {
res.send ('Hello World!') })

app.listen(port, () => {
console.log (`Example app listening on port ${port}`)
})

app.use('/recipes', recipeRouter)
app.use('/category', categoryRouter)