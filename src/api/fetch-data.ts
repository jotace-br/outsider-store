import { IShirt } from '@/types/Shirt';

export function fetchData(): Promise<IShirt[]> {
  return fetch(
    'https://run.mocky.io/v3/6e85e736-d298-4513-9f38-13fa068e35d3'
  ).then((res) => res.json());
}

export function fetchDataById(id: number): Promise<IShirt> {
  return fetchData().then((data) => {
    const product = data.find((product: IShirt) => product.id === id);

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  });
}
