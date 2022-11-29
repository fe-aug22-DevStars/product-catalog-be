import { Good } from "../models/Good";

export const getAll = async () => {
  return Good.findAll();
}

export const getGoodById = async (goodId: number) => {
  return Good.findByPk(goodId);
}

export const addGood = async (name: string, colorId: number) => {
  const newGood = {
    name,
    colorId,
  }

  return Good.create(newGood);
}

export const removeGood = async (goodId: number) => {
  return Good.destroy({
    where: {
      id: goodId,
    }
  });
}
