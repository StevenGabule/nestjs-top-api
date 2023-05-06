import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>
export class Auth {
	@Prop()
	_id: string

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

export const AuthScheme = SchemaFactory.createForClass(Auth);
