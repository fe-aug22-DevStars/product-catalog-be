import { Color } from "../models/Color";

export const getAll = async () => {
  return Color.findAll();
}

export const getColorById = async (colorId: number) => {
  return Color.findByPk(colorId);
}
