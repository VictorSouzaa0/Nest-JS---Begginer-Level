import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/database/prisma.service';
import { User } from 'generated/prisma';
import * as bcrypt from 'bcrypt';
import { LoginUserDTO } from './user.dto';


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser(data:Prisma.UserCreateInput):Promise<User>{

        const saltOrRounds = 10;
        const password = data.password;
        const hash = await bcrypt.hash(password, saltOrRounds);
        return this.prisma.user.create({
            data:{
                username: data.username,
                email: data.email,
                password: hash,
            }
        });
    }

    async updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User |  null> {
        const {where,data} = params;
        return this.prisma.user.update({
            data,
            where
        });
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where,
        }); 
    }


}

