import { inject, injectable } from 'tsyringe';
import { AppError } from '../../errors/AppError';
import { IProductsRepository } from '../../repositories/IProductsRepository';

interface IRequest {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  discount_percentage?: number;
}

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute({
    id,
    name,
    description,
    price,
    discount_percentage
  }: IRequest): Promise<void> {
    const productAlreadyExists = await this.productsRepository.findByID(id);

    if (!productAlreadyExists) {
      throw new AppError('Product does not exists');
    }

    await this.productsRepository.update({
      id: productAlreadyExists.id,
      name,
      description,
      price,
      discount_percentage
    });
  }
}

export { UpdateProductUseCase };
