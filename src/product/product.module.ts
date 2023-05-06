import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { Product, ProductScheme } from './product.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductScheme }])],
  controllers: [ProductController]
})
export class ProductModule { }
