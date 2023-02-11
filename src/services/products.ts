import { Phone } from '../models/phone';
import fs from 'fs/promises';
import path from 'path';

export async function getAll() {
  return Phone.findAll();
}

export async function getPhones(
  amount: string, pageId: number, sortBy: string,
): Promise<Phone[]> {
  let allPhones: Phone[];

  switch (sortBy) {
    case 'Alphabetically':
      allPhones = await Phone.findAll(
        {
          order: ['name'],
        },
      );
      break;

    case 'Cheapest':
      allPhones = await Phone.findAll(
        {
          order: ['price'],
        },
      );
      break;

    default:
    case 'Newest':
      allPhones = await Phone.findAll(
        {
          order: [
            ['year', 'DESC']
          ],
        },
      );
      break;
  }

  if (amount === 'All') {
    return allPhones;
  }

  const lastPhoneIndex = +amount * pageId;
  const firstPhoneIndex = lastPhoneIndex - +amount;

  return allPhones.slice(firstPhoneIndex, lastPhoneIndex);
}

export async function getNumberOfPages(amount: string) {
  if (amount !== 'All') {
    const AllPhones = await Phone.findAll();

    return Math.ceil(AllPhones.length / +amount);
  }

  return 0;
}

export async function getProductsByIds(productId: string) {
  const productIdsArray = JSON.parse(productId);

  return await Phone.findAll(
    {
      where: {
        'id': [productIdsArray],
      },
    },
  );
}

export async function getOneProductById(productId: string) {
  try {
    const data = await fs.readFile(
      path.resolve('public', 'api', 'phones', `${productId}.json`), 'utf8',
    );

    return JSON.parse(data);
  } catch (error) {
    console.log(error)
  }
}
