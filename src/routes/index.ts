import { Router } from 'express';
import { productsImagesRoutes } from './product-images.routes';
import { productsRoutes } from './products.routes';

const routes = Router();

routes.use('/products', productsRoutes);
routes.use('/product-images', productsImagesRoutes);

export default routes;
