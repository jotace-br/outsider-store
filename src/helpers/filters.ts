import { IShirt } from '@/types/Shirt';

export function filterByName(product: IShirt, filterValue: string) {
  const productName = product.name.toLowerCase();
  const filterName = filterValue.toLowerCase();
  return productName.includes(filterName);
}

export function filterByMaxPrice(product: IShirt, filterMaxPrice: string) {
  const maxPrice = parseFloat(filterMaxPrice);
  return filterMaxPrice === '' || product.price <= maxPrice;
}

export function filterBySize(product: IShirt, filterSize: string) {
  return filterSize === '' || product.sizes.includes(filterSize);
}

export function filterByColor(product: IShirt, filterColor: string) {
  return (
    filterColor === '' ||
    product.variants.some((variant) => variant.color === filterColor)
  );
}
