import express from 'express';
import cors from 'cors';

import { router as productsRouter } from './routes/products';

const router = express.Router();

const port = 5000

const app = express();

app.use(cors());

router.get('/', (req, res) => {
  res.json({
    'setup by': 'DevStars',
  });
});

app.use(express.static('public'));

app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
