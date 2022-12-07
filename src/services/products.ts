import { Phone } from '../models/Phones';

export async function getAll() {
  return Phone.findAll();
}

export async function getPhones(
  amount: string, pageId: number, sortBy: string,
) {
  const allPhones = (await getAll()).sort((product1, product2) => {
    switch (sortBy) {
    case 'Alphabetically':
      return product1.name.localeCompare(product2.name);

    case 'Cheapest':
      return product1.price - product2.price;

    default:
    case 'Newest':
      return product2.year - product1.year;
    }
  });

  if (amount === 'All') {
    return allPhones;
  };

  const lastPhoneIndex = +amount * pageId;
  const firstPhoneIndex = lastPhoneIndex - +amount;
  const currentPhones = allPhones.slice(firstPhoneIndex, lastPhoneIndex);

  return currentPhones;
}

export function getNumberOfPages(amount: string) {
  if (amount !== 'All') {
    return Math.ceil(products.length / +amount);
  }

  return 0;
}

export function getFavourites(phoneIds: string) {
  return products.filter(product => phoneIds.split('&').includes(product.id));
}
