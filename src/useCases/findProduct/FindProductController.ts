import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { FindProductUseCase } from './FindProductUseCase';

class FindProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findProductUseCase = container.resolve(FindProductUseCase);

    const product = await findProductUseCase.execute(id);

    return response.json(product);
  }
}

export { FindProductController };
