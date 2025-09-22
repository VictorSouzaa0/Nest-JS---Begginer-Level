import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/database/prisma.service';
import { User } from 'generated/prisma';
@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser(data:Prisma.UserCreateInput):Promise<User>{
        
        return this.prisma.user.create({
            data,
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

