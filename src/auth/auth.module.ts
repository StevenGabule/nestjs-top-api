import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthController } from './auth.controller';
import { Auth, AuthScheme } from './auth.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Auth.name, schema: AuthScheme }])],
  controllers: [AuthController],
})
export class AuthModule { }
