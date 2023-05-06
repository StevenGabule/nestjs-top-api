import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { Review, ReviewScheme } from './review.model';
import { ReviewService } from './review.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Review.name, schema: ReviewScheme }])],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule { }

