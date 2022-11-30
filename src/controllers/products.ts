import { Request, Response } from 'express';
import * as productsService from '../services/products';

export const getAll = async (req: Request, res: Response) => {
  const products = await productsService.getAll();

  res.send(products);
}