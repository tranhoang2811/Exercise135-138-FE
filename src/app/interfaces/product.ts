export interface IProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

export interface IProductInCart extends IProduct {
  quantity: number;
  isRemoved?: boolean;
}
