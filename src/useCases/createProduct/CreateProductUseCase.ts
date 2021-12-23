import { inject, injectable } from 'tsyringe';
import { AppError } from '../../errors/AppError';
import { IProductsRepository } from '../../repositories/IProductsRepository';

interface IRequest {
  name: string;
  description: string;
  price: number;
  discount_percentage?: number;
}

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute({
    name,
    description,
    price,
    discount_percentage
  }: IRequest): Promise<void> {
    const productAlreadyExists = await this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError('Product already exists');
    }

    await this.productsRepository.create({
      name,
      description,
      price,
      discount_percentage
    });
  }
}

export { CreateProductUseCase };
