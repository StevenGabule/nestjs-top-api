import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constant';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) { }

	@Post('create')
	async create(@Body() body: CreateReviewDto) {
		return this.reviewService.create(body);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedReview = await this.reviewService.delete(id)
		if (!deletedReview) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
		}
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {
		return this.reviewService.findByProductId(productId);
	}
}
