import {
Controller, Post,Body,} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from 'generated/prisma';
import { CrateUserDTO } from './user.dto';
@Controller('user')
export class UserController {
    constructor(private userSerivce: UserService){}
    
    @Post('signup')
    async signupUser(
        @Body() userData: CrateUserDTO,
    ): Promise<UserModel> {
        return this.userSerivce.createUser({...userData});
    }
    
}
