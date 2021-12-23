import { IFindAllProductsDTO } from '../dtos/IFindAllProductsDTO';
import { ICreateProductDTO } from '../dtos/ICreateProductDTO';
import { Product } from '../entities/Product';
import { IPaginate } from '../utils/IPaginate';
import { IUpdateProductDTO } from '../dtos/IUpdateProductDTO';

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findByID(id: string): Promise<Product | undefined>;
  findAll(data: IFindAllProductsDTO): Promise<IPaginate>;
  deleteByID(id: string): Promise<void>;
  findByName(name: string): Promise<Product | undefined>;
  update(data: IUpdateProductDTO): Promise<void>;
}

export { IProductsRepository };
