import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UploadProductImagesUseCase } from './UploadProductImagesUseCase';

interface IFile {
  filename: string;
}

class UploadProductImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: product_id } = request.params;
    const images = request.files as IFile[];

    const uploadProductImagesUseCase = container.resolve(
      UploadProductImagesUseCase
    );

    const images_name = images.map(image => image.filename);

    await uploadProductImagesUseCase.execute({
      product_id,
      images_name
    });

    return response.status(201).send();
  }
}

export { UploadProductImagesController };
