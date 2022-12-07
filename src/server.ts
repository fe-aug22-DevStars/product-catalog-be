import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
// import { Phone } from './models/Phones';
// import mysql from 'mysql2';

import * as dotenv from 'dotenv';

import { router as productsRouter } from './routes/products';
// import { sequelize } from './db';

const router = express.Router();

const app = express();

app.use(cors());

dotenv.config();

// eslint-disable-next-line no-console
console.log('dirname', __dirname);

router.get('/', (req, res) => {
  res.json({
    'setup by': 'DevStars',
  });
});

app.use('/.netlify/functions/server/products', productsRouter);

export const handler = serverless(app);
