import { Request, Response } from 'express';
import * as colorsService from '../services/colors';

export const getAll = async (req: Request, res: Response) => {
  const colors = await colorsService.getAll();

  res.send(colors);
};

export const getOne = async (req: Request, res: Response) => {
  const { colorId } = req.params;
  const foundColor = await colorsService.getColorById(+colorId);

  if (!foundColor) {
    res.sendStatus(404);
    return;
  }

  res.send(foundColor);
}
