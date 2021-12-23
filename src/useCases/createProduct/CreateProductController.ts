import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price, discount_percentage } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    await createProductUseCase.execute({
      name,
      description,
      price,
      discount_percentage
    });

    return response.status(201).send();
  }
}

export { CreateProductController };
