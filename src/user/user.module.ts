import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UserController } from './user.controller';
import { User, UserScheme } from './user.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserScheme }])],
  controllers: [UserController],
})
export class UserModule { }
