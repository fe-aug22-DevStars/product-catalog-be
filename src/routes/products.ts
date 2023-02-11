import express from 'express';
import * as productsController from '../controllers/products';

export const router = express.Router();

router.get('/products', productsController.getAll);
router.get('/products/:productId', productsController.getProductsByIds);
router.get('/products/full/:productId', productsController.getProductById);
router.get('/products/:amount/:pageId/:sortBy', productsController.getPhones);

