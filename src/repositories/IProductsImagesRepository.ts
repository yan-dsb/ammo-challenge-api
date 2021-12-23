import { ICreateProductImageDTO } from '../dtos/ICreateProductImageDTO';

interface IProductsImagesRepository {
  create(data: ICreateProductImageDTO): Promise<void>;
}

export { IProductsImagesRepository };
