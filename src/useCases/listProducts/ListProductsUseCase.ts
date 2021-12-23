import { inject, injectable } from 'tsyringe';
import { IPaginate } from '../../utils/IPaginate';
import { IProductsRepository } from '../../repositories/IProductsRepository';

interface IRequest {
  page?: string;
  take?: string;
  keyword?: string;
}

@injectable()
class ListProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute({ page, take, keyword }: IRequest): Promise<IPaginate> {
    const data = await this.productsRepository.findAll({
      page: Number(page) || undefined,
      take: Number(take) || undefined,
      keyword
    });

    return data;
  }
}

export { ListProductsUseCase };
