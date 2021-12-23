import { inject, injectable } from 'tsyringe';
import { IStorageProvider } from '../../providers/StorageProvider/IStorageProvider';
import { IProductsImagesRepository } from '../../repositories/IProductsImagesRepository';

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
    private storageProvider: IStorageProvider
  ) {}

  async execute({ product_id, images_name }: IRequest): Promise<void> {
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
