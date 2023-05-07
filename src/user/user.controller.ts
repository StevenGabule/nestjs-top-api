import { Body, Controller, HttpCode, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {

	@Post('create')
	async create(@Body() dto: CreateUserDto) {
		return dto;
	}

	@HttpCode(200)
	@Put('update')
	async update(@Body() dto: CreateUserDto) {
		return dto;
	}
}
