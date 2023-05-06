import { Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Product } from 'src/product/product.model';

export type ReviewDocument = HydratedDocument<Review>
export class Review {
	@Prop()
	_id: string;

	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	description: string;

	@Prop({ required: true })
	rating: number;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
	productId: Product;

	@Prop({ default: Date.now() })
	createdAt: Date;

	@Prop({ default: Date.now() })
	updatedAt: Date;

	@Prop()
	deletedAt: Date;
}

export const ReviewScheme = SchemaFactory.createForClass(Review);
