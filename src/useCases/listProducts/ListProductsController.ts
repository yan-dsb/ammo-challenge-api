import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListProductsUseCase } from './ListProductsUseCase';

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { page, take, keyword } = request.query;

    const listProductsUseCase = container.resolve(ListProductsUseCase);

    const products = await listProductsUseCase.execute({
      page: page as string,
      take: take as string,
      keyword: keyword as string
    });

    return response.json(products);
  }
}

export { ListProductsController };
