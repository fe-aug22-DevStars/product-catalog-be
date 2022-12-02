import { Request, Response } from 'express';
import * as productsService from '../services/products';

export const getAll = async (req: Request, res: Response) => {
  const products = await productsService.getAll();

  res.send(products);
}

export const getPhones = async (req: Request, res: Response) => {
  const { pageId, amount } = req.params;

  const products = await productsService.getPhones(+amount, +pageId);
  const numberOfPages = await productsService.getNumberOfPages(+amount);

  res.send({
    "products": products,
    "numberOfPages": numberOfPages,
  })
}
