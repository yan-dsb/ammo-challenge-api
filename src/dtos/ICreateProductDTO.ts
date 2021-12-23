interface ICreateProductDTO {
  name: string;
  description: string;
  price: number;
  discount_percentage?: number;
}

export { ICreateProductDTO };
