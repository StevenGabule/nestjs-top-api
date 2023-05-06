import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type ProductDocument = HydratedDocument<Product>
class ProductCharacteristic {
	@Prop()
	name: string;

	@Prop()
	value: string
}
export class Product {
	@Prop()
	_id: string;

	@Prop({ default: 'https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg' })
	image: string;

	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	price: number;

	@Prop({ default: 0 })
	oldPrice: number;

	@Prop({ default: 0 })
	credit: number;

	@Prop()
	calculatedRating: number;

	@Prop({ required: true })
	short_description: string;

	@Prop({ required: true })
	description: string;

	@Prop({ type: () => [String], required: true })
	advantages: string;

	@Prop({ type: () => [String], required: true })
	disAdvantages: string[];

	@Prop({ type: () => [String], required: true })
	categories: string[];

	@Prop({ type: () => [String], required: true })
	tags: string[];

	@Prop({ type: () => [ProductCharacteristic], _id: false })
	characteristic: ProductCharacteristic[];

	@Prop({ default: Date.now() })
	createdAt: Date;

	@Prop({ default: Date.now() })
	updatedAt: Date;

	@Prop()
	deletedAt: Date;

}

export const ProductScheme = SchemaFactory.createForClass(Product);
