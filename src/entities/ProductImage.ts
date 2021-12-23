import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Product } from './Product';

@Entity('product_images')
class ProductImage {
  @PrimaryColumn()
  id: string;

  @Column()
  product_id: string;

  @Column()
  image_name: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { ProductImage };
