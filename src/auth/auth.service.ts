import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { LoginUserDTO } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
    async signIn(data: LoginUserDTO):Promise<any> {
        const user = await this.userService.findOne(data.email == data.password)
    }
}
