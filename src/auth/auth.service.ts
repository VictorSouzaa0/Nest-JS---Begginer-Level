import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'generated/prisma';
import { LoginUserDTO } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    /*
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ){}
    async signIn(
        username: string,
        password: string,
    ):Promise <{access_token: string}> {}
    }
*/
}
