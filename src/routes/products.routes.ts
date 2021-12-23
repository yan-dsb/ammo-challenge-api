import { Router } from 'express';
import multer from 'multer';
import upload from '../config/upload';
import { FindProductController } from '../useCases/findProduct/FindProductController';
import { CreateProductController } from '../useCases/createProduct/CreateProductController';
import { ListProductsController } from '../useCases/listProducts/ListProductsController';
import { DeleteProductController } from '../useCases/deleteProduct/DeleteProductController';
import { UpdateProductController } from '../useCases/updateProduct/UpdateProductController';
import { UploadProductImagesController } from '../useCases/uploadProductImages/UploadProductImagesController';

const productsRoutes = Router();

const uploadProductImages = multer(upload);

const createProductController = new CreateProductController();
const findProductController = new FindProductController();
const listProductsController = new ListProductsController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();
const uploadProductImagesController = new UploadProductImagesController();

productsRoutes.post('/', createProductController.handle);
productsRoutes.get('/:id', findProductController.handle);
productsRoutes.get('/', listProductsController.handle);
productsRoutes.delete('/:id', deleteProductController.handle);
productsRoutes.put('/:id', updateProductController.handle);
productsRoutes.post(
  '/:id/images',
  uploadProductImages.array('images'),
  uploadProductImagesController.handle
);

export { productsRoutes };
