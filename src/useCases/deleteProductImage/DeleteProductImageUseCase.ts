import { inject, injectable } from 'tsyringe';
import { IStorageProvider } from '../../providers/StorageProvider/IStorageProvider';
import { AppError } from '../../errors/AppError';
import { IProductsImagesRepository } from '../../repositories/IProductsImagesRepository';

@injectable()
class DeleteProductImageUseCase {
  constructor(
    @inject('ProductsImagesRepository')
    private productsImagesRepository: IProductsImagesRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute(product_image_id: string): Promise<void> {
    const producImage = await this.productsImagesRepository.findByID(
      product_image_id
    );

    if (!producImage) {
      throw new AppError('Product image not found');
    }
    await this.productsImagesRepository.deleteByID(producImage.id);
    await this.storageProvider.delete(producImage.image_name, 'products');
  }
}

export { DeleteProductImageUseCase };
