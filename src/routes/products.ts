import express from 'express';
import * as productsController from '../controllers/products';

export const router = express.Router();

router.get('/', productsController.getAll);