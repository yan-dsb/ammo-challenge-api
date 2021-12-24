import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../repositories/IProductsRepository';
import { IStorageProvider } from '../../providers/StorageProvider/IStorageProvider';
import { IProductsImagesRepository } from '../../repositories/IProductsImagesRepository';
import { AppError } from '../../errors/AppError';

interface IRequest {
  product_id: string;
  images_name: string[];
}

@injectable()
class UploadProductImagesUseCase {
  constructor(
    @inject('ProductsImagesRepository')
    private productsImagesRepository: IProductsImagesRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute({ product_id, images_name }: IRequest): Promise<void> {
    const product = await this.productsRepository.findByID(product_id);

    if (!product) {
      throw new AppError('Product not found');
    }

    images_name.forEach(async image_name => {
      await this.productsImagesRepository.create({
        product_id,
        image_name
      });

      await this.storageProvider.save(image_name, 'products');
    });
  }
}

export { UploadProductImagesUseCase };
