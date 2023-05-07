import { IsString } from 'class-validator';
export class RegisterDto {
	@IsString()
	name: string

	@IsString()
	username: string

	@IsString()
	email: string;

	@IsString()
	passwordHash: string;

	@IsString()
	passwordConfirm: string;
}