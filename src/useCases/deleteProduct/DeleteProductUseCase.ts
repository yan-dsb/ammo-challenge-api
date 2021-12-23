import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../repositories/IProductsRepository';
import { AppError } from '../../errors/AppError';

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const product = await this.productsRepository.findByID(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    await this.productsRepository.deleteByID(product.id);
  }
}

export { DeleteProductUseCase };
