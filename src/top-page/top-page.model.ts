import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TopPageDocument = HydratedDocument<TopPage>

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export class hhData {
	@Prop()
	count: number;

	@Prop()
	juniorSalary: number;

	@Prop()
	middleSalary: number;

	@Prop()
	seniorSalary: number;
}

export class TopLevelAdvantages {

	@Prop()
	title: string;

	@Prop()
	description: string;
}

export class TopPage {
	@Prop({ required: true })
	_id: string;

	@Prop({ required: true, enum: TopLevelCategory })
	firstCategory: TopLevelCategory;

	@Prop({ required: true })
	secondCategory: string;

	@Prop({ required: true, unique: true })
	alias: string;

	@Prop({ required: true })
	title: string;

	@Prop({ type: () => [String], required: true })
	category: string[];

	@Prop()
	hh?: hhData;

	@Prop({ type: () => [TopLevelAdvantages], required: true })
	advantages: TopLevelAdvantages[];

	@Prop({ required: true })
	seoText: string;

	@Prop({ type: () => [String], required: true })
	tagsTitle: string[];

	@Prop({ type: () => [String], required: true })
	tags: string[];

	@Prop({ default: Date.now() })
	createdAt: Date;

	@Prop({ default: Date.now() })
	updatedAt: Date;

	@Prop()
	deletedAt: Date;
}

export const TopPageScheme = SchemaFactory.createForClass(TopPage);
