import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { ProductImage } from './ProductImage';

@Entity('products')
class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('numeric')
  price: number;

  @Column('numeric')
  discount_percentage: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => ProductImage, image => image.product, { eager: true })
  images: ProductImage[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Product };
