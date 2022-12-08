// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';
import * as productsService from '../services/products';

export const getAll = async(req: Request, res: Response) => {
  const products = await productsService.getAll();

  if (!products) {
    res.sendStatus(400);

    return;
  }
  res.status(200).send(products);
};

export const getPhones = async(req: Request, res: Response) => {
  const { pageId, amount, sortBy } = req.params;

  if (!pageId || !amount || !sortBy) {
    res.sendStatus(422);

    return;
  }

  const allProducts = await productsService.getAll();
  const totalAmount = allProducts.length;
  const products = await productsService.getPhones(amount, +pageId, sortBy);
  const numberOfPages = await productsService.getNumberOfPages(amount);

  if (!allProducts || !products) {
    res.sendStatus(400);

    return;
  }

  res.status(200).send({
    'products': products,
    'numberOfPages': numberOfPages,
    'numberOfProducts': totalAmount,
  });
};

export const getPhonesByIds = async(req: Request, res: Response) => {
  const { phoneIds } = req.params;

  if (!phoneIds) {
    res.sendStatus(422);

    return;
  }

  const products = await productsService.getPhonesByIds(phoneIds);

  if (!products) {
    res.sendStatus(400);

    return;
  }

  res.status(200).send(products);
};
