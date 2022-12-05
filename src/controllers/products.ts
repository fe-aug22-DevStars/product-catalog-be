import { Request, Response } from 'express';
import * as productsService from '../services/products';

export const getAll = async (req: Request, res: Response) => {
  const products = await productsService.getAll();

  res.send(products);
}

export const getPhones = async (req: Request, res: Response) => {
  const { pageId, amount, sortBy } = req.params;

  const allProducts = await productsService.getAll();
  const totalAmount = allProducts.length;
  const products = await productsService.getPhones(amount, +pageId, sortBy);
  const numberOfPages = await productsService.getNumberOfPages(amount);

  res.send({
    "products": products,
    "numberOfPages": numberOfPages,
    "numberOfProducts": totalAmount,
  })
}

export const getFavourites = async(req: Request, res: Response) => {
  const { phoneIds } = req.params;

  const products = await productsService.getFavourites(phoneIds);

  res.send(products);
}
