import { Router } from 'express';
import { DeleteProductImageController } from '../useCases/deleteProductImage/DeleteProductImageController';

const productsImagesRoutes = Router();

const deleteProductImageController = new DeleteProductImageController();

productsImagesRoutes.delete('/:id', deleteProductImageController.handle);

export { productsImagesRoutes };
