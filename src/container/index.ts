import { container } from 'tsyringe';
import '../providers';
import { ProductsImagesRepository } from '../repositories/ProductsImagesRepository';
import { IProductsImagesRepository } from '../repositories/IProductsImagesRepository';
import { IProductsRepository } from '../repositories/IProductsRepository';
import { ProductsRepository } from '../repositories/ProductsRepository';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
);

container.registerSingleton<IProductsImagesRepository>(
  'ProductsImagesRepository',
  ProductsImagesRepository
);
