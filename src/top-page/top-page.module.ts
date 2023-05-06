import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { TopPage, TopPageScheme } from './top-page.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: TopPage.name, schema: TopPageScheme }])],
  controllers: [TopPageController]
})
export class TopPageModule { }
