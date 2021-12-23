import { ICreateProductImageDTO } from 'dtos/ICreateProductImageDTO';
import { Repository, getRepository } from 'typeorm';
import { ProductImage } from '../entities/ProductImage';
import { IProductsImagesRepository } from './IProductsImagesRepository';

class ProductsImagesRepository implements IProductsImagesRepository {
  private repository: Repository<ProductImage>;

  constructor() {
    this.repository = getRepository(ProductImage);
  }

  async create({
    product_id,
    image_name
  }: ICreateProductImageDTO): Promise<void> {
    const productImage = this.repository.create({
      product_id,
      image_name
    });

    await this.repository.save(productImage);
  }
}

export { ProductsImagesRepository };
