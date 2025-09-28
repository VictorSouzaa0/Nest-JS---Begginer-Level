import {Controller, Post,Body,} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User as UserModel } from 'generated/prisma';
import { CreateUserDTO } from './user.dto';
@Controller('user')
export class UserController {
    constructor(private userSerivce: UserService){}
    
    @Post()
    async signupUser(
        @Body() userData: CreateUserDTO,
    ): Promise<UserModel> {
        return this.userSerivce.createUser({...userData});
    }
    
    
}
