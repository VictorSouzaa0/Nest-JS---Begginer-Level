import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from 'src/user/user.dto';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService ){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() data: LoginUserDTO) {
        return this.authService.signIn(data.email, data.password);
    }
}
