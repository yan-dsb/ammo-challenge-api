import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

import { Product } from '../../entities/Product';

export default class CreateProductsSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Product)().createMany(200);
  }
}
