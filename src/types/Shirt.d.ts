export interface IShirt {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  sizes: string[];
  variants: IVariant[];
}

export interface IVariant {
  id: number;
  color: string;
  image: string;
}
