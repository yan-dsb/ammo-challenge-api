// eslint-disable-next-line import/no-extraneous-dependencies
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { Product } from '../../entities/Product';

define(Product, (faker: typeof Faker) => {
  const product = new Product();
  product.name = faker.random.word();
  product.price = 500;
  product.discount_percentage = 0;
  product.description = faker.lorem.paragraph();

  return product;
});
