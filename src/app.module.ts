import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseService } from './database/database.service';
import { PrismaService } from './database/prisma.service';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  providers: [DatabaseService, PrismaService,],
})
export class AppModule {}
