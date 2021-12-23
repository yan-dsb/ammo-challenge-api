import { ICreateProductDTO } from 'dtos/ICreateProductDTO';
import { IFindAllProductsDTO } from 'dtos/IFindAllProductsDTO';
import { getRepository, Like, Repository } from 'typeorm';
import { IUpdateProductDTO } from 'dtos/IUpdateProductDTO';
import { paginateResponse } from '../utils/paginateResponse';
import { Product } from '../entities/Product';
import { IProductsRepository } from './IProductsRepository';
import { IPaginate } from '../utils/IPaginate';

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({
    name,
    description,
    price,
    discount_percentage
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      name,
      description,
      price,
      discount_percentage
    });

    await this.repository.save(product);

    return product;
  }

  async findByID(id: string): Promise<Product | undefined> {
    const product = await this.repository.findOne(id);

    return product;
  }

  async findAll({
    page = 1,
    take = 10,
    keyword = ''
  }: IFindAllProductsDTO): Promise<IPaginate> {
    const skip = (page - 1) * take;

    const data = await this.repository.findAndCount({
      where: { name: Like(`%${keyword}%`) },
      order: { name: 'DESC' },
      take,
      skip
    });

    return paginateResponse(data, page, take);
  }

  async deleteByID(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByName(name: string): Promise<Product | undefined> {
    const product = await this.repository.findOne({ name });

    return product;
  }

  async update(data: IUpdateProductDTO): Promise<void> {
    await this.repository.save(data);
  }
}

export { ProductsRepository };
