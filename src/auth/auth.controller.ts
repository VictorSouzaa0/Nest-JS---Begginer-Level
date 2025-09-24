import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from 'src/user/user.dto';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService ){}

}
