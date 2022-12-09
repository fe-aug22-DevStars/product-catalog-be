import { Phone } from '../models/phone';

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
        order: ['year'],
      },
    );
    break;
  }

  if (amount === 'All') {
    return allPhones;
  };

  const lastPhoneIndex = +amount * pageId;
  const firstPhoneIndex = lastPhoneIndex - +amount;
  const currentPhones = allPhones.slice(firstPhoneIndex, lastPhoneIndex);

  return currentPhones;
}

export async function getNumberOfPages(amount: string) {
  if (amount !== 'All') {
    const AllPhones = await Phone.findAll();

    return Math.ceil(AllPhones.length / +amount);
  }

  return 0;
}

export async function getPhonesByIds(phoneIds: string) {
  const phoneIdsArray = JSON.parse(phoneIds);
  const favouritePhones = await Phone.findAll(
    {
      where: {
        'id': [phoneIdsArray],
      },
    },
  );

  return favouritePhones;
}
