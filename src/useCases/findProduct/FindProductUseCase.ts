import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../repositories/IProductsRepository';
import { Product } from '../../entities/Product';
import { AppError } from '../../errors/AppError';

@injectable()
class FindProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string): Promise<Product> {
    const product = await this.productsRepository.findByID(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    return product;
  }
}

export { FindProductUseCase };
