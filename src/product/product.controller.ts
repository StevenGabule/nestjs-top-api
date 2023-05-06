import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { Product } from './product.model';

@Controller('product')
export class ProductController {

	@Post('create')
	async create(@Body() dto: Omit<Product, '_id'>) { return dto; }

	@Get(':id')
	async get(@Param('id') id: string) { return id; }

	@Delete(':id')
	async delete(@Param('id') id: string) { return id; }

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: Product) {
		return { dto, id };
	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDto) {
		return dto;
	}

}
