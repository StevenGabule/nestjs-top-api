import { Controller, HttpCode, Post, Body } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

	@HttpCode(200)
	@Post('register')
	async register(@Body() dto: any) {
		return dto;
	}

	@HttpCode(200)
	@Post('login')
	async login(@Body() body: LoginDto) {
		return body;
	}

	@HttpCode(200)
	@Post('forgot-password')
	async forgotPassword(@Body() dto: any) {
		return dto;
	}

	@HttpCode(200)
	@Post('reset-password')
	async resetPassword(@Body() dto: any) {
		return dto;
	}

	@HttpCode(200)
	@Post('two-fa-email')
	async twoFAEmail(@Body() dto: any) {
		return dto;
	}

	@HttpCode(200)
	@Post('two-fa-phone')
	async twoFAPhone(@Body() dto: any) {
		return dto;
	}

	@HttpCode(200)
	@Post('two-fa-google-auth')
	async twoFAGoogleAuth(@Body() dto: any) {
		return dto;
	}

	@HttpCode(200)
	@Post('google-auth')
	async googleAuth(@Body() dto: any) {
		return dto;
	}

	@HttpCode(200)
	@Post('twitter-auth')
	async twitterAuth(@Body() dto: any) {
		return dto;
	}

	@HttpCode(200)
	@Post('facebook-auth')
	async facebookAuth(@Body() dto: any) {
		return dto;
	}

	@HttpCode(200)
	@Post('linkedin-auth')
	async linkedInAuth(@Body() dto: any) {
		return dto;
	}

}
