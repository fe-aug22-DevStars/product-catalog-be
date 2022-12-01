import { Request, Response } from 'express';
import * as productsService from '../services/products';

export const getAll = async (req: Request, res: Response) => {
  const products = await productsService.getAll();

  res.send(products);
}

export const getPaginated = async (req: Request, res: Response) => {
  const { pageId } = req.params;
  const { amount } = req.params;

  const products = await productsService.getPaginated(+pageId, +amount);

  res.send(products);
}