import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteProductImageUseCase } from './DeleteProductImageUseCase';

class DeleteProductImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProductImageUseCase = container.resolve(
      DeleteProductImageUseCase
    );

    await deleteProductImageUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DeleteProductImageController };
