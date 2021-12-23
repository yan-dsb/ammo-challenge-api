import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateProductUseCase } from './UpdateProductUseCase';

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, price, discount_percentage } = request.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    await updateProductUseCase.execute({
      id,
      name,
      description,
      price,
      discount_percentage
    });

    return response.status(204).send();
  }
}

export { UpdateProductController };
