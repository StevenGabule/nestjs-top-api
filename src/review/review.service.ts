import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.model';
import { Model } from 'mongoose';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(Review.name) private readonly reviewModel: Model<Review>
	) { }

	async create(@Body() body: CreateReviewDto): Promise<Review> {
		const createdReview = new this.reviewModel(body);
		return createdReview.save();
	}

	async findAll(): Promise<Review[]> {
		return this.reviewModel.find().exec();
	}

	async delete(id: string): Promise<Review | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: string): Promise<Review[]> {
		return this.reviewModel.find({ productId: productId }).exec();
	}

	async findOne(id: string): Promise<Review> {
		return this.reviewModel.findOne({ _id: id }).exec();
	}

	async update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review> {
		const updatedUser = await this.reviewModel.findByIdAndUpdate({ _id: id }, updateReviewDto);
		if (updatedUser) {
			return await this.findOne(id);
		}
		return null;
	}
}
