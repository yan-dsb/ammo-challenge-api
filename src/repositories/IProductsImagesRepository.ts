import { ProductImage } from '../entities/ProductImage';
import { ICreateProductImageDTO } from '../dtos/ICreateProductImageDTO';

interface IProductsImagesRepository {
  create(data: ICreateProductImageDTO): Promise<void>;
  findByID(id: string): Promise<ProductImage | undefined>;
  deleteByID(id: string): Promise<void>;
}

export { IProductsImagesRepository };
