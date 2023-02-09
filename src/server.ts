import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'
import { router as productsRouter } from './routes/products';
dotenv.config();

const router = express.Router();

const port = process.env.PORT;

const app = express();

app.use(cors());

router.get('/', (req, res) => {
  res.json({
    'setup by': 'DevStars',
  });
});

app.use(express.static('public'));

app.use('/', productsRouter);

app.listen(port, () => {
  console.log(`started at ${port}`)
})
