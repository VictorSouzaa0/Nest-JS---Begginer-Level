import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDTO } from './create-user.dto';
import { User } from 'generated/prisma';
import * as bcrypt from 'bcrypt';
import { urlencoded } from 'express';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: CreateUserDTO): Promise<User>{

        const salOrRounds = 10;
        const password = data.password;
        const hash = await bcrypt.hash(password, salOrRounds);

        return this.prisma.user.create({
            data: {
                username: data.username,
                password: hash,
                email: data.email
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

