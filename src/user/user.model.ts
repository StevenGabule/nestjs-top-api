import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>
export class User {
	@Prop()
	_id: string

	@Prop()
	name: string

	@Prop({ unique: true, required: true })
	username: string

	@Prop({ unique: true, required: true })
	email: string;

	@Prop({ required: true })
	passwordHash: string;

	@Prop({ default: Date.now() })
	createdAt: Date;

	@Prop({ default: Date.now() })
	updatedAt: Date;

	@Prop()
	deletedAt: Date;

}

export const UserScheme = SchemaFactory.createForClass(User);
