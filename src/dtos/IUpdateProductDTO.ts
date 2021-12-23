interface IUpdateProductDTO {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  discount_percentage?: number;
}

export { IUpdateProductDTO };
